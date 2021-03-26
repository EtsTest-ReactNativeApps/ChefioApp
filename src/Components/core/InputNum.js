import React from 'react'
import styled from 'styled-components'

const InputNum = ({ inputPlaceHolder, Password, children, Width, Height }) => {
  return (
    <InputView WD={Width} HG={Height}>
      {children}
      <InputField placeholder={inputPlaceHolder} secureTextEntry={Password} />
    </InputView>
  )
}

const InputView = styled.View`
font-size: 15px;
background-color: white
width: ${props => props.WD || '20%'};
height :${props => props.HG || '80px'}

margin: 10px 6px;

padding: 19px
border: 1px solid #D0DBEA;
flex-direction : row
border-radius: 20px;
color: gray
`
const InputField = styled.TextInput`
font-size: 30px;
width: 290px;
height :40px
margin: 12px 12px
align-self: center;

color: #3E5481
`
export default InputNum
