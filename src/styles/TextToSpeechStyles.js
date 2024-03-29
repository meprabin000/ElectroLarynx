import { StyleSheet } from "react-native";

const TextToSpeechStyles = StyleSheet.create( {
    logo: {
        width: 60,
        height: 70,
        resizeMode: 'contain'
    },
    loginDisplay: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        position: 'relative'
    },
    mainView: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
    },
    titleView: {
        fontSize: 25,
        fontWeight: '300'
    },
    characterView: {
      color: '#908484',
      marginTop: -20,
      
      marginLeft: 250,
  },
    inputDisplay: {
        paddingRight: 40,
        paddingLeft: 40,
        width: '100%',
        height: 200,
        // backgroundColor: 'blue'
    },
    inputWrapper: {
        borderRadius: 10,
        width: 330,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: 520,
        marginTop: -150,
        backgroundColor: '#F1F3F6',
        
    },
    inputBoxDisplay: {
        height: 40,
        padding: 10,
        fontSize: 20
    },
    input: {
      height: 500,
      margin: 12,
      padding: 10,
      marginTop: 20,
      fontSize: 17,
    },
    signInButtonWrapper: {
        backgroundColor: 'red',
        padding: 5,
        marginTop: 100,
        width: 80,
        height: 80,
        borderRadius: 80/2,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    signInText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },
   
})

export default TextToSpeechStyles;