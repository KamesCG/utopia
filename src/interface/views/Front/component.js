/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex,
  Box
} from "atomic";
import RegionSiteHeader from 'layout/RegionSiteHeader'
import RegionSiteShowcase from 'layout/RegionSiteShowcase'
import RegionSiteFeatured from 'layout/RegionSiteFeatured'
/* ------- React Component ------- */
export default props => [
  <RegionSiteShowcase/>,
  <RegionSiteFeatured/>
]