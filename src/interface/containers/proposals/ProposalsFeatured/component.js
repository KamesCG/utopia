/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { Flex } from "atomic";
import ProposalsFeatured from 'components/proposals/ProposalFeatured'

/* ------- React Component ------- */
export default props => 
<Flex justify='space-between' wrap='wrap' >
  {
    !props.data ? null :
    Object.keys(props.data).map((item, key) => 
    <ProposalsFeatured 
      key={key} uid={item} styled={{mb: 20, w: [1,0.48, 0.3]}}
      {...props.data[item]} 
    />)
  }
</Flex>