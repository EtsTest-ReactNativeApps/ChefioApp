import React from 'react'
import {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import styled from 'styled-components'
import Header from '../Components/Header'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Title from '../Components/Title'
import Hyperlink from '../Components/Hyperlink'
import HorizontalView from '../Components/HorizontalView'
import Alignemt from '../Components/AlignemtView'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';

const SignInScreen = ({navigation }) =>{
    return(
    <Alignemt>
        <View style={{marginBottom: 18}}>
    <Header>Welcome Back!</Header>

    <Title FontColor={'#9FA5C0'}>   Please enter your account here     </Title>
    </View >
        <Input InputPlaceHolder={'Email or Phone number'} Password={false}>
        <MaterialCommunityIcons style={styles.IconStyle} name="email-outline" size={24} color="black" />
         </Input>
     <Input  InputPlaceHolder={'Password'} Password={true}>
     <SimpleLineIcons style={styles.IconStyle} name="lock" size={24} color="black" />
    </Input>
     <Hyperlink  onPress={() => navigation.navigate('PasswordRecovery')}>
        <Title FontColor ={'#2E3E5C'} > Forgot Password?</Title>
     </Hyperlink>
    <Button    > 
     Login
     </Button>
     <Title FontColor={'#9FA5C0'}>   or Continue with     </Title>
     <Button   BackColor={'#FF5842'} > 
    <AntDesign name="google" style = {{}}size={20} color="white" />
    &nbsp; Google         
     </Button>
     <HorizontalView>
       
        <Title FontColor={'#3E5481'}>&nbsp;Don't have any account?</Title>
        <Hyperlink onPress={() => navigation.navigate('SignUp')} ><Title FontColor={'#1FCC79'} FontWeight={'bold'}>&nbsp; Sign Up</Title></Hyperlink>
        </HorizontalView>
        </Alignemt>
        ) 
    
}

const styles = StyleSheet.create({
  ForgotStyle:{
    fontWeight: '500', 
    fontSize: 15,
    color: '#2E3E5C',
    textAlign: 'right'
  },
IconStyle:{
    alignSelf: 'center',
    marginHorizontal: 15
    
}})

export default SignInScreen;