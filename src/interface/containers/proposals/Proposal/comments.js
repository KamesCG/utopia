/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Box, Flex,
} from "atomic";
import ProposalComments from 'views/ProposalComments'

/* ------- React Component ------- */
export default props => 
<Box>
  <ProposalComments
    uid={props.uid}
    comments={props.comments}
  />
</Box>