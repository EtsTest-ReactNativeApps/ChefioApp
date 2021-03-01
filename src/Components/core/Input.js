import React from 'react'

import styled from 'styled-components'

const input = ({inputPlaceHolder, Password, children, Width, Height, isSearch}) => {
return(
<InputView WD={Width} HG={Height} isSearch={isSearch}>
    {children}
    <InputField placeholder={inputPlaceHolder} secureTextEntry={Password}/>

</InputView>
)
}

const InputView = styled.View`
font-size: 15px;
background-color: ${props => props.isSearch ? '#F4F5F7': 'white'};
width: ${props => props.WD || '90%'};
height :${props => props.HG || '60px'}
margin-top: 5px
margin-bottom: 16px
padding: 19px
border: ${props => props.isSearch ? '0px': '1px solid #D0DBEA'};
flex-direction : row
border-radius: 32px;
color: gray
`
const InputField = styled.TextInput`
font-size: 15px;
width: 290px;
height :20px
margin-bottom: 16px

color: #2E3E5C;
`
export default input;