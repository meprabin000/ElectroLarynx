import { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import SettingStyles from "../styles/SettingStyles";

const Settings = (props) => {
   
    return (
        <View style={SettingStyles.mainView}>
            {/* Logo image */}
            <View style={SettingStyles.loginDisplay}>
                <Image
                    style={SettingStyles.logo}
                    source={require('../assets/images/logo.png')}
                />
                <Text style={SettingStyles.titleView}>Settings</Text>
            </View>

            {/* firstName lastName username */}
            <View style={SettingStyles.textDisplay}>

                
                    
                        <Text style={SettingStyles.name}>firstName lastName</Text>
                        <Text style={SettingStyles.name}>@username</Text>
                        <Text style={SettingStyles.subText}>Joined ...</Text>  
            
            {/* voice selection */}
            
                        <Text style={SettingStyles.name}>---------</Text>
                        <Text style={SettingStyles.subText}>Voice Selection</Text>  
                        {/* Custom Voice Button */}
                            <View style={SettingStyles.voiceButtonWrapper}>
                            <TouchableOpacity onPress={(e) => console.log("Disconnect Pressed")}>
                            <Text style={SettingStyles.voiceButtonText}>Custom Voice</Text>
                                </TouchableOpacity>   
                            </View>
                            <Text style={SettingStyles.name}>---------</Text>

                        {/* Default Voice Button */}
                        <View style={SettingStyles.defaultButtonWrapper}>
                            <TouchableOpacity onPress={(e) => console.log("Disconnect Pressed")}>
                            <Text style={SettingStyles.voiceButtonText}>Default Voice</Text>
                                </TouchableOpacity>   
                            </View>

                        <Text style={SettingStyles.subDefaultText}>Select the voice you would like to output from your Electrolarynx device.</Text>  

                        <Text style={SettingStyles.name}>---------</Text>
               

                        </View>
                        



               
                

            

            {/* Disconnect Button */}
            <View style={SettingStyles.ButtonWrapper}>
            <TouchableOpacity onPress={(e) => console.log("Disconnect Pressed")}>
            <Text style={SettingStyles.buttonText}>Disconnect</Text>
                </TouchableOpacity>   
            </View>
            

            {/* Report Button */}
            <View style={SettingStyles.ButtonWrapper}>
            <TouchableOpacity onPress={(e) => console.log("Report Pressed")}>
            <Text style={SettingStyles.buttonText}>Report a Problem</Text>
                </TouchableOpacity>   
            </View>

            {/* Logout Button */}
            <View style={SettingStyles}>
            <TouchableOpacity onPress={(e) => console.log("Logout Pressed")}>
            <Text style={SettingStyles.logoutButton}>Log out</Text>
                </TouchableOpacity>   
            </View>

          
          
          
          
            
            

            
        </View>
    );
}

export default Settings;