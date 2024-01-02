import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';

import {useDispatch} from 'react-redux';
import {useCamera} from 'react-native-camera-hooks';
import {RNCamera} from 'react-native-camera';

export default function CameraComponent() {
  //   const cameraRef = useRef(null);
  //   const {hasPermission, requestPermission} = useCameraPermission();

  const [{cameraRef}, {takePicture}] = useCamera(null);

  const Despatch = useDispatch();

  //   useEffect(() => {
  //     cameraAccess();
  //   }, []);

  //   const divices = useCameraDevice('back');
  //   if (divices === null) return <ActivityIndicator />;

  //   const cameraAccess = async () => {
  //     const newCameraPermission = await Camera.requestCameraPermission();
  //   };

  const takePhoto = async () => {
    const photo = await takePicture();
    console.log('====================================');
    console.log(photo.uri);
    console.log('====================================');

    Despatch({
      type: 'image',
      payload: photo.uri,
    });
  };

  return (
    <View style={{flex: 1}}>
      <RNCamera
        type={RNCamera.Constants.Type.back}
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
        ref={cameraRef}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => takePhoto()}
          style={{
            position: 'absolute',
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'red',
            bottom: 20,
            left: '45%',
          }}></TouchableOpacity>
      </RNCamera>
    </View>
  );
}
