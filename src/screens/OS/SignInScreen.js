import React from 'react'
import {View,StyleSheet,Text} from 'react-native'
import Header from '../../Components/core/Header'
import Button from '../../Components/core/Button'
import Input from '../../Components/core/Input'
import Title from '../../Components/core/Title'
import Hyperlink from '../../Components/core/Hyperlink'
import Row from '../../Components/layout/Row'
import Container from '../../Components/layout/ContainerView'
import { AntDesign } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';


const SignInScreen = ({navigation }) =>{
   
    return(
       
    <Container>
        <View style={{marginBottom: 18}}>
    <Header>Welcome Back!</Header>

    <Title fontColor={'#9FA5C0'}>   Please enter your account here     </Title>
    </View >
    <Row>
        <Input inputPlaceHolder={'Email or Phone number'} Password={false}>
        <MaterialCommunityIcons style={styles.iconStyle} name="email-outline" size={24} color="black" />
         </Input>
         </Row>

         <Row>
     <Input  inputPlaceHolder={'Password'} Password={true}>
     <SimpleLineIcons style={styles.iconStyle} name="lock" size={24} color="black" />
    </Input>
    </Row>
     <Hyperlink  onPress={() => navigation.navigate('PasswordRecovery')}>
        <Title fontColor ={'#2E3E5C'} > Forgot Password?</Title>
     </Hyperlink>
    <Button onPress={()=> navigation.navigate('Home')}  > 
     Login
     </Button>
     <Title fontColor={'#9FA5C0'}>   or Continue with     </Title>

     <Button   backColor={'#FF5842'} > 
    <AntDesign name="google" style = {{}}size={20} color="white" />

    &nbsp; Google         
     </Button>
     <Row>
       
        <Title fontColor={'#3E5481'}>&nbsp;Don't have any account?</Title>
        <Hyperlink onPress={() => navigation.navigate('SignUp')} ><Title fontColor={'#1FCC79'} fontWeight={'bold'}>&nbsp; Sign Up</Title></Hyperlink>
        </Row>
        </Container>
        ) 
    
}

const styles = StyleSheet.create({
  
iconStyle:{
    alignSelf: 'center',
    marginHorizontal: 15
    
}})

export default SignInScreen;