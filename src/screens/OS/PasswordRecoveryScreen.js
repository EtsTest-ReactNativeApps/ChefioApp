import React from 'react'
import {View,StyleSheet} from 'react-native'
import Header from '../../Components/core/Header'
import Button from '../../Components/core/Button'
import Input from '../../Components/core/Input'
import Title from '../../Components/core/Title'
import Container from '../../Components/layout/ContainerView'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

const PasswordRecoveryScreen = ({navigation}) =>{
    return(
    <Container>
    <View style={{marginBottom: 18}}>

        <Header>Password recovery</Header>
    
        <Title fontColor={'#9FA5C0'}>   Enter your email to recover your password     </Title>
    
        </View >
        <Input inputPlaceHolder={'Email or Phone number'} Password={false}>

            <MaterialCommunityIcons style={styles.iconStyle} name="email-outline" size={24} color="black" />

         </Input>
     <Button onPress={() => navigation.navigate('VerificationCode')}> 
     Continue
     </Button>
        </Container>
        )

}

const styles = StyleSheet.create({
    iconStyle:{
        alignSelf: 'center',
        marginHorizontal: 15
        
    }
})

export default PasswordRecoveryScreen;