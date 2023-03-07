import { StyleSheet } from "react-native";

const LoginStyles = StyleSheet.create( {
    logo: {
        width: 300,
        height: 230,
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
        fontSize: 40,
        fontWeight: '500'
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
        marginTop: 20,
        backgroundColor: '#F9F9F9'
    },
    inputBoxDisplay: {
        height: 40,
        padding: 10,
        fontSize: 20
    },
    forgotPasswordButton: {
        fontSize: 15,
        textAlign: 'right',
        marginRight: 10,
        color: '#696969',

    },
    forgotPasswordButtonWrapper: {
        marginTop: 10,
    },
    signInButtonWrapper: {
        backgroundColor: 'red',
        borderRadius: 20,
        marginLeft: 50,
        marginRight: 50,
        padding: 5
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
        color: 'red',
        textDecorationLine: 'underline',
        fontWeight: '400'
    }
})

export default LoginStyles;