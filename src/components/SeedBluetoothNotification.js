import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, NativeEventEmitter, NativeModules } from 'react-native';
import BleManager from 'react-native-ble-manager';
import Tts from 'react-native-tts';

const HEART_RATE_SERVICE_UUID =  '180f' ;
// const HEART_RATE_MEASUREMENT_CHAR_UUID = '5AF3B44B-8C42-4F9F-A5B1-84E8E4B655EE';
const HEART_RATE_MEASUREMENT_CHAR_UUID = '5af3b44b-8c42-4f9f-a5b1-84e8e4b655ee';

const BATTERY_MEASUREMENT_CHAR_UUID = '2A19' ;

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

const SeedBluetoothNotification = ({ deviceId }) => {
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
        return BleManager.startNotification(deviceId, HEART_RATE_SERVICE_UUID, HEART_RATE_MEASUREMENT_CHAR_UUID);
      })
      .then(() => {
        console.log('Heart rate notifications started');
        bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleCharacteristicUpdate.current);
      })
      .catch((error) => {
        console.log(`Error connecting to device with ID ${deviceId}`, error);
        setIsConnected(false);
      });
  
    return () => {
      bleManagerEmitter.removeListener('BleManagerDidUpdateValueForCharacteristic', handleCharacteristicUpdate.current);
    }
  }, [bleManagerEmitter, deviceId]);
  

  const handleCharacteristicUpdate = useRef((data) => {
    const { value, characteristic } = data;
    console.log("hellloooooo?")
    // console.log(value)
    if (characteristic === HEART_RATE_MEASUREMENT_CHAR_UUID) {
      // const heartRateMeasurement = value.getUint8(1);
      const text = String.fromCharCode(...value)
      console.log('Heart rate:', text);
      setPulse(text)
      Tts.stop();
      Tts.speak(text);
      // Emit an event to notify the component that the heart rate has changed
      // bleManagerEmitter.emit('heartRateChanged', heartRateMeasurement);
    }
  });

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

  const handleTtsFinish = () => {
    console.log('TTS finished speaking');
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

export default SeedBluetoothNotification;