/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex,
  Box,
  Heading,
  Link, Span
} from "atomic";
import MenuSiteMain from 'components/menus/MenuSiteMain'
/* ------- React Component ------- */
export default props => 
<Flex direction='column' gradient='blue'>
  <Flex color='white' px={[10,25]} py={[20,25]} width='100%' >
    <Box w={[1,1,0.3]}>
      <Heading f={[3]}>
        <Span fw='300'>unity</Span> marketplace
      </Heading>
    </Box>
    <Box w={[1,1,0.5]}>
      <Flex justify='flex-end' >
        <Heading f={[1]} fw='300' mr={[10,15]}>
          <Link>Start Selling</Link>
        </Heading>
        <Heading f={[1]} fw='300' mr={[10,15]}>
          <Link>Community</Link>
        </Heading>
        <Heading f={[1]} fw='300' mr={[10,15]}>
          <Link>Resources</Link>
        </Heading>
      </Flex>
    </Box>
    <Box w={[1,1,0.3]}>
      
    </Box>
  </Flex>
  <MenuSiteMain/>
</Flex>