import { StyleSheet } from "react-native";

const SettingStyles = StyleSheet.create( {
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
    textDisplay: {
        paddingRight: 40,
        paddingLeft: 40,
        width: '100%',
        //height: 180,
        marginTop:-200,
        //backgroundColor: 'blue',
        
    },
   
   
    inputWrapper: {
        borderRadius: 10,
        width: 330,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
        height: 520,
        marginTop: -180,
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
    ButtonWrapper: {
        backgroundColor: '#FFF1F1',
        padding: 5,
        margin: 20,
        width: 260,
        height: 40,
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",  
    },
    voiceButtonWrapper: {
        padding: 5,
        width: 300,
        height: 40,
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",  
        //backgroundColor: 'red',
        
    },
    defaultButtonWrapper: {
        padding: 5,
        width: 300,
        height: 40,
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",  
        //backgroundColor: 'red',
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    voiceButtonText: {
        color: 'black',
        textAlign: 'left',
        fontSize: 15,
        paddingLeft: 30,
    },
    otherButtonText: {
        color: 'black',
        fontSize: 15,
        textAlign: 'center',
    },
    name: {
      fontSize: 15,
      padding:4,
      //backgroundColor: 'red',
      
  },
  nameWrapper: {
    marginTop: -150,
},
    subText: {
        color: '#878787',
        padding:5,
        marginLeft:-200,
        fontSize: 13,
  },
  subDefaultText: {
    color: '#878787',
    padding:17,
    fontSize: 13,
    textAlign: 'center',
    
},

  logoutButton: {
    //color: '#696969',
    textAlign: 'center',
    fontSize: 15,
    padding: 20,
    textDecorationLine: "underline",
    
  },

  dividerDesign: {
    margin: 5,
  },
})

export default SettingStyles;