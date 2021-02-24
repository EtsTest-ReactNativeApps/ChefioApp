import React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import styled from 'styled-components'
import Header from '../Components/Header'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Title from '../Components/Title'
import Alignemt from '../Components/AlignemtView'
import HorizontalView from '../Components/HorizontalView'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const PasswordRecoveryScreen = () =>{
    return(
    <Alignemt>
    <View style={{marginBottom: 18}}>

        <Header>Password recovery</Header>
    
        <Title FontColor={'#9FA5C0'}>   Enter your email to recover your password     </Title>
    
        </View >
        <Input InputPlaceHolder={'Email or Phone number'} Password={false}>

            <MaterialCommunityIcons style={styles.IconStyle} name="email-outline" size={24} color="black" />

         </Input>
     <Button > 
     Continue
     </Button>
        </Alignemt>
        )

}

const styles = StyleSheet.create({
    IconStyle:{
        alignSelf: 'center',
        marginHorizontal: 15
        
    }
})

export default PasswordRecoveryScreen;