import { StyleSheet } from "react-native";

const SignupStyles = StyleSheet.create( {
    logo: {
        width: 75,
        height: 75,
        resizeMode: 'contain'
    },
    signupDisplay: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        position: 'relative'
    },
    mainView: {
        height: '100%',
        width: '100%',
        marginTop: 70,
        fontFamily: 'Helvetica'
    },
    titleView: {
        fontSize: 40,
        fontWeight: '400'
    },
    inputDisplay: {
        paddingRight: 20,
        paddingLeft: 20,
        width: '100%',
        alignItems: "center"
        // backgroundColor: 'blue'
    },
    inputWrapper: {
        borderWidth: 0.2,
        borderColor: 'red',
        borderRadius: 10,
        width: 350,
        marginTop: 20,
        backgroundColor: '#F9F9F9'
    },
    firstLastNameWrapper: {
        width: 170,
    },
    inputBoxDisplay: {
        height: 40,
        padding: 10,
        fontSize: 17,
        
    },
    forgotPasswordButton: {
        fontSize: 15,
        textAlign: 'center'
    },
    forgotPasswordButtonWrapper: {
        marginTop: 20,
    },
    signInButtonWrapper: {
        backgroundColor: 'red',
        borderRadius: 20,
        marginLeft: 50,
        marginRight: 50,
        padding: 5,
        marginTop: 60
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
        marginTop: 40
    },
    registerHere: {
        textAlign: 'center',
        paddingTop: 5,
        fontSize: 15,
        color:'red',
        textDecorationLine: 'underline',
        fontWeight: '400'
    }
})

export default SignupStyles;