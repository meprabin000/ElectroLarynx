import { useState, useEffect, setState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import {Slider} from '@miblanchard/react-native-slider';
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
      state = {
        value: 0.2,
    };
    return (
        
        <View style={HomeStyles.mainView}>
            
            {/* Logo image */}
            <View style={HomeStyles.loginDisplay}>
          
                    {/* Slider Wrapper */}
                   
                        <Text style={HomeStyles.text4}>Volume: {this.state.value}</Text>
                        <View style={HomeStyles.innerSliders}>
                  

                        <Pressable onPress={(e) => console.log("voice slider!")}>
                        </Pressable>
                        
                        <View style={HomeStyles.container}>
                        <Slider
                    value={this.state.value}
                    onValueChange={value => this.setState ({value})}
                />
                        </View>
                    </View>
                  
                   

            
                  


            
        </View>
        
    </View>
    );
}

export default Login;