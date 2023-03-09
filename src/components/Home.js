import { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import HomeStyles from "../styles/HomeStyles";

const Login = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={HomeStyles.mainView}>
            {/* Logo image */}
            <View style={HomeStyles.loginDisplay}>
                <Image
                    style={HomeStyles.logo}
                    source={require('../assets/images/logo.png')}
                />
                <Text style={HomeStyles.titleView}>Hello, @username!</Text>
                {/* Battery Button */}
            <View style={HomeStyles.batteryButtonWrapper}>
                <Pressable onPress={(e) => console.log("Battery Clicked!")}>
                    <Text style={HomeStyles.signInText}>%</Text>
                </Pressable>
            </View>
              {/* Play Button */}
              <View style={HomeStyles.playButtonWrapper}>
                <Pressable onPress={(e) => console.log("PLAY Clicked!")}>
                    <Text style={HomeStyles.signInText}>PLAY</Text>
                </Pressable>
            </View>
              {/* BLE Button */}
              <View style={HomeStyles.bleButtonWrapper}>
                <Pressable onPress={(e) => console.log("BLE Clicked!")}>
                    <Text style={HomeStyles.signInText}>BLE</Text>
                </Pressable>
            </View>
            </View>

            

            {/* Username Password Box */}
            <View style={HomeStyles.inputDisplay}>
                <View style={HomeStyles.inputWrapper}>
                    <TextInput
                        style={HomeStyles.inputBoxDisplay}
                        onChangeText={setUsername}
                        value={username}
                        placeholder="Username"
                    />
                </View>

                <View style={HomeStyles.inputWrapper}>
                    <TextInput
                        style={HomeStyles.inputBoxDisplay}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </View>

                <View style={HomeStyles.forgotPasswordButtonWrapper}>
                    <TouchableOpacity>
                        <Text style={HomeStyles.forgotPasswordButton}>Electrolarynx Settings</Text>
                    </TouchableOpacity>
                </View>

                <View style={HomeStyles.forgotPasswordButtonWrapper}>
                    <TouchableOpacity>
                        <Text style={HomeStyles.forgotPasswordButton}>Vocal Indicator</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            

            
        </View>
    );
}

export default Login;