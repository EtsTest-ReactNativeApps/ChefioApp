import React, { Children } from 'react'
import { View, TextInput, StyleSheet, Text, StatusBar, SafeAreaView, Image } from 'react-native'
import styled from 'styled-components'

import Container from '../../Components/layout/ContainerView'
import Title from '../../Components/Title'
import Header from '../../Components/Header'
import Button from '../../Components/core/Button'

const OnboardingScreen = () => {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.ViewStyle}>
          <View style={styles.pictureView}>
            <Image style={styles.ImageStyle} source={require('../../assets/pic1.png')} />
          </View>
        </View>
      </SafeAreaView>

      <View>
        <Text>Start Cooking</Text>

        <Text fontColor={'#9FA5C0'}>
          {' '}
          Let's join our community {'\n'} &nbsp; &nbsp; to cook better food{' '}
        </Text>
      </View>
    </View>
  )
}

const Container = styled.View`
flex: 1
height: 100px
background-color:#fff


`
const ReciepeBackground = styled.ImageBackground`
  border: 8px solid #ffffff;
  border-radius: 80px;
`

const styles = StyleSheet.create({
  ViewStyle: {
    backgroundColor: 'white',

    width: '100%',
    height: '75%',
  },
  pictureView: {
    position: 'absolute',
    top: 10,
    left: 50,
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ImageStyle: {
    width: 160,
    height: 160,
    borderRadius: 400 / 2,
  },
})

export default OnboardingScreen
