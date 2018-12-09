/* --- Global Dependencies --- */
import React from 'react'
import { withRouter } from 'react-router-dom'
/* --- Local Dependencies --- */
import {
  Flex, Box, Heading, Route
} from "atomic";
import MenuItems from 'static/menus/DashboardItems.js'
import MenuHorizontalItem from 'components/menus/MenuHorizontalItem'
import MenuHorizontalChildren from 'components/menus/MenuHorizontalChildren'

/* --- React Component --- */
const MenuHorizontal = props =>(
<div>

{
  props.items.map(item=>
    <Box >
      { !item.children ? null :
        <Flex bg='gray' boxShadow={0} w={'100%'} >
        <Route
            strict
            path={item.route}
            items={item.children}
            component={MenuComponent} />
        </Flex>
      }
    </Box>
  )
}
</div>
)
const MenuComponent = props => (
  <Flex align='center' p={10} w={'100%'} >
    {
      props.items.map(child=><MenuHorizontalChildren key={child.route} {...child} />)
    }
  </Flex>
)

export default withRouter(MenuHorizontal)