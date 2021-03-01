import React from 'react'

import styled from 'styled-components'

const Row = ({children}) => {
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

export default Row;