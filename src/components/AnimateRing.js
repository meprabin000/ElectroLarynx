import { PureComponent, useState, useEffect, useCallback } from "react";
import { 
    Image, 
    Pressable, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    View, 
    Button, 
    StyleSheet, 
    TouchableWithoutFeedback, 
    Animated, Easing, 
    Platform } 
    from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component} from "react";
//import { AudioContext, OscillatorNode, OfflineAudioContext} from "standardized-audio-context";
import HomeStyles from "../styles/HomeStyles";
import MicStyles from "../styles/MicStyles";

const AppNew = (props={}) => {

    const currentVolume = props?.currentVolume ?? 0
    
    const maxVolume = 50;
    
    const animationRef = React.useRef(new Animated.Value(0)).current
    
    const startAnimations = useCallback(() => {
      Animated.timing(animationRef,{
        toValue:(currentVolume/maxVolume),
        useNativeDriver:true,
        duration:500
      }).start()
    },[animationRef,currentVolume])
    
    useEffect(() => {
    startAnimations()
    },[startAnimations])
    
    const polAnim = animationRef.interpolate({
      inputRange:[0,1],
      outputRange:[1,2],
      extrapolate:'clamp'
    })
    
      return(
        <Animated.View style={[styles.ripler,{
    
          position:'absolute',
          height:100,
          width:100,
          borderRadius:120,
    
          transform:[{
            scale:polAnim
          }]
        }]} >
        </Animated.View>
      )
    }
      const data = [1,6,39,40,50,22,7,15,12,1,6,39,40,50,22,7,15,18,1,6,39,40,50,22,7,15,12,1,6,39,40,50,22,7,15,12,1,6,39,40,50,22,7,15,12,1,6,39,40,50,22,7,15,12]
    
    const Audio  = () => {
    
        const [currentTime, setTime ] = useState(0);
        const [currIndex,setIndex] = useState(0)
    
        useEffect(() => {
         const interval = setInterval(() => {
            const newIndex = currIndex +1;
            setTime(data[currIndex]);
            setIndex(newIndex);
          },500)
          return () => clearInterval(interval)
        },[currIndex]) 
    
            return (
                <View style={MicStyles.micWrapper}>   
                  <View style={{height:100,width:100}} >
                  <AppNew currentVolume={currentTime} />
                  <View style={{height:100,width:100,borderRadius:100,
                  alignItems:'center',
                  justifyContent:'center',
                  backgroundColor:'lime',
                  opacity: 0.9,
                  zIndex:3
                  }} >
                  <Text style={MicStyles.text2}>Voice</Text>
                  </View>
                  </View>
                </View>
            );
    
    }
    
    
    
    
    const styles = StyleSheet.create({
        pageContainer: {
            flex: 1,
            alignItems:'center',
            justifyContent:'center'
        },
        ripler:{
     backgroundColor:'lime',
     opacity: 0.2,
     zIndex:2
        },
        contentContainer: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        iconContainer: {
            margin: 16, 
            alignItems: 'center',
            justifyContent: 'center',
        },
    });
    
    

export default Audio;
