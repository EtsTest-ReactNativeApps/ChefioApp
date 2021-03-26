import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import ButtonTransparent from '../../Components/core/ButtonTransparent'

import Container from '../../Components/layout/ContainerView'
import Row from '../../Components/layout/Row'

const ProfileScreen = () => {
  var [buttonClick, setButtonClick] = useState({ btnSelected: 1 })

  const notClicked = {
    backgroundColor: '#F4F5F7',
    color: '#9FA5C0',
  }
  return (
    <Container>
      <Row>
        <ButtonTransparent
          style={buttonClick.btnSelected == 1 ? null : { ...notClicked }}
          onPress={() => setButtonClick({ btnSelected: 1 })}
          width={'80px'}
        >
          All
        </ButtonTransparent>
        <ButtonTransparent
          style={buttonClick.btnSelected == 2 ? null : { ...notClicked }}
          onPress={() => setButtonClick({ btnSelected: 2 })}
          width={'90px'}
        >
          Food
        </ButtonTransparent>
        <ButtonTransparent
          style={buttonClick.btnSelected == 3 ? null : { ...notClicked }}
          onPress={() => setButtonClick({ btnSelected: 3 })}
          width={'90px'}
        >
          Drink
        </ButtonTransparent>
      </Row>
    </Container>
  )
}

var styles = StyleSheet.create({})
export default ProfileScreen
