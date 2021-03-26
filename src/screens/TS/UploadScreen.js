import React from 'react'
import Input from '../../Components/core/Input'
import Title from '../../Components/core/Title'
import Container from '../../Components/layout/ContainerView'
import Row from '../../Components/layout/Row'

import { Ionicons } from '@expo/vector-icons';
import styled from 'styled-components'
import { Image, StyleSheet } from 'react-native'
import VerticalSpace from '../../Components/layout/VerticalSpace'

const UploadScreen = () => {
    return (
       
<Container>

<Row direction={'flex-start'}>
    <Title fontWeight={'700'} fontColor={'#FF6464'}>Cancel</Title>
    </Row>
    <VerticalSpace />
   
     <Image source={{
       uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
     }} />
      
    <UploadView>
<Ionicons style={styles.iconStyle} name="images" size={50} color="#D0DBEA" />
<Title fontWeight={700} >Add Cover Photo</Title>
<Title fontColor={'#9FA5C0'} fontSize={'12px'}>Up to (12 mb)</Title>
    </UploadView>
  
    <VerticalSpace />
<Row direction={'flex-start'}>
    <Title fontWeight={'700'}>Food Name</Title>
    </Row>
    <Input inputPlaceHolder={'Enter food name'} >
				
				</Input>
                <Row direction={'flex-start'}>
    <Title fontWeight={'700'}>Description</Title>
    </Row>
    <Input isDescription Height={'150px'} inputPlaceHolder={'Tell a little about your food'} >
				
				</Input>
    </Container>            
        
    )
}

const styles = StyleSheet.create({
    iconStyle:{
        alignSelf: 'center',

    }
})

const UploadView = styled.TouchableOpacity`
width: 327px;
height: 161px;
border: 2px dashed #D0DBEA;
border-radius: 16px;
justify-content: center
`


export default UploadScreen
