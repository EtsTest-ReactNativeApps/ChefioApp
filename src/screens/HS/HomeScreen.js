import React from 'react'
import {View,StyleSheet,SafeAreaView} from 'react-native'

import Input from '../../Components/core/Input'
import HorizontalSpace from '../../Components/layout/HorizontalSpace'
import TextAligment from '../../Components/layout/TextAligment'
import Title from '../../Components/core/Title'
import VerticalSpace from '../../Components/layout/VerticalSpace'
import Container from '../../Components/layout/ContainerView'
import { AntDesign } from '@expo/vector-icons';
import Row from '../../Components/layout/Row'
import Button from '../../Components/core/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'


const HomeScreen = ({}) =>{

    return(
    
        <Container>
            <VerticalSpace height={'40px'} />
        <Input inputPlaceHolder={'Search'} isSearch>
        <AntDesign style={styles.iconStyle} name="search1" size={24} color="#3E5481" />
        </Input>
       <Row direction={'flex-start'}>
            
        <Title fontWeight={'700'} fontSize={'17px'}>Category</Title>
        </Row>
        <Row direction={'flex-start'}><Button width={'72px'}>All</Button>
        <HorizontalSpace width={'15px'}/>
            <Button width={'90px'}>Food</Button>
            <HorizontalSpace width={'15px'}/>
            <Button width={'95px'}>Drink</Button>
        </Row>
        <VerticalSpace height={'20px'}/>
        <VerticalSpace height={'8px'} backColor={'#F4F5F7'}/>
        <VerticalSpace height={'15px'}/>
   <Row>  
       
        <View width={'50%'}>
            <TouchableOpacity style={styles.headerWrapper}>
                <Title>Left</Title>
                </TouchableOpacity>
            </View>
        <View width={'50%'} >
        <TouchableOpacity style={styles.headerWrapper}>
                <Title >Right</Title>
                </TouchableOpacity>
            </View>
        
        </Row>
    </Container>
    )
}


const styles = StyleSheet.create({
    iconStyle:{
        alignSelf: 'center',
        marginHorizontal: 15
        
    },
    headerWrapper: {
        borderBottomColor: '#1FCC79',
        borderBottomWidth: 2,
        marginBottom: 10,
    }
})

export default HomeScreen;