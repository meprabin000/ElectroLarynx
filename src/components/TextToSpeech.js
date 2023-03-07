import { useState  } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native";
import TextToSpeechStyles from "../styles/TextToSpeechStyles";

const TextToSpeech = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [text, onChangeText] = useState("");

    
    return (
        <View style={TextToSpeechStyles.mainView}>
            {/* Logo image */}
            <View style={TextToSpeechStyles.loginDisplay}>
                <Image
                    style={TextToSpeechStyles.logo}
                    source={require('../assets/images/logo.png')}
                />
                <Text style={TextToSpeechStyles.titleView}>Text to Speech Converter</Text>
                
                <Text>
                  Characters Left: {text.length}/1000
                </Text>
            </View>

            <View style={TextToSpeechStyles.inputDisplay}>
              <View style={TextToSpeechStyles.inputWrapper}>
                <TextInput
                  style={TextToSpeechStyles.input}
                  editable
                  multiline={true}
                  numberOfLines = {40}
                  maxLength = {1000}
                  placeholder={"What would you like to say?\nEnter your text here."}
                  onChangeText={text => onChangeText(text)}
                  
                 
                 
                  
                  
                />
                </View>  
                
            </View>

          
            
            {/* Sign in Button */}
            <View style={TextToSpeechStyles.signInButtonWrapper}>
                <Pressable onPress={(e) => console.log(text.length)}>
                  <Text style={TextToSpeechStyles.signInText}>Play</Text>
                  
                </Pressable>
            </View> 

           




        </View>
    );
}


export default TextToSpeech;