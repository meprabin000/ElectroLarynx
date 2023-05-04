import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet,Text,View,Image,TouchableOpacity } from 'react-native';
import Signup from '../components/Signup';
import Login from '../components/Login';
import TextToSpeech from '../components/TextToSpeech';
import Home from '../components/Home';
import TabStyles from "../styles/TabStyles";

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    
       <Tab.Navigator 
        tabBarOptions={{
        showLabel: false,
        tabBarStyle: {
          backgroundColor: '#FAFBFE',
          position: 'absolute',
        },
      }}>

      <Tab.Screen name="Home" component={Home} options={{ tabBarIcon: ({focused})=> (
        <View>
          <Image
            source={require('../Assets/images/home.png')}
            
            resizeMode='contain'
            style={{
              width:25,
              height:25,
              tintColor: focused ? '#EF233C' : 'black',
              
            }}
          />
        
          
        </View>

      ),
      }} />
      <Tab.Screen name="Text To Speech" component={TextToSpeech}options={{ tabBarIcon: ({focused})=> (
        <View>
          <Image
            source={require('../Assets/images/t2s.png')}
            resizeMode='contain'
            style={{
              width:35,
              height:42,
              tintColor: focused ? '#EF233C' : 'black',
            }}
          />
          
        </View>

      ),
      }} />



    </Tab.Navigator>
  );
}


export default Tabs;


/*

<Text style={{color: focused ? '#FF0000' : 'black', fontSize:12,}}>
              Home
          </Text>


<Text style={{color: focused ? '#FF0000' : 'black', fontSize:12, textAlign: 'center'}}>
              Text to Speech
          </Text>

*/