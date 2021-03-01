import React from 'react'
import {View,StyleSheet,SafeAreaView} from 'react-native'

import Input from '../../Components/core/Input'
import HorizontalSpace from '../../Components/layout/HorizontalSpace'
import VerticalSpace from '../../Components/layout/VerticalSpace'
import Container from '../../Components/layout/ContainerView'
import { AntDesign } from '@expo/vector-icons';


const HomeScreen = ({}) =>{

    return(
    
        <Container>
            <VerticalSpace height={'35px'} />
        <Input inputPlaceHolder={'Search'} isSearch>
        <AntDesign style={styles.iconStyle} name="search1" size={24} color="#3E5481" />
        </Input>
    </Container>
    )
}


const styles = StyleSheet.create({
    iconStyle:{
        alignSelf: 'center',
        marginHorizontal: 15
        
    }
})

export default HomeScreen;