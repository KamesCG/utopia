/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { ethereumMountains } from 'assets/images'
import {
  Flex, Box, Button, BackgroundImage, Heading, Paragraph, Link, Image
} from "atomic";

/* ------- React Component ------- */
export default props => 
<Flex 
  direction='column'
  bg='white' boxShadow={0} of='hidden' {...props.styled} >
  <Flex height={[100,150]} boxShadow={1} >
      <BackgroundImage src={props.data.proposalImage || ethereumMountains}/>
  </Flex>
  <Flex direction='column' p={[10,15]} >
    <Heading f={[3]}>
      {props.data.proposalTitle}
    </Heading>
    <Paragraph f={[1]}>
      {props.data.proposalSummary}
    </Paragraph>
      <Link to={`/dashboard/proposal/${props.uid}/overview`}>
        <Button gradient='blue'>View Proposal</Button>
      </Link>
  </Flex>
</Flex>