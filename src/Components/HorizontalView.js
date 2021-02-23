import React from 'react'
import {View,TextInput} from 'react-native'
import styled from 'styled-components'

const HorizontalView = ({children}) => {
    return(
    <Horizontal >
     
    {children}
    </Horizontal>
    )
    }


const Horizontal = styled.View`
margin-top: 12px
flex-direction : row
`

export default HorizontalView;