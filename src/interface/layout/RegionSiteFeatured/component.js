/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex, Box, Heading, Paragraph, Container,
} from "atomic";
import FormGlobalSearch from 'forms/FormGlobalSearch'
import ProductFeatured from 'containers/product/ProductFeatured'
/* ------- React Component ------- */
export default props => 
<Flex 
  color='charcoal' gradient='gray' py={[50,70]} >
  <Container>
    <Box >
      <Heading f={[3,4]}>
        Featured Products
      </Heading>
      <Paragraph f={[1]}>
        Every month Unity Staff hand-pick some of the best new Ethereum solutions, plugins and software from our collection of community created products.Check out the top products today!
      </Paragraph>
    </Box>

    <Flex justify='space-between' >
      {props.products.map((item, key) => <ProductFeatured key={key} {...item} styled={{w: [1,0.48, 0.3]}} /> )}
    </Flex>
  </Container>
</Flex>
