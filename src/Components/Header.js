import React from 'react'
import {View,TextInput} from 'react-native'
import styled from 'styled-components'


const Header = ({fontSize,fontWeight, fontColor,children,marginTop}) => {
    return(
    <Head FC = {fontColor} FW={fontWeight} FS={fontSize} MT={marginTop}>
     
    {children}
    </Head>
    )
    }
    
    const Head = styled.Text`
    margin-top: ${props => props.MT || '75px'}
    font-size: ${props => props.FS || '22px'};
    font-weight: bold;
    line-height: 32px;
    color: ${props => props.FC || '#3E5481'};
    text-align: center;
`
    export default Header;