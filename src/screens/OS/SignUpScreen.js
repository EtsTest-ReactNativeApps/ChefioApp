import React from 'react'
import {View,StyleSheet} from 'react-native'
import Header from '../../Components/core/Header'
import Button from '../../Components/core/Button'
import Input from '../../Components/core/Input'
import Title from '../../Components/core/Title'
import Container from '../../Components/layout/ContainerView'
import Row from '../../Components/layout/Row'
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { SimpleLineIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';


const SignUpScreen = () => {
    return(<Container>
        <View style={{marginBottom: 18}}>

    <Header>Welcome!</Header>

    <Title fontColor={'#9FA5C0'}>   Please enter your account here     </Title>

    </View >

        <Input inputPlaceHolder={'Email or Phone number'} Password={false}>

        <MaterialCommunityIcons style={styles.iconStyle} name="email-outline" size={24} color="#3E5481" />

         </Input>

     <Input  inputPlaceHolder={'Password'} Password={true}>

     <SimpleLineIcons style={styles.iconStyle} name="lock" size={24} color="#3E5481" />

    </Input>

    <View style = {styles.PasswordCheckStyle}>

    <Title fontSize={'17px'} fontColor={'#3E5481'} >Your Password must contain:</Title>
    <Row>
    <AntDesign style={styles.iconStyle} name="checkcircle" size={20} color="green" />
    <Title>At least 6 characters</Title>
    </Row>
    
    <Row>
    <AntDesign style={styles.iconStyle} name="checkcircle" size={20} color="green" />
    <Title>Conatins a number</Title>
    
    </Row>
    </View>

    <Button >Sign Up</Button>

    </Container>
    )
}

const styles = StyleSheet.create({
    PasswordCheckStyle:{
        alignItems:'flex-start',
        marginLeft:80,
        marginBottom: 60,
         width: "100%"
    },
    iconStyle:{
        alignSelf: 'center',
        marginHorizontal: 15
        
    }
})

export default SignUpScreen;