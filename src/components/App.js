/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import Signup from './Signup';
import Login from './Login';
import TextToSpeech from './TextToSpeech'
import AppStyles from '../styles/AppStyles';
import {useAuth0, Auth0Provider} from 'react-native-auth0';
import { NavigationContainer } from '@react-navigation/native';
//import { createNativeStackNavigator } from '@react-navigation/native-stack';

//const Stack = createNativeStackNavigator();

const App = () => {
  return (
    //<NavigationContainer>
     // <Stack.Navigator screenOptions={{ headerShown: false }}>
      //  <Stack.Screen name="Login" component={Login} />
     //   <Stack.Screen name="Signup" component={Signup} />
     // </Stack.Navigator>
   // </NavigationContainer>
    // <Auth0Provider domain={"dev-ejp81yk157h52u8t.us.auth0.com"} clientId={"BdBMWwTTB3MqF1MiPuoAgdkzrpDVd4QM"}>
       <View style={AppStyles.appView}>
         <Signup />
       </View>
    // </Auth0Provider>
  );
}

export default App;
