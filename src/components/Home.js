import { useState, useEffect, setState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

import HomeStyles from "../styles/HomeStyles";

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [date, setDate] = useState(null);
    state = { value: 5, };

    useEffect(() => {
        let today = new Date();
        let date = (today.getMonth()+1)+ '/'+today.getDate()+ '/'+ today.getFullYear();
        setDate(date);
      }, []);

    return (
        <View style={HomeStyles.mainView}>
            
            {/* Logo image */}
            <View style={HomeStyles.loginDisplay}>
            <View style={HomeStyles.headerDisplay}>
                <Image
                    style={HomeStyles.logo}
                    source={require('../assets/images/logo.png')}
                />
                <Text style={HomeStyles.titleView}>Hello,{"\n"}@username!</Text>
                </View>
                <Text style={HomeStyles.dateText}>{date}</Text>
          

                {/* Flex Arrangement of Buttons */}
            <View style={HomeStyles.genButton}>
                {/* Battery Button */}
            <View style={HomeStyles.batteryButtonWrapper}>
                <Pressable onPress={(e) => console.log("Battery Clicked!")}>
                    <Text style={HomeStyles.buttonText}>%</Text>
                </Pressable>
            </View>
              {/* Play Button */}
              <View style={HomeStyles.playButtonWrapper}>
                <Pressable onPress={(e) => console.log("PLAY Clicked!")}>
                    <Text style={HomeStyles.buttonText}>PLAY</Text>
                </Pressable>
            </View>
              {/* BLE Button */}
              <View style={HomeStyles.bleButtonWrapper}>
                <Pressable onPress={(e) => console.log("BLE Clicked!")}>
                    <Text style={HomeStyles.buttonText}>BLE</Text>
                </Pressable>
            </View>
            </View>
            
            <View style={HomeStyles.subtitleWrapperEL}>
                <View style={HomeStyles.redCircle}></View>
                <View style={HomeStyles.forgotPasswordButtonWrapper}>
                        <TouchableOpacity>
                            <Text style={HomeStyles.text3}>Electrolarynx Settings</Text>
                        </TouchableOpacity>
                </View>
            </View>
                    {/* Slider Wrapper */}
                    <View style={HomeStyles.sliderWrapper}>
                        <Pressable onPress={(e) => console.log("Slider Clicked!")}>
                        </Pressable>
                        <Text style={HomeStyles.text4}>Volume: {this.state.value}</Text>
                        <View style={HomeStyles.innerSliders}>
                        <Pressable onPress={(e) => console.log("voice slider!")}>
                        </Pressable>
                        
                      
                    </View>
                    <Text style={HomeStyles.text4}>Pitch: {this.state.value}</Text>
                        <View style={HomeStyles.innerSliders}>
                        <Pressable onPress={(e) => console.log("pitch slider!")}>
                        <View style={HomeStyles.container}>
                            
                        </View>
                        </Pressable>
                        </View>
                    </View>

                    <View style={HomeStyles.subtitleWrapperVC}>
                <View style={HomeStyles.redCircle}></View>
                <View style={HomeStyles.forgotPasswordButtonWrapper}>
                        <TouchableOpacity>
                            <Text style={HomeStyles.text3}>Vocal Indicator</Text>
                        </TouchableOpacity>
                </View>
            </View>
            
                  


            
        </View>
        
    </View>
    );
}

export default Login;