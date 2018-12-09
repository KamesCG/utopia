import React from 'react'
import {
  Box, Flex, Heading, Paragraph, HorizontalRule
} from 'atomic'

import SimpleMap from 'containers/maps/SimpleMap'

import DashboardOverview from 'views/DashboardOverview'
import TrustAnchorCreate from 'views/TrustAnchorCreate'
import CreateProposal from 'views/CreateProposal'

import Proposal from 'views/Proposal'

export default [
  {
    path: "/dashboard/proposals/create",
    main: CreateProposal,
  },
  {
    path: "/dashboard/proposals",
    main: DashboardOverview,
  },
  {
    path: "/dashboard/proposal/:uid",
    main: Proposal,
  },
  
  {
    path: "/dashboard/map",
    main: SimpleMap,
  },
]
