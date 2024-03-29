import { useState } from "react";
import { Button, Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import LoginStyles from "../styles/LoginStyles";
import * as React from 'react';
import { useNavigation } from '@react-navigation/native';
import {StackNavigator} from 'react-navigation';



const Login = ({navigation}) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        const user = await loginUser(username, password);
        if (user) {
            // navigate to home page
            navigation.navigate('Home');
        }
    };

    return (
        <View style={LoginStyles.mainView}>
            {/* Logo image */}
            <View style={LoginStyles.loginDisplay}>
                <Image
                    style={LoginStyles.logo}
                    source={require('../assets/images/logo.png')}
                />
                
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
            
            {/* Sign in Button <Pressable onPress={(e) => console.log("Sign in Clicked!")}>
            */}
            <View style={LoginStyles.signInButtonWrapper}>
            <Pressable onPress={() => navigation.navigate("Home")}>
                <Text style={LoginStyles.signInText}>Sign In</Text>
            </Pressable>
            </View>
            

            {/* Don't have an account */}
            <View style={LoginStyles.registerHereWrapper}>
                <Text style={LoginStyles.noAccountText}>Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                    <Text style={LoginStyles.registerHere}>Register Here!</Text>
                </TouchableOpacity>
                
                
            </View>
        </View>
    );
}

export default Login;