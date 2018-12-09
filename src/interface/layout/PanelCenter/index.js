/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import PanelCenterToggle from 'layout/PanelCenterToggle'
import { PanelCenterContext } from 'layout/LayoutContext.js'
import {
  Flex, Box, Heading, Span, Absolute, Block, BackgroundGradient,BackgroundImage
} from 'atomic'

import Item from 'components/core/Item'
/* --- React Component --- */
export default props => 
<PanelCenterContext.Consumer>
  {({active}) => !active ? null :
  <div>
    {
      `${active}`
    }
    <Absolute top bottom left right m={'10% auto'} w={[600]} bg="blue" boxShadow={5} {...props.styled} >
    <BackgroundGradient gradient={'purple'} o={0.2}/>
    <Flex justify='space-between' >
      <Heading f={[3]}>
        {props.label}
      </Heading>
      <PanelCenterToggle>X</PanelCenterToggle>
    </Flex>
    <Item foundry='QRScanner' />
  </Absolute>
  </div>
  }
</PanelCenterContext.Consumer>
