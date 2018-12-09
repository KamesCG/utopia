/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import {
  Flex, Box, Link, Span, SVG
} from "atomic";
import MenuDashboardChildren from 'components/menus/MenuDashboardChildren'

/* --- React Component --- */
class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      list: this.props.open || false
    }
    this.toggleList = this.toggleList.bind(this)
  }

  /**
   * Toggle List
   * @desc Toggle the child dropdown menu.
   */
  toggleList(){
    this.setState({
      list: !this.state.list
    })
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
      <Flex direction='column' mb={10} >
        <Flex justify='space-between' >
          <Box>
            <Link to={this.props.route} >
            <Flex align='center'>
              <SVG svg={this.props.icon} svgColor='white' mr={[10]} width={20} />
              <Span f={[3]} fw='300' >
                {this.props.label}
              </Span>
            </Flex>
            </Link>
          </Box>
          {
            !this.props.children 
            ? null 
            :<div onClick={this.toggleList} >+</div>
          }
        </Flex>
        {
          !this.state.list
          ? null 
          :<Flex direction='column' mt={10} ml={30} >
              {
                this.props.children.map(child=><MenuDashboardChildren key={child.route}  {...child} />)
              }
            </Flex>
        }
      </Flex>
    )
  }
}

export default ClassComponent