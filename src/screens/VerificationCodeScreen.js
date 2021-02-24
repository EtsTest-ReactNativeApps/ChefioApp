import React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import styled from 'styled-components'
import Header from '../Components/Header'
import Button from '../Components/Button'
import ButtonTransparent from '../Components/ButtonTransparent'
import InputNum from '../Components/InputNum'
import Title from '../Components/Title'
import HorizontalView from '../Components/HorizontalView'
import Alignemt from '../Components/AlignemtView'

const VerificationCodeScreen = ({navigation}) =>{
    return(
        <Alignemt>
        <View style={{marginBottom: 18}}>
    <Header>Check your email</Header>

    <Title FontColor={'#9FA5C0'}>   We’ve sent the code to your email     </Title>
    </View >
    <HorizontalView>
        <InputNum Height={'72px'} Width={'20%'}></InputNum>
        <InputNum Height={'72px'} Width={'20%'}></InputNum>
        <InputNum Height={'72px'} Width={'20%'}></InputNum>
        <InputNum Height={'72px'} Width={'20%'}></InputNum>
        
        </HorizontalView>
        <Title>code expires in: <Text style={styles.TextColor}> 5:00</Text></Title>
        <Button onPress={() => navigation.navigate('NewPassword')}>Next</Button>
        <ButtonTransparent>Send again</ButtonTransparent>
    </Alignemt>

    )
}

const styles = StyleSheet.create({
TextColor:{
    color: '#FF6464'
}
})

export default VerificationCodeScreen;