import { useState, useEffect } from "react";
import { Image, Pressable, Text, TextInput, TouchableOpacity, View, Button } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import React, {Component} from "react";
import HomeStyles from "../styles/HomeStyles";
import MicStyles from "../styles/MicStyles";

class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        audio: null
      };
      this.toggleMicrophone = this.toggleMicrophone.bind(this);
    }
  
    async getMicrophone() {
      const audio = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false
      });
      this.setState({ audio });
    }
  
    stopMicrophone() {
      this.state.audio.getTracks().forEach(track => track.stop());
      this.setState({ audio: null });
    }
  
    toggleMicrophone() {
      if (this.state.audio) {
        this.stopMicrophone();
      } else {
        this.getMicrophone();
      }
    }
  
    render() {
      return (
        <View style={MicStyles.micWrapper}>
            <Pressable onPress = {this.toggleMicrophone}>
                
            <Icon
                name="microphone"
                type='font-awesome'
                size={30}                                            
            /> 
                         
            </Pressable>
        </View>
      );
    }
  
  
  }
  
export default App;