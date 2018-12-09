/* --- Global Dependencies --- */
import React from 'react'

/* --- Local Dependencies --- */
import {
  Flex, Box, Heading
} from "atomic";
import MenuItems from 'static/menus/DashboardItems.js'
import MenuDashboardItem from 'components/menus/MenuDashboardItem'

/* --- React Component --- */
class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items: MenuItems
    }
  }
  
  /* Will Update */
  componentWillUpdate()
  {

  }

  /* Did Update */
  componentDidUpdate()
  {

  }

  /* Will Mount */
  componentWillUnmount()
  {

  }


  render(){
    return(
      <Flex direction='column' {...this.props.styled} >
        {
          this.state.items.map(item=><MenuDashboardItem  open {...item} />)
        }
      </Flex>
    )
  }
}

export default ClassComponent