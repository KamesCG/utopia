/* --- Global Dependencies --- */
import React, { useState } from 'react'
/* --- Local Dependencies --- */
import {Button } from 'atomic'
import { Web3Context } from 'context/Web3Context'
import {
  Box, BackgroundGradient, Absolute, Route
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
          ? <p>{`Balance: ${data.accounts[`${this.props.address}`]}`}</p>
          : <p>{`Balance: ${data.balance}`}</p>
        }
      }
    </Web3Context.Consumer>)
  }
}