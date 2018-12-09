import React, { Component } from 'react'
import QrReader from 'react-qr-scanner'
 
export default class Test extends Component {
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      result: null,
    }
 
    this.handleScan = this.handleScan.bind(this)
  }
  handleScan(data){
    this.setState({
      result: data,
    })
  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 300,
      width: 600,
    }
 
    return(
      <div>
        {
          !this.state.result
          ?<QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
          : <p>{this.state.result}</p>
        }
      </div>
    )
  }
}