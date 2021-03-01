import React from 'react'
import styled from 'styled-components'

const Hyperlink = ({children,onPress}) =>{
return(
    <TouchableWord onPress={onPress}> 
        {children}
    </TouchableWord>
)


}

const TouchableWord = styled.TouchableOpacity`
margin-right: 30px
margin-bottom: 40px
align-self:flex-end;

`

export default Hyperlink;