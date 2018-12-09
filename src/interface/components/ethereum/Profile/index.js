/* --- Global Dependencies --- */
import React, { useState } from 'react'
/* --- Local Dependencies --- */
import { shortenAddress } from 'helpers/utilities'
import Blockies from 'containers/ethereum/Blockies'
import { Web3Context } from 'context/Web3Context'
import {
  Flex, Box, Paragraph
} from 'atomic'


/* --- React Component --- */
export default class Address extends React.Component {
  constructor(props){
    super(props)
    this.state  = {
      address: this.props.address,
      loaded: false,
      loader: () => this.setState({loaded: true})
    }
  }

  componentDidUpdate() {

  }

  render() {
    return(
    <Web3Context.Consumer>
      {
        data =>
        {
          if (!this.state.loaded){ 
            data.updateAccountBalance(this.props.address) 
            this.state.loader()
          }
          return  this.props.address 
          ? <Flex align='center' >
              <Blockies seed={this.props.address} />
              <Box>
                <Paragraph mb={0}>{shortenAddress(this.props.address, 6)}</Paragraph>
                <Paragraph f={0} mb={0}><strong>ETH: </strong>{`${data.accounts[`${this.props.address}`]}`}</Paragraph>
              </Box>
            </Flex>
            
          : <p>{`Balance: ${data.balance}`}</p>
        }
      }
    </Web3Context.Consumer>)
  }
}