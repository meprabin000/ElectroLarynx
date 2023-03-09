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
      fontSize: 30,
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
    text: {
        fontSize: 15,
        padding: 10,   
        marginLeft: 115,
        
    },
    text2: {
        marginLeft: -150,
        padding: 10,
        fontSize: 15,

    },
    forgotPasswordButtonWrapper: {
      
    },
    genButton: {
        flexDirection: 'row',
        margin: 3,
    },
    headerDisplay: {
        flexDirection: 'row',
        alignContent: 'center',
        margin: 10,
        marginRight: -150,
       justifyContent: "center",
       marginTop: 20,
    },
    sliderWrapper: {
        backgroundColor: '#FFD9D7',
        borderRadius: 10,
        height: 190,
        width: '90%', 
        alignItems: 'center',
        justifyContent: "center",
    },
    innerSliders: {
        backgroundColor: '#FFF1F1',
        borderRadius: 10,
        height: 50,
        width: '80%', 
        margin: 10,
    },
    batteryButtonWrapper: {
      backgroundColor: '#34C759',
      padding: 5,
      margin: 17,
      width: 85,
      height: 85,
      borderRadius: 85/2,
      alignContent: "flex-start",
      justifyContent: "center",
      alignSelf: "flex-start",
  },
      playButtonWrapper: {
        backgroundColor: '#EF233C',
        padding: 5,
        margin: 17,
        width: 85,
        height: 85,
        borderRadius: 85/2,
        alignContent: "flex-start",
        justifyContent: "center",
        alignSelf: "flex-start",
    },
    bleButtonWrapper: {
      backgroundColor: '#0A84FF',
      padding: 5,
      margin: 17,
      width: 85,
      height: 85,
      borderRadius: 85/2,
      alignContent: "flex-end",
      justifyContent: "center",
      alignSelf: "flex-end",
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 25
    },
    noAccountText: {
        textAlign: 'center',
        color: '#888888'
    },
    input: {
      height: 500,
      margin: 12,
      padding: 10,
      marginTop: 30,
      fontSize: 17,
    },
    dateText:{
     color: '#878787',
     textAlign: 'left',
     marginLeft: -260,
     padding: 5,
    },
    redCircle: {
      width: 10,
      height: 10,
      borderRadius: 10/2,
      backgroundColor: 'red',
      marginRight: 10,
    },
    subtitleWrapperEL: {
       flexDirection: 'row',   
       margin: 10,
       marginLeft: -150,  
    },
    subtitleWrapperVC: {
        flexDirection: 'row',   
        margin: 10,
        marginLeft: -200,  
        padding: 10,
     },
    text3: {
        marginTop: -4,
        fontSize: 17,
    },
   
})

export default HomeStyles;