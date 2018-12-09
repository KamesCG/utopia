/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'react-router';
import { withRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import { Switch } from 'react-router-dom'
/* ------------------------- External Dependencies -------------------------- */
import { ethereumMountains } from 'assets/images'
import {
  Flex, Box, Block,
  Heading, Image, Paragraph, Link, Span, 
  BackgroundImage, BackgroundGradient
} from 'atomic'
import DialogFactory from 'containers/dialog/DialogFactory'

import Dashboard from 'layout/Dashboard'
import Site from 'layout/Site'
import System from 'layout/System'

// Toast Settings
import toast from 'settings/toast';
class SiteLayout extends React.Component { 

  constructor(props){
    super(props)
    this.state  = {}
  }

  componentDidMount() {
    this.props.history.push('/dashboard/proposals/active')
  }
  render(){
    return( 
      <div>
        <Block z={[500]} >
        <DialogFactory/>
        <ToastContainer {...toast}/>
        </Block>
        <Block z={[300]} o={0.999999} >
        <Switch>
          <Route path="/system" component={System} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Site} />
        </Switch>
        </Block>
    </div>
    )
  }
}

export default withRouter(SiteLayout)

