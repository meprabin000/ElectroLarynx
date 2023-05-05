import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BleManager from 'react-native-ble-manager';
import { UUID } from 'react-native-ble-manager';
import Tts from 'react-native-tts';

// const serviceUUID = UUID('180d');
// const characteristicUUID = UUID('2A37');


const HEART_RATE_SERVICE_UUID =  '180f' ;
const HEART_RATE_MEASUREMENT_CHAR_UUID = '5AF3B44B-8C42-4F9F-A5B1-84E8E4B655EE';
const BATTERY_MEASUREMENT_CHAR_UUID = '2A19' ;

const SeedBluetooth = ({ deviceId }) => {
  const [pulse, setPulse] = useState('');
  const [battery, setBattery] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    BleManager.connect(deviceId)
    .then(() => {
        console.log(`Connected to device with ID ${deviceId}`);
        setIsConnected(true);
        return BleManager.retrieveServices(deviceId);
      })
      .then((services) => {
        console.log('Services:', services);
      })
      .catch((error) => {
        console.log(`Error connecting to device with ID ${deviceId}`, error);
        setIsConnected(false);
      });
   
  }, [deviceId]);

  
  
  const handleCharacteristicUpdate = ({ value }) => {
    const heartRateMeasurement = value.getUint8(1);
    setPulse(heartRateMeasurement);
  };

  const onPress = () => {
    BleManager.read(deviceId, HEART_RATE_SERVICE_UUID, HEART_RATE_MEASUREMENT_CHAR_UUID)
    .then((data) => {
      console.log(`Read data: ${data}`);
      setPulse(data)
      Tts.stop();
      Tts.speak(String.fromCharCode(...data));
    })
    .catch((error) => {
      console.log(`Read error: ${error}`);
    });
  };

  useEffect(() => {
    Tts.addEventListener('tts-finish', handleTtsFinish);
    return () => {
      Tts.removeEventListener('tts-finish', handleTtsFinish);
    };
  }, []);

  const handleTtsFinish = () => {
    console.log('TTS finished speaking');
  };

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

  return ( 
    <View>
      <TouchableOpacity onPress={() => {onPress();}}>
        <Text>Press me!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {getBattery();}}>
        <Text>Get battery!</Text>
      </TouchableOpacity>
      <Text>pooop</Text>
      <Text>Heart rate: {pulse !== null ? `${pulse} bpm` : 'No speech data'}</Text>
      <Text>Battery: {battery !== null ? `${battery} bpm` : 'No battery data'}</Text>
    </View>
  );
};

export default SeedBluetooth;
