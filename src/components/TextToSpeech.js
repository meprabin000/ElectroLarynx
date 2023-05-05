import { useState, useEffect  } from "react";
import { TouchableWithoutFeedback, Keyboard, Image, Pressable, Text, TextInput, TouchableOpacity, View, SafeAreaView, StyleSheet } from "react-native";
import TextToSpeechStyles from "../styles/TextToSpeechStyles";
import Tts from 'react-native-tts';
import Slider from '@react-native-community/slider';
import { ScrollView } from "react-native-gesture-handler";


const TextToSpeech = (props) => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  //const [text, onChangeText] = useState("");

  const [voices, setVoices] = useState([]);
  const [ttsStatus, setTtsStatus] = useState('initiliazing');
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [speechRate, setSpeechRate] = useState(0.5);
  const [speechPitch, setSpeechPitch] = useState(1);
  const [
    text,
    setText
  ] = useState("What would you like to say?\nEnter your text here.");

  useEffect(() => {
    const t_start = Tts.addEventListener(
      'tts-start',
      (_event) => setTtsStatus('started')
    );
    const t_finish = Tts.addEventListener(
      'tts-finish',
      (_event) => setTtsStatus('finished')
    );
    const t_cancel = Tts.addEventListener(
      'tts-cancel',
      (_event) => setTtsStatus('cancelled')
    );
    Tts.setDefaultRate(speechRate);
    Tts.setDefaultPitch(speechPitch);
    Tts.getInitStatus().then(initTts);
    return () => {
      t_start.remove();
      t_finish.remove()
      t_cancel.remove();
    };
  }, []);

  const initTts = async () => {
    const voices = await Tts.voices();
    const availableVoices = voices
      .filter((v) => !v.networkConnectionRequired && !v.notInstalled)
      .map((v) => {
        return {id: v.id, name: v.name, language: v.language};
      });
    let selectedVoice = null;
    if (voices && voices.length > 0) {
      selectedVoice = voices[2].id;
      try {
        await Tts.setDefaultLanguage(voices[2].language);
      } catch (err) {
        //Samsung S9 has always this error:
        //"Language is not supported"
        console.log(`setDefaultLanguage error `, err);
      }
      //await Tts.setDefaultVoice(voices[2].id);
      await Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact');

      setVoices(availableVoices);
      setSelectedVoice(selectedVoice);
      setTtsStatus('initialized');
    } else {
      setTtsStatus('initialized');
    }
  };

  const readText = async () => {
    Tts.stop();
    Tts.speak(text);
  };

  const updateSpeechRate = async (rate) => {
    await Tts.setDefaultRate(rate);
    setSpeechRate(rate);
  };

  const updateSpeechPitch = async (rate) => {
    await Tts.setDefaultPitch(rate);
    setSpeechPitch(rate);
  };

  const onVoicePress = async (voice) => {
    try {
      await Tts.setDefaultLanguage(voice.language);
    } catch (err) {
      // Samsung S9 has always this error: 
      // "Language is not supported"
      console.log(`setDefaultLanguage error `, err);
    }
    //await Tts.setDefaultVoice(voice.id);
    await Tts.setDefaultVoice('com.apple.ttsbundle.Daniel-compact');

    setSelectedVoice(voice.id);
  };

  const handleDismissKeyboard = () => {
    Keyboard.dismiss();
  };
    return (
      <>
      
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} 
                          accessible={false}>
        <View style={TextToSpeechStyles.mainView}>
            {/* Logo image */}
            <View style={TextToSpeechStyles.loginDisplay}>
                <Image
                    style={TextToSpeechStyles.logo}
                    source={require('../Assets/images/logo.png')}
                />
                <Text style={TextToSpeechStyles.titleView}>Text to Speech Converter</Text>
                
                
            </View>

            <View style={TextToSpeechStyles.inputDisplay}>
              <View style={TextToSpeechStyles.inputWrapper}>
              <ScrollView contentContainerStyle={{flexGrow: 1}}
                keyboardShouldPersistTaps='handled'
              >
                <TextInput
                  style={TextToSpeechStyles.input}
                  editable
                  multiline={true}
                  numberOfLines = {40}
                  maxLength = {1000}
                  placeholder={"What would you like to say?\nEnter your text here."}
                  onChangeText={(text) => setText(text)}
                  onBlur={handleDismissKeyboard}
                />
                </ScrollView>
                </View>  
                
                <Text style={TextToSpeechStyles.characterView}>
                  {text.length}/1000
                </Text>
                
            </View>
        

          
            
            {/* Sign in Button */}
            <View style={TextToSpeechStyles.signInButtonWrapper}>
                <Pressable onPress={() => {readText(); console.log(text.length);}}>
                  <Text style={TextToSpeechStyles.signInText}>Play</Text>
                  
                </Pressable>
            </View> 

           




        </View>
        </TouchableWithoutFeedback>
        </>
    );
}


export default TextToSpeech;