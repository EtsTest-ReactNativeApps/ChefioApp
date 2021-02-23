import React from 'react'
import {View,StyleSheet} from 'react-native'
import styled from 'styled-components'

const ButtonTransparent = ({onPress, children,BackColor,FontColor}) =>{
    return(<View style={styles.Division}>
       <RoundedTouchableOpacity bg={BackColor}  onPress={onPress} >         
          <ButtonText FC = {FontColor}
        
          > {children}</ButtonText>
        
           </RoundedTouchableOpacity>
        </View>
    )
}
const RoundedTouchableOpacity = styled.TouchableOpacity`
    height:60px ;
    background: white
    border-radius: 32px;
    border: 1px solid #D0DBEA;
    
    width: 372px;
    justify-content: center;
    align-items:center;
    padding: 19px 32px;
    margin-top: 16px;
`
const ButtonText = styled.Text`
    font-size: 16px
    font-weight: 700
    color: ${props => props.FC  || 'white'} 
`
const styles =  StyleSheet.create({})
export default ButtonTransparent;