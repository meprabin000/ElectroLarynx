import { StyleSheet } from "react-native";

const HomeStyles = StyleSheet.create( {
    logo: {
      width: 60,
      height: 70,
      resizeMode: 'contain',
      marginRight: -200,
  },
  
    loginDisplay: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        position: 'relative',
        
    },
    mainView: {
        height: '100%',
        width: '100%',
        
    },
    titleView: {
      fontSize: 25,
      fontWeight: '400',
      marginLeft: -200,
      paddingLeft: 100,
      
  },
    
    inputDisplay: {
        paddingRight: 40,
        paddingLeft: 40,
        width: '100%',
        height: 200,
        // backgroundColor: 'blue'
    },
    inputWrapper: {
        borderWidth: 0.2,
        borderColor: 'red',
        borderRadius: 10,
        width: 300,
        marginTop: 20
    },
    inputBoxDisplay: {
        height: 40,
        padding: 10,
        fontSize: 20
    },
    forgotPasswordButton: {
        fontSize: 15,
        textAlign: 'center'
    },
    forgotPasswordButtonWrapper: {
        marginTop: 20,
    },
    batteryButtonWrapper: {
      backgroundColor: '#34C759',
      padding: 5,
      marginLeft: 45,
      marginTop: 15,
      width: 80,
      height: 80,
      borderRadius: 80/2,
      alignContent: "flex-start",
      justifyContent: "center",
      alignSelf: "flex-start",
  },
      playButtonWrapper: {
        backgroundColor: '#EF233C',
        padding: 5,
        marginLeft: 150,
        marginTop: 15,
        width: 80,
        height: 80,
        borderRadius: 80/2,
        alignContent: "flex-start",
        justifyContent: "center",
        alignSelf: "flex-start",
    },
    bleButtonWrapper: {
      backgroundColor: '#0A84FF',
      padding: 5,
      marginRight: 45,
      marginTop: 15,
      width: 80,
      height: 80,
      borderRadius: 80/2,
      alignContent: "flex-end",
      justifyContent: "center",
      alignSelf: "flex-end",
    },
    signInText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    noAccountText: {
        textAlign: 'center',
        color: '#888888'
    },
    registerHereWrapper: {
        marginTop: 120
    },
    registerHere: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 15,
        textDecorationLine: 'underline',
        fontWeight: '400'
    },
    input: {
      height: 500,
      margin: 12,
      padding: 10,
      marginTop: 30,
      fontSize: 17,
    },
   
})

export default HomeStyles;