import { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import SettingStyles from "../styles/SettingStyles";

const Settings = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

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
            <View style={SettingStyles.inputDisplay}>

                <View style={SettingStyles.nameButtonWrapper}>
                    
                        <Text style={SettingStyles.nameButton}>firstName lastName</Text>
                        <Text style={SettingStyles.nameButton}>@username</Text>
                        
                </View>

            {/* Title Button */}
            <View style={SettingStyles}>
            <Text style={SettingStyles}>Electrolarynx</Text>
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
            
            

            
        </View>
    );
}

export default Settings;