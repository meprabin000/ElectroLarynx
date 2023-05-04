import React, { useEffect, useState, useRef } from 'react';
import { View, Text, TouchableOpacity, NativeEventEmitter, NativeModules } from 'react-native';
// import BleManager from 'react-native-ble-manager';
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

const SeedBluetoothNotification = ({ deviceId }) => {
  const [pulse, setPulse] = useState('');
  const [battery, setBattery] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {

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
    BleManager.scan([], 5, true).then(() => {
      // Success code
      console.log("Scan started");
    });

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
        return BleManager.startNotification(deviceId, HEART_RATE_SERVICE_UUID, BATTERY_MEASUREMENT_CHAR_UUID);
      })
      .then(() => {
        console.log('Heart rate notifications started');
        return bleManagerEmitter.addListener('BleManagerDidUpdateValueForCharacteristic', handleCharacteristicUpdate.current);
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
    if (characteristic === HEART_RATE_MEASUREMENT_CHAR_UUID) {
      const text = String.fromCharCode(...value)
      setPulse(text)
      Tts.stop();
      Tts.speak(text);
      getBattery();
    }
  });

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
      {/* <TouchableOpacity onPress={() => {onPress();}}>
        <Text>Press me!</Text>
      </TouchableOpacity> */}
      {/* <TouchableOpacity onPress={test}>
        <Text>start bluetooth</Text>
      </TouchableOpacity> */}
      <TouchableOpacity onPress={() => {getBattery();}}>
        <Text>Get battery!</Text>
      </TouchableOpacity>
      <Text>Spoken Text: {pulse !== null ? `${pulse}` : 'No speech data'}</Text>
      <Text>Battery: {battery !== null ? `${battery}%` : 'No battery data'}</Text>
    </View>
  );
};

export default SeedBluetoothNotification;