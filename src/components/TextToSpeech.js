import { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native";
import TextToSpeechStyles from "../styles/TextToSpeechStyles";

const TextToSpeech = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [text, onChangeText] = useState("");
    const [value, setValue] = useState("Press Play");
    
    
    

    return (
        <View style={TextToSpeechStyles.mainView}>
            {/* Logo image */}
            <View style={TextToSpeechStyles.loginDisplay}>
                <Image
                    style={TextToSpeechStyles.logo}
                    source={require('../assets/images/logo.png')}
                />
                <Text style={TextToSpeechStyles.titleView}>Text to Speech Converter</Text>
            </View>

            <View style={TextToSpeechStyles.inputDisplay}>
              <View style={TextToSpeechStyles.inputWrapper}>
                <TextInput
                  style={TextToSpeechStyles.input}
                  multiline = {true}
                  
                  numberOfLines = {40}
                  maxLength = {1000}
                  placeholder={"What would you like to say?\n Enter your text here."}
                  
                 
                />
                </View>
            </View>

          
            
            {/* Sign in Button */}
            <View style={TextToSpeechStyles.signInButtonWrapper}>
              
           
          
            
                <Pressable onPress={(e) => console.log("Press Play Clicked")}>
                  <Text style={TextToSpeechStyles.signInText}>Play</Text>
                  
                </Pressable>
            </View>

           

           
        </View>
    );
}

export default TextToSpeech;