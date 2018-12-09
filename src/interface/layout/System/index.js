/* --- Global Dependencies --- */
import React from 'react'
import { Switch } from 'react-router-dom'

/* --- Routes --- */
import DashboardMain from 'routes/DashboardMain'
import System from 'routes/System'
/* --- Local Dependencies --- */
import RegionSiteHeader from 'layout/RegionSiteHeader'
import RegionSiteShowcase from 'layout/RegionSiteShowcase'
import RegionSiteFeatured from 'layout/RegionSiteFeatured'
import {
  Flex, Box, Heading, Span, Absolute, Block, BackgroundGradient,BackgroundImage, Route
} from 'atomic'

/* --- Component --- */
class SiteLayout extends React.Component { 

  constructor(props){
    super(props)
    this.state  = {}
  }

  componentDidUpdate() {

  }

  render(){
    return( 
      <div>
        <Switch>
            { 
              System.map(route=>
              !route.component 
              ? null 
              : <Route strict path={route.path} component={route.component} {...route.props} />)
            }
          </Switch>
      </div>
    )
  }
}

export default SiteLayout
