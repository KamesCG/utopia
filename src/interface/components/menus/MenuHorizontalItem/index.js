/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import {
  Flex, Box, Link, Span, SVG
} from "atomic";

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

  render(){
    return( this.props.styled
    ?<Box mr={15} {...this.props.styled} >
      <Link to={this.props.route} >
      <SVG width={50} svg={this.props.icon}/>
      <Span f={[3]} fw='300' >
        {this.props.label}
      </Span>
      </Link>
    </Box>
    : <Box mr={15} {...this.props.styled} >
    <Link to={this.props.route} >
    <Span 
      bg={this.props.pathname === this.props.route ? 'blue' : 'white' }
      color={this.props.pathname === this.props.route ? 'white' : 'blue' }
      br={5}
      px={[10,15]} py={[5,8]}
      f={[3]} fw='300' >
      {this.props.label}
    </Span>
    </Link>
  </Box>
    )
  }
}

export default ClassComponent