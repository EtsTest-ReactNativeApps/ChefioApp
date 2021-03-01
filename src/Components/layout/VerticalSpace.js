import React from 'react'

import styled from 'styled-components'

const VerticalSpace = ({children, height}) => {
    return(
    <Vertical height={height}>
     
    {children}
    </Vertical>
    )
    }


const Vertical = styled.View`
height:${props => props.height || '16px'}
`

export default VerticalSpace;