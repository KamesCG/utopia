/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex, Box, Heading, Link
} from "atomic";

/* ------- React Component ------- */
export default props => 
<Flex direction='column' boxShadow={1} >
  <Flex
    color='white' px={[10,20]} py={[10]}  width='100%' >
    <Heading f={2} fw='300' mr={15} >
      <Link>Distributed Applications</Link>
    </Heading>
    <Heading f={2} fw='300' mr={15} >
      <Link>Plugins</Link>
    </Heading>
    <Heading f={2} fw='300' mr={15} >
      <Link>Scripts</Link>
    </Heading>
    <Heading f={2} fw='300' mr={15} >
      <Link>Icons</Link>
    </Heading>
    <Heading f={2} fw='300' mr={15} >
      <Link>Mobile</Link>
    </Heading>
  </Flex>
  <Flex 
    color='charcoal' gradient='white' px={[10,20]} py={[10]} >
    <Heading f={2} fw='300' mr={15} >
      <Link>Identity</Link>
    </Heading>
    <Heading f={2} fw='300' mr={15} >
      <Link>Financial</Link>
    </Heading>
    <Heading f={2} fw='300' mr={15} >
      <Link>Bounties</Link>
    </Heading>
    <Heading f={2} fw='300' mr={15} >
      <Link>Tipping</Link>
    </Heading>
  </Flex>
</Flex>