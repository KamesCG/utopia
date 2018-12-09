/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import Item from 'components/core/Item'
import PanelRightToggle from 'layout/PanelRightToggle'
import { PanelRightContext } from 'layout/LayoutContext.js'
import {
  Flex, Box, Heading, Span, Absolute, Block, BackgroundGradient,BackgroundImage
} from 'atomic'

/* --- React Component --- */
export default props => 
<PanelRightContext.Consumer>
  {({active, component}) => !active ? null :
  <div>
    {
      `${active}`
    }
    <Absolute top bottom right  w={[400]} boxShadow={5} {...props.styled} >
    <Flex justify='space-between' >
      <Heading f={[3]}>
        {props.label}
      </Heading>
      <PanelRightToggle>X</PanelRightToggle>
    </Flex>
    <Item component={component} />
  </Absolute>
  </div>
  }
</PanelRightContext.Consumer>
