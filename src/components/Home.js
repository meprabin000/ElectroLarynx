import { useState, useEffect, setState } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import HomeStyles from "../styles/HomeStyles";
import { StatusBar } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';

const Login = (props) => {
    const [range, setRange]=useState('50%');
    //const [sliding, setSliding]=useState('Inactive');
 
    return (
    <View style={HomeStyles.mainView}>
        <View style={HomeStyles.loginDisplay}>
                    {/* Slider Wrapper */}
                    <Text style={{fontSize:20, fontWeight: 'bold'}}>{'Volume: '+ range}</Text>
                   
                 <View style={HomeStyles.innerSliders}>
                        <Slider
                            style={{width:250, height:40}}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#414141"
                            maximumTrackTintColor="#D9D9D9"
                            thumbTintColor="#414141"
                            step={.0001}
                            value={0.5}
                            onValueChange = {value => setRange(parseInt(value * 100) + '%')}
                           // onSlidingStart = {() => setSliding('Sliding')}
                           // onSlidingComplete={() => setSliding('Inactive')}
                            
                           
                        />
                    <StatusBar style="auto"/>
        </View>
        </View>
    </View>
    );
}

export default Login;