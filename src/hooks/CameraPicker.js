import React, { useState, useEffect } from 'react'
import { Button, Image, View, Platform } from 'react-native'
import * as ImagePicker from 'expo-image-picker'

export default () => {
  const [cameraImage, setCameraImage] = useState(null)

  useEffect(() => {
    ;(async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraPermissionsAsync()
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!')
        }
      }
    })()
  }, [])

  const openCamera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log(result)

    if (!result.cancelled) {
      setCameraImage(result.uri)
    }
  }

  return [openCamera, cameraImage]
}
