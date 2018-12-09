/* --- Global Dependencies --- */
import React from 'react'
import Web3 from 'web3'
/* --- Local Dependencies --- */
// Routes
import OverviewRoutes from 'routes/Overview'

// Components
import DashboardOverviewItems from 'static/menus/DashboardOverview'
import MenuHorizontalListParents from 'components/menus/MenuHorizontalListParents'
import MenuHorizontalListChildren from 'components/menus/MenuHorizontalListChildren'
import {
  Absolute, BackgroundGradient, Box, Button, Flex, Link, Route
} from 'atomic'

/* --- React Component --- */
export default props =>
<Box>
  <Flex align='center' justify='space-between' bg='white' >
    <MenuHorizontalListParents items={DashboardOverviewItems} />
    <Box pr={[15,25]} >
      <Link to='/dashboard/proposals/create' ><Button gradient='blueLight' >Create Proposal</Button></Link>
    </Box>
  </Flex>
  <MenuHorizontalListChildren items={DashboardOverviewItems} />
  <Box p={25} >
    { OverviewRoutes.map(route=> !route.main ? null : <Route exact path={route.path} component={route.main} {...route.props} />)}
  </Box>
</Box>