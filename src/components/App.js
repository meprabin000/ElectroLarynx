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
import TtoS from './TtoS';
//import TtoS_Test2 from './TtoS_Test2';
import ToS_Test3 from './ToS_Test3';

// import BluetoothScreen from './BluetoothScreen';
import HeartRateMonitor from './HeartRateMonitor';
import SeedBluetooth from './SeedBluetooth';
import SeedBluetoothNotification from './SeedBluetoothNotification';

const App = () => {
  //const deviceId = 'bb738232-9cd0-604a-b41c-7dece095c079'
  // const deviceId = '1597F0BB-4BCD-C6CF-A39B-9774847816B2'
  const deviceId = '1597f0bb-4bcd-c6cf-a39b-9774847816b2'
  //const deviceId = '5AF3B44B-8C42-4F9F-A5B1-84E8E4B655EE'
  return (
    <View style={AppStyles.appView}>
      {/* <HeartRateMonitor deviceId={deviceId}/> */}
      {/* <BluetoothScreen /> */}
      {/* <SeedBluetooth deviceId={deviceId}/> */}
      <SeedBluetoothNotification deviceId={deviceId}/>
      {/* <TextToSpeech /> */}
    </View>
  );
}

export default App;
// import React from 'react';
// import { FlatList, StyleSheet, View, Text } from 'react-native';
// import Signup from './Signup';
// import Login from './Login';
// import TextToSpeech from './TextToSpeech';
// import Home from './Home';
// import AppStyles from '../styles/AppStyles';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Tabs from '../navigation/Tabs.js';




// const Stack = createNativeStackNavigator();


// const App = () => {
//   return (
//     <NavigationContainer>
//       <Tabs
//       />

    
//   </NavigationContainer>
//   );
// }

// export default App;
