/* --- Global Dependencies --- */
import React from 'react'
import { Switch } from 'react-router-dom'
/* --- Routes --- */
import DashboardMain from 'routes/DashboardMain'
import PerfectScrollbar from 'react-perfect-scrollbar'
/* --- Local Dependencies --- */
import {  meshRight  } from 'assets/images'
import { Web3Context } from 'context/Web3Context'
import {
  Flex, Box, Button, Heading, Link, Span, Absolute, Block, BackgroundGradient,BackgroundImage, Route, SVG,
} from 'atomic'
import MenuDashboardList from 'components/menus/MenuDashboardList'
import PanelRight from 'layout/PanelRight'
import PanelCenter from 'layout/PanelCenter'

// Context
import { PanelRightContext, PanelCenterContext } from 'layout/LayoutContext.js'

import { UserProfile, AuthorizationLogout } from 'containers'
/* --- Component --- */
class DashboardLayout extends React.Component { 

  constructor(props){
    super(props)
    this.state  = {
      panelRight: {
        active: false,
        component: null,
        toggle: (active, component) => this.setState({
            panelRight: {...this.state.panelRight, active, component}
        })
      },
      panelCenter: {
        active: false,
        component: null,
        toggle: (active, component) => this.setState({
          panelCenter: {...this.state.panelCenter, active, component}
        })
      }
    }
  }

  componentDidUpdate() {

  }

  render(){
    // const layout = this.context
    return( 
      <PanelCenterContext.Provider value={this.state.panelCenter} >
      <PanelRightContext.Provider value={this.state.panelRight} >
      <Block  w={[1]} >
        <Absolute top bottom left bg="blue" color='white' w={[1,1,0.2]} >
          <BackgroundImage src={meshRight} o={0.56} />
          <Flex direction='column' justify='space-between' boxShadow={1} gradient={'blue'} p={[10]} >
            <BackgroundGradient gradient='purple' o={0.2} /> 
            {/* <Heading f={[4]} fw='300' mb={0} >Utopia</Heading> */}
            <Box>
              {/* <PanelRightToggle><UserProfile/></PanelRightToggle> */}
              <UserProfile/>
              <AuthorizationLogout redirect='/system/login' />
            </Box>
            {/* <PanelRightToggle><SVG height={25} width={25} svgColor='white' svg={brain}/></PanelRightToggle> */}
            {/* <PanelRightToggle><SVG height={25} width={25} svgColor='white' svg={networkGraph}/></PanelRightToggle> */}
            {/* <PanelRightToggle><SVG height={25} width={25} svgColor='white' svg={cog}/></PanelRightToggle> */}
          </Flex>
          <MenuDashboardList styled={{p:20}} />
        </Absolute>
        <Absolute top bottom right w={[1,1,0.8]} gradient='white' >
          <PerfectScrollbar wheelPropagation>
            <Switch>
              { DashboardMain.map(route=> !route.main ? null : <Route path={route.path} component={route.main} />)}
            </Switch>
          </PerfectScrollbar>
        </Absolute>
        <PanelCenter label='Account Information' styled={{bg: 'white', color: 'charcoal', p:20}} />
        <PanelRight label='Account Information' styled={{bg: 'white', color: 'charcoal', p:20}} />
      </Block>
      <Web3Context.Consumer>
        {data => {
          // data.update(()=>({provider: null}))
        }
        }
  </Web3Context.Consumer>
    </PanelRightContext.Provider>
    </PanelCenterContext.Provider>
    )
  }
}

DashboardLayout.contextType = PanelRight

export default DashboardLayout
