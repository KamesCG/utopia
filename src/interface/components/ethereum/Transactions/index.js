/* --- Global Dependencies --- */
import idx from 'idx'
import React, { useState } from 'react'
/* --- Local Dependencies --- */
import {Button } from 'atomic'
import { Web3Context } from 'context/Web3Context'
import {
  Box, BackgroundGradient, Absolute, Route, Flex, Paragraph
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
            data.updateTransactions(this.props.address) 
            this.state.loader()
          }
          return !(idx(data, _=>_.transactions[`${this.props.address}`]))
          ? null
          : <div>
            
            {
              data.transactions[`${this.props.address}`].map(item=><Transactions {...item} />
            )
          }
          </div>
        }
      }
    </Web3Context.Consumer>)
  }
}


const Transactions = props =>(
<Flex direction='column' bg='white' mb={15} p={10} >
  <Paragraph f={[1]}>
    <strong>To:</strong> {props.to}
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>From:</strong> {props.from}
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>From:</strong> {props.blockHash}
  </Paragraph>
  <Paragraph f={[1]}>
    <strong>Timestamp:</strong> {props.timestamp}
  </Paragraph>
</Flex>
)

// blockHash: "0x4e8e8d27ffa1c33ee2fc16a6bab2a66abac602c36a95cb3ee3e3c4a0d96e1539"
// blockNumber: 3058334
// confirmations: 213521
// creates: null
// data: "0x"
// from: "0xC78Ba87a035126d40bFF69D731B2e4390fd9F36f"
// gasLimit: BigNumber {_hex: "0x5208", _ethersType: "BigNumber"}
// gasPrice: BigNumber {_hex: "0x04a817c800", _ethersType: "BigNumber"}
// hash: "0xb139881c208f6dcc030d4c80f2342b29762ee2dce5be04fc09b4b877a4bfa560"
// networkId: 0
// nonce: 62
// timestamp: 1538001846
// to: "0xbE335c3D8614a863A550966372c865E079CcA4E8"
// transactionIndex: 2