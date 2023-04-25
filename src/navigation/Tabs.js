import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from '../components/Signup';
import Login from '../components/Login';
import TextToSpeech from '../components/TextToSpeech';
import Home from '../components/Home';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Text To Speech" component={TextToSpeech} />
    </Tab.Navigator>
  );
}


export default Tabs;