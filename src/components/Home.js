import { useState, useEffect, setState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";

import HomeStyles from "../styles/HomeStyles";
import SettingStyles from "../styles/SettingStyles";
import { Divider } from "react-native-flex-layout";
import { StatusBar } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';


const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [date, setDate] = useState(null);
    const [range, setRange]=useState('50%');

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
                    <Text style={HomeStyles.buttonText2}>%</Text>
                </Pressable>
            </View>
            
              {/* Play Button */}
              <View style={HomeStyles.playButtonWrapper}>
                <Pressable onPress={(e) => console.log("PLAY Clicked!")}>
                <Image
                source={require('../assets/images/play.png')}
                resizeMode='contain'
                style={{
                    alignSelf: 'center',
                    width:25,
                    height:55,
                    alignItems: 'center',
              }}
                />
                </Pressable>
                
            </View>
            
              {/* BLE Button */}
              <View style={HomeStyles.bleButtonWrapper}>
                <Pressable onPress={(e) => console.log("BLE Clicked!")}>
                <Image
                source={require('../assets/images/ble.png')}
                resizeMode='contain'
                style={{
                    alignSelf: 'center',
                    width:40,
                    height:100,
                    alignItems: 'center',
              }}
                />
                </Pressable>
            </View>
            </View>
            
            <View style={HomeStyles.subtitleWrapperEL}>
                <View style={HomeStyles.redCircle}></View>
                <View style={HomeStyles.forgotPasswordButtonWrapper}>
                        <TouchableOpacity>
                            <Text style={HomeStyles.text3}>   Electrolarynx Volume: {range}</Text>
                        </TouchableOpacity>
                </View>
            </View>
                    {/* Slider Wrapper */}
                    <View style={HomeStyles.sliderWrapper}>
                           <View style={HomeStyles.innerSliders}>
                            <Slider
                                style={{width:250, height:40}}
                                minimumValue={0}
                                maximumValue={1}
                                minimumTrackTintColor="#414141"
                                maximumTrackTintColor="#D9D9D9"
                                thumbTintColor="#414141"
                                step={.0001}
                                value={0.5}
                                onValueChange = {value => setRange(parseInt(value * 100) + '%')}  
                            />
                            <StatusBar style="auto"/>
                        </View>

            </View>
 
            <Text style={SettingStyles.subDefaultText}>Select the voice you would like to output from your Electrolarynx device.</Text>
            
                        {/* Custom Voice Button */}
                        <View style={HomeStyles.headerDisplay2}>
                                    <Image
                            source={require('../assets/images/sound.png')}
                            resizeMode='contain'
                            style={{
                                alignSelf: 'flex-start',
                                width:25,
                                height:55,
                                alignItems: 'flex-start',
                        }}
                            />
                            <View style={SettingStyles.voiceButtonWrapper}>
                            <TouchableOpacity onPress={(e) => console.log("Custom Voice Pressed")}>
                            <Text style={SettingStyles.voiceButtonText}>Custom Voice</Text>
                                </TouchableOpacity>   
                            </View>
                            </View>
                            <Divider style= {SettingStyles.dividerDesign}></Divider>
                            <View style={HomeStyles.headerDisplay2}>
                                    <Image
                            source={require('../assets/images/sound.png')}
                            resizeMode='contain'
                            style={{
                                alignSelf: 'flex-start',
                                width:25,
                                height:55,
                                alignItems: 'flex-start',
                        }}
                            />
                        {/* Default Voice Button */}
                        <View style={SettingStyles.defaultButtonWrapper}>
                            <TouchableOpacity onPress={(e) => console.log("Default Voice Pressed")}>
                            <Text style={SettingStyles.voiceButtonText}>Default Voice</Text>
                            
                                </TouchableOpacity>   
                            </View>
                            </View>
                       
            {/* voice selection */}
                <View style={SettingStyles.ButtonWrapper}>
            <TouchableOpacity onPress={(e) => console.log("Disconnect Pressed")}>
            <Text style={SettingStyles.otherButtonText}>Disconnect</Text>
                </TouchableOpacity>  
                 
            </View>
            <Divider style= {SettingStyles.dividerDesign}></Divider>
            {/* Report Button 
            <View style={SettingStyles.ButtonWrapper}>
            <TouchableOpacity onPress={(e) => console.log("Report Pressed")}>
            <Text style={SettingStyles.otherButtonText}>Report a Problem</Text>
                </TouchableOpacity>   
            </View>
            
            */}
            
            {/* Logout Button */}
            <View style={SettingStyles}>
            <TouchableOpacity onPress={(e) => console.log("Logout Pressed")}>
            <Text style={SettingStyles.logoutButton}>Log out</Text>
                </TouchableOpacity>   
            </View>
            
            
                  


            
        </View>
        
        
    </View>
    
    );
}

export default Login;