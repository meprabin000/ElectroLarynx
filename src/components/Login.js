import { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import LoginStyles from "../styles/LoginStyles";

const Login = ({ navigation }) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    return (
        <View style={LoginStyles.mainView}>
            {/* Logo image */}
            <View style={LoginStyles.loginDisplay}>
                <Image
                    style={LoginStyles.logo}
                    source={require('../Assets/images/logo.png')}
                />
                <Text style={LoginStyles.titleView}>Login</Text>
            </View>

            {/* Username Password Box */}
            <View style={LoginStyles.inputDisplay}>
                <View style={LoginStyles.inputWrapper}>
                    <TextInput
                        style={LoginStyles.inputBoxDisplay}
                        onChangeText={setUsername}
                        value={username}
                        placeholder="Username"
                    />
                </View>

                <View style={LoginStyles.inputWrapper}>
                    <TextInput
                        style={LoginStyles.inputBoxDisplay}
                        onChangeText={setPassword}
                        value={password}
                        secureTextEntry={true}
                        placeholder="Password"
                    />
                </View>

                <View style={LoginStyles.forgotPasswordButtonWrapper}>
                    <TouchableOpacity>
                        <Text style={LoginStyles.forgotPasswordButton}>Forgot Password?</Text>
                    </TouchableOpacity>
                </View>
            </View>
            
            {/* Sign in Button */}
            <View style={LoginStyles.signInButtonWrapper}>
                <Pressable onPress={(e) => console.log("Sign in Clicked!")}>
                    <Text style={LoginStyles.signInText}>Sign In</Text>
                </Pressable>
            </View>

            {/* Don't have an account */}
            <View style={LoginStyles.registerHereWrapper}>
                <Text style={LoginStyles.noAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={(e) => navigation.navigate('Signup')}>
                    <Text style={LoginStyles.registerHere}>Register Here!</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Login;