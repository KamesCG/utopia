/* --- Global Dependencies --- */
import React from 'react'
import { Switch } from 'react-router-dom'

/* --- Routes --- */
import DashboardMain from 'routes/DashboardMain'
import Site from 'routes/Site'
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
        <RegionSiteHeader/>
        <Switch>
            { 
              Site.map(route=>
              !route.main 
              ? null 
              : <Route strict path={route.path} component={route.main} {...route.props} />)
            }
          </Switch>
      </div>
    )
  }
}

export default SiteLayout
