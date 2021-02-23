import React, { Children } from 'react'
import {View,TextInput, passwordInp} from 'react-native'
import styled from 'styled-components'

const input = ({InputPlaceHolder, Password, children}) => {
return(
<InputView>
    {children}
    <InputField placeholder={InputPlaceHolder} secureTextEntry={Password}/>

</InputView>
)
}

const InputView = styled.View`
font-size: 15px;
background-color: white
width: 372px;
height :60px
margin-top: 5px
margin-bottom: 16px
padding: 19px
border: 1px solid #D0DBEA;
flex-direction : row
border-radius: 32px;
color: gray
`
const InputField = styled.TextInput`
font-size: 15px;
width: 290px;
height :20px
margin-bottom: 16px

color: gray
`
export default input;