/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import {
  Flex, Box, Heading, Link
} from "atomic";

/* --- React Component --- */
class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  

  render(){
    return(
      <Box mr={15}>
        <Link to={this.props.route} >
        <Heading f={[1]} fw='300' >
          {this.props.label}
        </Heading>
        </Link>
      </Box>
    )
  }
}

export default ClassComponent