/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex,
  Box, Heading, Image
} from "atomic";

/* ------- React Component ------- */
export default props => 
<Flex align='center' bg='white' boxShadow={1} br={10} p={10} w={200}  >
  <Image src={props.logo} width={50} height={50}/>
  <Flex align='center' direction='column' ml={10} >
    <Heading f={[3]} mb={0} >
      {props.label}
    </Heading>
    <Heading f={[1]} fw='100' color='grey' >
      {props.signingKey}
    </Heading>
  </Flex>
</Flex>