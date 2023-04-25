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
import TextToSpeech from './TextToSpeech';
import Home from './Home';
import AppStyles from '../styles/AppStyles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '/Users/noor/Desktop/ElectroLarynx/src/navigation/Tabs.js';




const Stack = createNativeStackNavigator();


const App = () => {
  return (
    <NavigationContainer>
      <Tabs


      
      
      />

    
  </NavigationContainer>
  );
}

export default App;


/*
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
      <Stack.Screen
        name="Home"
        component={Home}
        options={{title:"Home"}}
       // options={{headerShown:false}}
      />
      <Stack.Screen
        name="TextToSpeech"
        component={TextToSpeech}
        options={{title:"TextToSpeech"}}
       // options={{headerShown:false}}
      />
    </Stack.Navigator>
*/