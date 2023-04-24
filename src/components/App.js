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
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
       //<View style={AppStyles.appView}>
       //  <Login />
      // </View>
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen
            name="Login"
            component={Login}
            options={{title:"Login"}}
            //options={{headerShown:false}}
            
          />
          <Stack.Screen
            name="Signup"
            component={Signup}
            options={{title:"Register"}}
           // options={{headerShown:false}}
            
          />
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

export default App;
