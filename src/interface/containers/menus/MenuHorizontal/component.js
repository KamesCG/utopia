/* --- Global Dependencies --- */
import React from 'react'

/* --- Local Dependencies --- */
import {
  Flex, Box, Heading, Route
} from "atomic";
import MenuHorizontalItem from 'components/menus/MenuHorizontalItem'
import MenuHorizontalChildren from 'components/menus/MenuHorizontalChildren'

/* --- React Component --- */
export default props =>
<div>
  <Flex align='center' bg='white' boxShadow={0} p={10} {...props.styled} >
    {
      props.items.map(item=><MenuHorizontalItem {...item} />)
    }
  </Flex>

{
  props.items.map(item=>
    <Box>
      { !item.children ? null :
        <Flex bg='gray' boxShadow={0} w={'100%'} >
        {console.log(item)}
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

const MenuComponent = props => (
  <Flex align='center' p={10} w={'100%'} >
    {
      props.items.map(child=><MenuHorizontalChildren key={child.route} {...child} />)
    }
  </Flex>
)
