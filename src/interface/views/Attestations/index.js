/* --- Global Dependencies --- */
import React from 'react'
import Web3 from 'web3'
/* --- Local Dependencies --- */
// Routes
import AttestationRoutes from 'routes/Attestations'

// Components
import {Button } from 'atomic'
import { Web3Context } from 'context/Web3Context'
import DashboardOverviewItems from 'static/menus/DashboardOverview'
import MenuHorizontalList from 'components/menus/MenuHorizontalList'
import {
  Box, BackgroundGradient, Absolute, Route
} from 'atomic'


/* --- React Component --- */
export default props =>
<Absolute top bottom left right >
  <BackgroundGradient gradient='white' />
  <MenuHorizontalList items={DashboardOverviewItems} />
  <Box p={10} >
    { AttestationRoutes.map(route=> !route.main ? null : <Route exact path={route.path} component={route.main} {...route.props} />)}
  </Box>

</Absolute>