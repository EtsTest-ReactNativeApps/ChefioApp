import React from 'react'
import styled from 'styled-components'


const Taping = ({children, style, onPress,fontColor}) => {
    return(<InputView>
        <RoundedTouchableOpacity style={style}  onPress={onPress}>
            <Title color={fontColor}>
                {children}
            </Title>
        </RoundedTouchableOpacity>
    </InputView>)
}

const InputView = styled.View`
width: 50%
margin-bottom: 16px
`
const RoundedTouchableOpacity = styled.TouchableOpacity`
border-bottom-color: #1FCC79;
border-bottom-width: 3px
    justify-content: center;
    align-items:center;
   
    
`
const Title = styled.Text`
font-size: 15px
font-weight: 600
color: ${props => props.color || '#2E3E5C'}
margin-top: 10px
margin-bottom: 16px

text-align: center;
`


export default Taping;