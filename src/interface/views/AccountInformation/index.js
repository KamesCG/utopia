/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import {
  Flex, Box, Heading
} from 'atomic'
import Scrollbar from 'components/layout/Scrollbar'
import Blockies from 'containers/ethereum/Blockies'
import Profile from 'components/ethereum/Profile'
import Transactions from 'components/ethereum/Transactions'
/* --- React Component --- */
class ClassComponent extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  render(){
    return(
      <div>
        <Profile address={'0xbE335c3D8614a863A550966372c865E079CcA4E8'}/>
        <Box boxShadow={1} h={500} mt={15} >
          <Scrollbar>
            <Transactions address={'0xbE335c3D8614a863A550966372c865E079CcA4E8'}/>
          </Scrollbar>
        </Box>
      </div>
    )
  }
}

export default ClassComponent