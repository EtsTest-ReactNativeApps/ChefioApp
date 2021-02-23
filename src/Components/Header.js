import React from 'react'
import {View,TextInput} from 'react-native'
import styled from 'styled-components'


const Header = ({FontSize,FontWeight, FontColor,children,MarginTop}) => {
    return(
    <Head FC = {FontColor} FW={FontWeight} FS={FontSize} MT={MarginTop}>
     
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