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

const App = () => {
  return (
    <View style={AppStyles.appView}>
      <Home />
    </View>
  );
}

export default App;
