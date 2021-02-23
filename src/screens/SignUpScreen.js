import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import Header from '../Components/Header'
import styled from 'styled-components'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Title from '../Components/Title'
import Hyperlink from '../Components/Hyperlink'
import HorizontalView from '../Components/HorizontalView'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const SignUpScreen = () => {
    return(<Alignemt>
        <View style={{marginBottom: 18}}>

    <Header>Welcome!</Header>

    <Title FontColor={'#9FA5C0'}>   Please enter your account here     </Title>

    </View >

        <Input InputPlaceHolder={'Email or Phone number'} Password={false}>

        <MaterialCommunityIcons style={styles.IconStyle} name="email-outline" size={24} color="black" />

         </Input>

     <Input  InputPlaceHolder={'Password'} Password={true}>

     <SimpleLineIcons style={styles.IconStyle} name="lock" size={24} color="black" />

    </Input>

    <View style = {styles.PasswordCheckStyle}>

    <Title FontSize={'17px'} FontColor={'#3E5481'} >Your Password must contain:</Title>
    <HorizontalView>
    <AntDesign style={styles.IconStyle} name="checkcircle" size={20} color="green" />
    <Title>At least 6 characters</Title>
    </HorizontalView>
    
    <HorizontalView>
    <AntDesign style={styles.IconStyle} name="checkcircle" size={20} color="green" />
    <Title>Conatins a number</Title>
    
    </HorizontalView>
    </View>

    <Button >Sign Up</Button>

    </Alignemt>
    )
}

const Alignemt = styled.View`
    align-items:center;
    width: 100%
    height: 100%
    background: white; 

`
const styles = StyleSheet.create({
    PasswordCheckStyle:{
        alignItems:'flex-start',
        marginLeft:80,
        marginBottom: 60,
         width: "100%"
    },
    IconStyle:{
        alignSelf: 'center',
        marginHorizontal: 15
        
    }
})

export default SignUpScreen;