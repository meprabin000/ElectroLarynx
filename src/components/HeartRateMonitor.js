import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import BleManager from 'react-native-ble-manager';
import { UUID } from 'react-native-ble-manager';

// const serviceUUID = UUID('180d');
// const characteristicUUID = UUID('2A37');


const HEART_RATE_SERVICE_UUID =  '0000180d-0000-1000-8000-00805f9b34fb' ;
const HEART_RATE_MEASUREMENT_CHAR_UUID = '00002A37-0000-1000-8000-00805F9B34FB';

const HeartRateMonitor = ({ deviceId }) => {
  const [pulse, setPulse] = useState(null);
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
    //   .then(() => {
    //     console.log(`Connected to device with ID ${deviceId}`);
    //     setIsConnected(true);
    //   })
    //   .catch((error) => {
    //     console.log(`Error connecting to device with ID ${deviceId}`, error);
    //     setIsConnected(false);
    //   });

    // return () => {
    //   BleManager.disconnect(deviceId)
    //     .then(() => {
    //       console.log(`Disconnected from device with ID ${deviceId}`);
    //       setIsConnected(false);
    //     })
    //     .catch((error) => {
    //       console.log(`Error disconnecting from device with ID ${deviceId}`, error);
    //     });
    // };
  }, [deviceId]);

  const handleHeartRateUpdate = ({ value }) => {
    const heartRateMeasurement = value.getUint8(1);
    setPulse(heartRateMeasurement);
  };

//   useEffect(() => {
//     if (!isConnected) {
//       return;
//     }

//     BleManager.startNotification(deviceId, HEART_RATE_SERVICE_UUID, HEART_RATE_MEASUREMENT_CHAR_UUID)
//       .then(() => {
//         console.log(`Started notification for heart rate measurement characteristic on device with ID ${deviceId}`);
//         BleManager.onCharacteristicValueChanged(deviceId, HEART_RATE_SERVICE_UUID, HEART_RATE_MEASUREMENT_CHAR_UUID, handleHeartRateUpdate);
//       })
//       .catch((error) => {
//         console.log(`Error starting notification for heart rate measurement characteristic on device with ID ${deviceId}`, error);
//       });

//     return () => {
//       BleManager.stopNotification(deviceId, HEART_RATE_SERVICE_UUID, HEART_RATE_MEASUREMENT_CHAR_UUID)
//         .then(() => {
//           console.log(`Stopped notification for heart rate measurement characteristic on device with ID ${deviceId}`);
//         })
//         .catch((error) => {
//           console.log(`Error stopping notification for heart rate measurement characteristic on device with ID ${deviceId}`, error);
//         });
//     };
//   }, [isConnected, deviceId]);
const startNotification = (deviceId, serviceUUID, characteristicUUID, retries = 3) => {
    BleManager.startNotification(deviceId, serviceUUID, characteristicUUID)
      .then(() => {
        console.log(`Started notification for characteristic ${characteristicUUID} on device with ID ${deviceId}`);
        BleManager.onCharacteristicValueChanged(deviceId, serviceUUID, characteristicUUID, handleCharacteristicUpdate);
      })
      .catch((error) => {
        console.log(`Error starting notification for characteristic ${characteristicUUID} on device with ID ${deviceId}`, error);
  
        if (retries > 0) {
          console.log(`Retrying startNotification for characteristic ${characteristicUUID} on device with ID ${deviceId}...`);
          setTimeout(() => {
            startNotification(deviceId, serviceUUID, characteristicUUID, retries - 1);
          }, 5000);
        }
      });
  };
  
  useEffect(() => {
    if (!isConnected) {
      return;
    }
  
    startNotification(deviceId, HEART_RATE_SERVICE_UUID, HEART_RATE_MEASUREMENT_CHAR_UUID);
  
    return () => {
      BleManager.stopNotification(deviceId, HEART_RATE_SERVICE_UUID, HEART_RATE_MEASUREMENT_CHAR_UUID)
        .then(() => {
          console.log(`Stopped notification for characteristic ${HEART_RATE_MEASUREMENT_CHAR_UUID} on device with ID ${deviceId}`);
        })
        .catch((error) => {
          console.log(`Error stopping notification for characteristic ${HEART_RATE_MEASUREMENT_CHAR_UUID} on device with ID ${deviceId}`, error);
        });
    };
  }, [isConnected, deviceId]);
  
  return (
    <View>
      <Text>Heart rate: {pulse !== null ? `${pulse} bpm` : 'No pulse data'}</Text>
    </View>
  );
};

export default HeartRateMonitor;
