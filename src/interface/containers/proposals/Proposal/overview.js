/* --- Global Dependencies --- */
import React from "react";
import ReactMarkdown from 'react-markdown'

/* --- Local Dependencies --- */
import {
  Box, Flex, Heading, Image, HorizontalRule, List, Paragraph, Span
} from "atomic";

/* ------- React Component ------- */
export default props => 
<Flex>
<Box pr={[0,0,75]} w={[1,1,0.65]} >
  <ReactMarkdown source={props.proposalBody}/>
  <Heading color='blue' f={[4,5]}>
    Accountability
  </Heading>
  {/* <HorizontalRule bc='blue' /> */}
  {
    !props.proposalAccountability 
    ? <Paragraph color='grayDark' f={[1]}>Enter Accountability Guidlines</Paragraph>
    :<ReactMarkdown source={props.proposalAccountability}/>
  }

  <Heading color='blue' f={[4,5]}>
    Discipline
  </Heading>
  <HorizontalRule bc='blue' />
  {
    !props.proposalDiscipline 
    ? <Paragraph color='grayDark' f={[1]}>Enter Discipline Guidlines</Paragraph>
    :<ReactMarkdown source={props.proposalDiscipline}/>
  }
</Box>
<Box w={[1,1,0.35]} >
  <ProductFeatures proposalSummary={props.data.data.proposalSummary} />
</Box>
</Flex>


const features = [
  'Openness: Praesent nec felis ipsum. Pellentesque auctor tempor eros ac venenati',
  'Communication: Praesent nec felis ipsum. Pellentesque auctor tempor eros ac venenati',
  'Friendly: Praesent nec felis ipsum. Pellentesque auctor tempor eros ac venenati'
]

const ProductFeatures = props => (
  <Flex direction='column' b='1px solid #dfdfdf' br={5} p={[10,15]} >
    <Flex justify='space-between' >
      <Heading color='blue' f={[3]}>
        Proposal Highlights
      </Heading>
    </Flex>
    <HorizontalRule bc='#ececec' w={1} />
    <List>
      {features.map((feature, key) => <Span>{feature}</Span> )}
    </List>
    <HorizontalRule bc='#ececec' w={1} mb={15} />
    <Heading color='blue' f={[3]}>
      Summary
    </Heading>
    <Paragraph f={[0,1]}>
      {props.proposalSummary}
    </Paragraph>
  </Flex>
)