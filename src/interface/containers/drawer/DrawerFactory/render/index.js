/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'
/* ------------------------- Internal Dependencies -------------------------- */
import { Fixed, Drawer } from 'particles'
import {
  Flex, Box, Absolute,
  Heading, Image, Paragraph, Link, Span, 
} from 'atomic'
import DrawerClose from 'containers/drawer/DrawerClose'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Absolute top={props.drawer} bottom={props.drawer} left={props.drawer} right={props.drawer} z={1000} >
  <Drawer
      boxShadow={[4]}
      open={props.drawer}
      position='left'
      color='white'
      bg='blueAlge'
      overflow='hidden'
      z={200}
    >
    <PerfectScrollbar wheelPropagation>
      {props.children}
    </PerfectScrollbar>
	</Drawer>
  {!props.drawer ? null : <Fixed top bottom left right onClick={props.drawerClose} w={1} height={1} z={100} /> }
  </Absolute>
