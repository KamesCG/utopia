/* --- Global Dependencies --- */
import React from "react";
import { Switch } from 'react-router-dom'
import { Route } from 'react-router';
/* --- Local Dependencies --- */
import { product1, ethereumMountains } from 'assets/images'
import {
  Box, Container, Flex, Heading, Paragraph, Image, HorizontalRule, Link, List, Span
} from "atomic";
import Proposal from 'containers/proposals/Proposal'

/* ------- React Component ------- */
export default props => 
<Box>
  <Proposal/>
</Box>