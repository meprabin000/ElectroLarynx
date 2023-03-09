import { StyleSheet } from "react-native";

const ForgotPasswordStyles = StyleSheet.create( {
    logo: {
        width: 80,
        height: 100,
        resizeMode: 'contain'
    },
    fsDisplay: {
        width: '100%',
        height: '26%',
        alignItems: 'center',
        position: 'relative'
    },
    mainView: {
        height: '100%',
        width: '100%',
    },
    titleView: {
        fontSize: 35,
        fontWeight: '300'
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
        width: 310,
        borderRadius: 15,
        marginTop: -80,
        backgroundColor: '#F9F9F9',
        
    },
    inputBoxDisplay: {
        height: 40,
        padding: 10,
        fontSize: 17,
        textAlign: 'center',
        
    },
    forgotPasswordtxt: {
        flex: 1,
        fontSize: 17,
        marginLeft: 50,
        marginRight: 50,
        color: '#393939',
        
    },
    forgotPasswordButtonWrapper: {
        marginTop: 20,
    },
    submitButtonWrapper: {
        backgroundColor: 'red',
        borderRadius: 20,
        marginLeft: 50,
        marginRight: 50,
        padding: 5,
        marginTop:-30,
        
    },
    submitText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 23
    },
   
})

export default ForgotPasswordStyles;