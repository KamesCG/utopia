/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex, Box, BackgroundImage, Heading, Paragraph, Link, Image
} from "atomic";

/* ------- React Component ------- */
export default props => 
<Flex 
  direction='column'
  bg='white' boxShadow={0} of='hidden' {...props.styled} >
  <Flex height={[100,150]} boxShadow={1} >
      <BackgroundImage src={props.image}/>
  </Flex>
  <Flex direction='column' p={[10,15]} >
    <Heading f={[3]}>
      {props.title}
    </Heading>
    <Paragraph f={[1]}>
      {props.description}
    </Paragraph>
    <Link to={`product/${props.alias}`}>View Product</Link>
  </Flex>
</Flex>