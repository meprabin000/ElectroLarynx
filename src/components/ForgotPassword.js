import { useState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import ForgotPasswordStyles from "../styles/ForgotPasswordStyles";


const ForgotPassword = (props) => {
    const [email, setEmail] = useState("")
   

    return (
        <View style={ForgotPasswordStyles.mainView}>
            {/* Logo image */}
            <View style={ForgotPasswordStyles.fsDisplay}>
                <Image
                    style={ForgotPasswordStyles.logo}
                    source={require('../assets/images/logo.png')}
                />
                <Text style={ForgotPasswordStyles.titleView}>Forgot Password?</Text>
            </View>

          {/* Forgot Password Text */}
            <View style={ForgotPasswordStyles.fsDisplay}>
              <Text style={ForgotPasswordStyles.forgotPasswordtxt}>Please enter the email associated with your account: </Text>
            </View>

            {/* Enter Email Box */}
            <View style={ForgotPasswordStyles.inputDisplay}>
                <View style={ForgotPasswordStyles.inputWrapper}>
                    <TextInput
                        style={ForgotPasswordStyles.inputBoxDisplay}
                        onChangeText={setEmail}
                        value={email}
                        placeholder="Email Address"
                    />
                </View>
            </View>

            {/* Submit Button */}
            <View style={ForgotPasswordStyles.submitButtonWrapper}>
              <Pressable onPress={(e) => console.log("Submit Clicked!")}>
                    <Text style={ForgotPasswordStyles.submitText}>Submit</Text>
                </Pressable>
            </View>
            
        

            

        </View> 
    );
}

export default ForgotPassword;