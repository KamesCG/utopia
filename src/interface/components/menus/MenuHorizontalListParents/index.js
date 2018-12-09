/* --- Global Dependencies --- */
import React from 'react'
import { withRouter } from 'react-router-dom'

/* --- Local Dependencies --- */
import {
  Flex
} from "atomic";
import MenuHorizontalItem from 'components/menus/MenuHorizontalItem'
import MenuHorizontalChildren from 'components/menus/MenuHorizontalChildren'

/* --- React Component --- */
const MenuHorizontal = props =>(
<div>
  <Flex align='center' bg='white' px={10} py={20} {...props.styled} >
    {
      props.items.map(item=><MenuHorizontalItem pathname={props.location.pathname} {...item} />)
    }
  </Flex>
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