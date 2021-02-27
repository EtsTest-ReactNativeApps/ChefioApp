import React from 'react'
import {View,Text,StyleSheet,TextInput} from 'react-native'
import Header from '../Components/Header'
import styled from 'styled-components'
import Button from '../Components/Button'
import Input from '../Components/Input'
import Title from '../Components/Title'
import Alignemt from '../Components/AlignemtView'
import HorizontalView from '../Components/HorizontalView'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const NewPasswordScreen = () => {
    return(<Alignemt>
        <View style={{marginBottom: 18}}>

    <Header>Reset your password</Header>

    <Title fontColor={'#9FA5C0'}>   Please enter your new password     </Title>

    </View >

     <Input  inputPlaceHolder={'Password'} Password={true}>

     <SimpleLineIcons style={styles.IconStyle} name="lock" size={24} color="black" />

    </Input>

    <View style = {styles.PasswordCheckStyle}>

    <Title fontSize={'17px'} fontColor={'#3E5481'} >Your Password must contain:</Title>
    <HorizontalView>
    <AntDesign style={styles.IconStyle} name="checkcircle" size={20} color="green" />
    <Title>At least 6 characters</Title>
    </HorizontalView>
    
    <HorizontalView>
    <AntDesign style={styles.IconStyle} name="checkcircle" size={20} color="green" />
    <Title>Conatins a number</Title>
    
    </HorizontalView>
    </View>

    <Button >Done</Button>

    </Alignemt>
    )
}

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

export default NewPasswordScreen;