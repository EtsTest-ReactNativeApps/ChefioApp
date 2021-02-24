import React from 'react'
import {View,StyleSheet} from 'react-native'
import styled from 'styled-components'

const Alignemt =({children}) =>{
    return(
        <AlignemtView>
            {children}
        </AlignemtView>
    )
}


const AlignemtView = styled.View`
    align-items:center;
    width: 100%
    height: 100%
    background: white; 

`
const styles = StyleSheet.create({

})

export default Alignemt