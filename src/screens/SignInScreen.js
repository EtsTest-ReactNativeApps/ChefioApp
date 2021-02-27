import React from 'react'
import {View,StyleSheet} from 'react-native'

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

    <Title fontColor={'#9FA5C0'}>   Please enter your account here     </Title>
    </View >

    <HorizontalView>
        <Input inputPlaceHolder={'Email or Phone number'} Password={false}>
        <MaterialCommunityIcons style={styles.IconStyle} name="email-outline" size={24} color="black" />
         </Input>
         </HorizontalView>

         <HorizontalView>
     <Input  inputPlaceHolder={'Password'} Password={true}>
     <SimpleLineIcons style={styles.IconStyle} name="lock" size={24} color="black" />
    </Input>
    </HorizontalView>
     <Hyperlink  onPress={() => navigation.navigate('PasswordRecovery')}>
        <Title fontColor ={'#2E3E5C'} > Forgot Password?</Title>
     </Hyperlink>
    <Button    > 
     Login
     </Button>
     <Title fontColor={'#9FA5C0'}>   or Continue with     </Title>
     <Button   backColor={'#FF5842'} > 
    <AntDesign name="google" style = {{}}size={20} color="white" />
    &nbsp; Google         
     </Button>
     <HorizontalView>
       
        <Title fontColor={'#3E5481'}>&nbsp;Don't have any account?</Title>
        <Hyperlink onPress={() => navigation.navigate('SignUp')} ><Title fontColor={'#1FCC79'} fontWeight={'bold'}>&nbsp; Sign Up</Title></Hyperlink>
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