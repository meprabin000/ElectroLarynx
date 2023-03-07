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
        marginTop: 100,
        width: 260,
        height: 40,
        borderRadius: 10,
        alignContent: "center",
        justifyContent: "center",
        alignSelf: "center",
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15
    },
    nameButton: {
      fontSize: 15,
      padding:5,
      
  },
  nameButtonWrapper: {
      marginTop: -185,
  },

  logoutButton: {
    color: '#696969',
    textAlign: 'center',
    fontSize: 15,
    padding: 20,
    textDecorationLine: "underline",

  },
})

export default SettingStyles;