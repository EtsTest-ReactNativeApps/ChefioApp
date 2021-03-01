import React from 'react'
import {View,Text,StyleSheet} from 'react-native'
import Header from '../../Components/core/Header'
import Button from '../../Components/core/Button'
import InputNum from '../../Components/core/InputNum'
import Title from '../../Components/core/Title'
import Row from '../../Components/layout/Row'
import Container from '../../Components/layout/ContainerView'
import VerticalSpace from '../../Components/layout/VerticalSpace'

const VerificationCodeScreen = ({navigation}) =>{
    return(
        <Container>
        <View style={{marginBottom: 18}}>
    <Header>Check your email</Header>

    <Title fontColor={'#9FA5C0'}>   We’ve sent the code to your email     </Title>
    </View >
    <VerticalSpace height={'12px'}/>
    <Row>
        <InputNum Height={'72px'} Width={'20%'}></InputNum>
        <InputNum Height={'72px'} Width={'20%'}></InputNum>
        <InputNum Height={'72px'} Width={'20%'}></InputNum>
        <InputNum Height={'72px'} Width={'20%'}></InputNum>
        
        </Row>
        <Title>code expires in: <Text style={styles.TextColor}> 5:00</Text></Title>
        <Button onPress={() => navigation.navigate('NewPassword')}>Next</Button>
        <Button isTransparent backColor={'white'} fontColor={'#9FA5C0'} >Send again</Button>
    </Container>

    )
}

const styles = StyleSheet.create({
TextColor:{
    color: '#FF6464'
}
})

export default VerificationCodeScreen;