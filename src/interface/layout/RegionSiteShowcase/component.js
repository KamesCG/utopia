/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex, Box, Heading
} from "atomic";
import FormGlobalSearch from 'forms/FormGlobalSearch'
/* ------- React Component ------- */
export default props => 
<Flex 
  align='center' justify='center'
  color='white' gradient='blueOcean' py={[50,70,120]} >
  <Box ta='center' >
    <Heading f={[3,4]}>
      340+ Digital Products & Ethereum Solutions
    </Heading>
    <Heading f={[1,2]}>
      Find the perfect decentralized and blockchains solutions.
    </Heading>
    <FormGlobalSearch/>
  </Box>
</Flex>