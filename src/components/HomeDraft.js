import React, { useState, useEffect, setState, useRef } from "react";
import { LogBox, NativeEventEmitter, NativeModules, Image, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
LogBox.ignoreAllLogs(); // Ignore log notification by message
import HomeStyles from "../styles/HomeStyles";
import SettingStyles from "../styles/SettingStyles";
import { Divider } from "react-native-flex-layout";
import { StatusBar } from 'react-native';
import {Slider} from '@miblanchard/react-native-slider';
import SeedBluetoothNotification from "./SeedBluetoothNotification";


import Tts from 'react-native-tts';

const HEART_RATE_SERVICE_UUID =  '180f' ;
const SERVICE_UUIDS = ['180F'];
const SECONDS_TO_SCAN_FOR = 7;
const ALLOW_DUPLICATES = true;

import BleManager, {
  BleDisconnectPeripheralEvent,
  BleManagerDidUpdateValueForCharacteristicEvent,
  BleScanCallbackType,
  //BleScanMatchMode,
  BleScanMode,
  Peripheral,
} from 'react-native-ble-manager';

// const HEART_RATE_MEASUREMENT_CHAR_UUID = '5AF3B44B-8C42-4F9F-A5B1-84E8E4B655EE';
const HEART_RATE_MEASUREMENT_CHAR_UUID = '5af3b44b-8c42-4f9f-a5b1-84e8e4b655ee';

const BATTERY_MEASUREMENT_CHAR_UUID = '2a19' ;

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const deviceId = '1597f0bb-4bcd-c6cf-a39b-9774847816b2'

const customVoice = 'com.apple.ttsbundle.Daniel-compact'


const HomeDraft = (props) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [date, setDate] = useState(null);
    const [range, setRange]=useState('50%');

    const [pulse, setPulse] = useState('');
    const [battery, setBattery] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [bluetoothPressed, setBluetoothPressed] = useState(true);
    const [isDefaultVoice, setIsDefaultVoice] = useState(true);


    useEffect(() => {
        console.log("isDefaultVoice = ", isDefaultVoice)
            Tts.setDefaultLanguage('en-US');
            if (isDefaultVoice) {
                Tts.setDefaultVoice('');
            } else {
                Tts.setDefaultVoice(customVoice);

            }
        
      }, [isDefaultVoice]);

    const handleCharacteristicUpdate = useRef((data) => {
        const { value, characteristic } = data;
        if (characteristic === HEART_RATE_MEASUREMENT_CHAR_UUID) {
          const text = String.fromCharCode(...value)
          setPulse(text)

          Tts.stop();
          console.diableYellowBox = true;
        
            

          
          Tts.speak(text);

          getBattery();
        }
      });

      const getBattery = () => {
        BleManager.read(deviceId, HEART_RATE_SERVICE_UUID, BATTERY_MEASUREMENT_CHAR_UUID)
          .then((data) => {
            console.log(`Read data: ${data}`);
            setBattery(data);
          })
          .catch((error) => {
            console.log(`Read error: ${error}`);
          });
      };
     

    useEffect(() => {
        console.log("bluetoothPressed =", bluetoothPressed);
        if (bluetoothPressed) {
            console.log("bluetoothPressed =", bluetoothPressed);
            
            try {
              BleManager.start({showAlert: false})
                .then(() => console.debug('BleManager started.'))
                .catch(error =>
                  console.error('BeManager could not be started.', error),
                );
            } catch (error) {
              console.error('unexpected error starting BleManager.', error);
              return;
            };
            BleManager.scan(['180f'], 500, true)
            .then(() => {
                console.log("Scan started");
                return BleManager.connect(deviceId);
            })
            .then(() => {
                console.log(`Connected to device with ID ${deviceId}`);
                setIsConnected(true);
                return BleManager.retrieveServices(deviceId);
            })
            .then((services) => {
                console.log('Services:', services);
                return BleManager.startNotification(deviceId, HEART_RATE_SERVICE_UUID, HEART_RATE_MEASUREMENT_CHAR_UUID);
            })
            .then(() => {
                console.log('Heart rate notifications started');
                return BleManager.startNotification(deviceId, HEART_RATE_SERVICE_UUID, BATTERY_MEASUREMENT_CHAR_UUID);
            })
            .then(() => {
                console.log('Battery notifications started');
                return bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleCharacteristicUpdate.current);
            })
            .catch((error) => {
                console.log(`Error connecting to device with ID ${deviceId}`, error);
                setIsConnected(false);
            });

            
        }
          
      
        // return () => {
        //   bleManagerEmitter.removeListener('BleManagerDidUpdateValueForCharacteristic', handleCharacteristicUpdate.current);
        // }
      }, [bluetoothPressed, bleManagerEmitter, deviceId]);
    
      
    const handleCustomVoice = () => {
        setIsDefaultVoice(false)
    }

    const handleDefaultVoice = () => {
        setIsDefaultVoice(true)
    }


    useEffect(() => {
        let today = new Date();
        let date = (today.getMonth()+1)+ '/'+today.getDate()+ '/'+ today.getFullYear();
        setDate(date);
      }, []);

    const handleBluetoothPressed = () => {
        if (isConnected == true) {
            disconnect();
        }
        else {
            reconnect();
        }
        console.log("wtf", bluetoothPressed);
    }

    const reconnect = () => {
        BleManager.isPeripheralConnected(deviceId)
          .then((isConnected) => {
            if (isConnected) {
              console.log(`Device with ID ${deviceId} is already connected`);
              setIsConnected(true);
              return BleManager.retrieveServices(deviceId);
            } else {
              console.log(`Device with ID ${deviceId} is not connected. Attempting to reconnect...`);
              return BleManager.connect(deviceId);
            }
          })
          .then((services) => {
            console.log('Services:', services);
            return BleManager.startNotification(deviceId, HEART_RATE_SERVICE_UUID, HEART_RATE_MEASUREMENT_CHAR_UUID);
          })
          .then(() => {
            console.log('Heart rate notifications started');
            return BleManager.startNotification(deviceId, HEART_RATE_SERVICE_UUID, BATTERY_MEASUREMENT_CHAR_UUID);
          })
          .then(() => {
            console.log('Battery notifications started');
            return bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleCharacteristicUpdate.current);
          })
          .catch((error) => {
            console.log(`Error connecting to device with ID ${deviceId}`, error);
            setIsConnected(false);
          });
      };

    const disconnect = () => {
        console.log("disconnect??")
        BleManager.disconnect(deviceId)
          .then(() => {
            console.log(`Disconnected from device with ID ${deviceId}`);
            setIsConnected(false);
          })
          .catch((error) => {
            console.log(`Error disconnecting from device with ID ${deviceId}`, error);
            setIsConnected(true);
          });
      };
      

    return (
        // <BluetoothScreen />
        <View style={HomeStyles.mainView}>
            
            
            {/* Logo image */}
            <View style={HomeStyles.loginDisplay}>
            <View style={HomeStyles.headerDisplay}>
                <Image
                    style={HomeStyles.logo}s
                    source={require('../assets/images/logo.png')}
                />
                <Text style={HomeStyles.titleView}>Hello,{"\n"}@username!</Text>
                </View>
                <Text style={HomeStyles.dateText}>{date}</Text>
          

                {/* Flex Arrangement of Buttons */}
            <View style={HomeStyles.genButton}>
                {/* Battery Button */}
            <View style={HomeStyles.batteryButtonWrapper}>
                <Pressable onPress={(e) => console.log("Battery Clicked!")}>
                    <Text style={HomeStyles.buttonText2}>{battery}%</Text>
                </Pressable>
            </View>
            
              {/* Play Button */}
              <View style={HomeStyles.playButtonWrapper}>
                <Pressable onPress={(e) => console.log("PLAY Clicked!")}>
                <Image
                source={require('../assets/images/play.png')}
                resizeMode='contain'
                style={{
                    alignSelf: 'center',
                    width:25,
                    height:55,
                    alignItems: 'center',
              }}
                />
                </Pressable>
                
            </View>
            
              {/* BLE Button */}
              <View style={[HomeStyles.bleButtonWrapper, {backgroundColor: isConnected ? '#0A84FF' : '#D3D3D3'}]}>
                <Pressable onPress={handleBluetoothPressed}>
                <Image
                source={require('../assets/images/ble.png')}
                resizeMode='contain'
                style={{
                    alignSelf: 'center',
                    width:40,
                    height:100,
                    alignItems: 'center',
              }}
                />
                </Pressable>
            </View>
            </View>
            
            <View style={HomeStyles.subtitleWrapperEL}>
                <View style={HomeStyles.redCircle}></View>
                <View style={HomeStyles.forgotPasswordButtonWrapper}>
                        <TouchableOpacity>
                            <Text style={HomeStyles.text3}>   Electrolarynx Volume: {range}</Text>
                        </TouchableOpacity>
                </View>
            </View>
                    {/* Slider Wrapper */}
                    <View style={HomeStyles.otherWrapper}>
                    <View style={HomeStyles.sliderWrapper}>
                    <Image
                            source={require('../assets/images/audio.png')}
                            resizeMode='contain'
                        
                            style={{
                                padding: 5,
                                width:35,
                                height:55, 
                                alignContent: 'center',
                        }}
                            />
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
                            />
                            <StatusBar style="auto"/>
                        </View>

            </View>
        </View>
            <Text style={SettingStyles.subDefaultText}>Select the voice you would like to output from your Electrolarynx device.</Text>
            
                        {/* Custom Voice Button */}
                        <View style={HomeStyles.headerDisplay2}>
                                    <Image
                            source={require('../assets/images/sound.png')}
                            resizeMode='contain'
                            style={{
                                alignSelf: 'flex-start',
                                width:25,
                                height:55,
                                alignItems: 'flex-start',
                        }}
                            />
                            <View style={SettingStyles.voiceButtonWrapper}>
                            <TouchableOpacity onPress={handleCustomVoice}>
                            <Text style={SettingStyles.voiceButtonText}>Custom Voice</Text>
                                </TouchableOpacity>   
                            </View>
                            </View>
                            <Divider style= {SettingStyles.dividerDesign}></Divider>
                            <View style={HomeStyles.headerDisplay2}>
                                    <Image
                            source={require('../assets/images/sound.png')}
                            resizeMode='contain'
                            style={{
                                alignSelf: 'flex-start',
                                width:25,
                                height:55,
                                alignItems: 'flex-start',
                        }}
                            />
                        {/* Default Voice Button */}
                        <View style={SettingStyles.defaultButtonWrapper}>
                            <TouchableOpacity onPress={handleDefaultVoice}>
                            <Text style={SettingStyles.voiceButtonText}>Default Voice</Text>
                            
                                </TouchableOpacity>   
                            </View>
                            </View>
                       
            {/* voice selection */}
                <View style={SettingStyles.ButtonWrapper}>
            <TouchableOpacity onPress={(e) => console.log("Disconnect Pressed")}>
            <Text style={SettingStyles.otherButtonText}>Disconnect</Text>
                </TouchableOpacity>  
                 
            </View>
            <Divider style= {SettingStyles.dividerDesign}></Divider>
            {/* Report Button 
            <View style={SettingStyles.ButtonWrapper}>
            <TouchableOpacity onPress={(e) => console.log("Report Pressed")}>
            <Text style={SettingStyles.otherButtonText}>Report a Problem</Text>
                </TouchableOpacity>   
            </View>
            
            */}
            
            {/* Logout Button */}
            <View style={SettingStyles}>
            <TouchableOpacity onPress={(e) => console.log("Logout Pressed")}>
            <Text style={SettingStyles.logoutButton}>Log out</Text>
                </TouchableOpacity>   
            </View>
            
            
                  


            
        </View>
        
        
    </View>
    
    );
}

export default HomeDraft;