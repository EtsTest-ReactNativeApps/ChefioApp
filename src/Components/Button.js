import React from 'react'
import {View,StyleSheet} from 'react-native'
import styled from 'styled-components'

const Button = ({onPress, children,BackColor,}) =>{
    return(<View style={styles.Division}>
       <RoundedTouchableOpacity bg={BackColor}  onPress={onPress}>         
          <ButtonText 
        
          > {children}</ButtonText>
        
           </RoundedTouchableOpacity>
        </View>
    )
}
const RoundedTouchableOpacity = styled.TouchableOpacity`
    height:60px ;
    background: ${props => props.bg  || 'green'}
    border-radius: 32px;
    width: 372px;
    justify-content: center;
    align-items:center;
    padding: 19px 32px;
    margin-top: 16px;
`
const ButtonText = styled.Text`
    font-size: 16px
    font-weight: 700
    color: white  
`
const styles =  StyleSheet.create({})
export default Button;