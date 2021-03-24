import React from 'react'
import {View,StyleSheet} from 'react-native'
import styled from 'styled-components'
import {  SafeAreaView } from 'react-native-safe-area-context';
const Container =({children}) =>{
    return(
        <SafeAreaView  style={{ flex: 1, justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white' }}>
        <ContainerView >
            {children}
        </ContainerView>
        </SafeAreaView>
    )
}


const ContainerView = styled(SafeAreaView)`
    align-items:center;
    width: 100%
    height: 100%
    background: white; 
    

`
const styles = StyleSheet.create({

})

export default Container