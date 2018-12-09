import React from 'react'
import {
  Box, Flex, Heading, Paragraph, HorizontalRule
} from 'atomic'


import Attestations from 'views/Attestations'
const Demo = props =>(
<Box w={[200,270]} >
  <Heading f={[3]}>
    Activity Feed
  </Heading>
</Box>
);

const TrustAnchors = props =>(
<Box w={[200,270]} >
  <Heading f={[3]}>
    Trust Anchors
  </Heading>
</Box>
);

const TrustAnchorsList = props =>(
  <Box w={[200,270]} >
    <Heading f={[3]}>
      Trust Anchors List
    </Heading>
  </Box>
  );


export default [
  {
    path: "/attestations/trust-anchors",
    main: TrustAnchors,
  },
  {
    path: "/attestations/trust-anchors/list",
    main: TrustAnchorsList,
  },


]