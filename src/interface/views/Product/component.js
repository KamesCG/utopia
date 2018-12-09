/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { product1, ethereumMountains } from 'assets/images'
import {
  Box, Container, Flex, Heading, Paragraph, Image, HorizontalRule, List, Span
} from "atomic";
import FormFeatureAddons from 'forms/FormFeatureAddons'

/* ------- React Component ------- */
export default props => 
<Flex direction='column' >
  <Box bg='gray' >
    <Container pt={[20,25]} w={['100%', '80%', 1080]}>
      <Flex bg='gray' justify='space-between'>
        <Box>
          <Heading color='blue' f={[4,5]}>
            Product 1
          </Heading>
          <Paragraph color='charcoal' f={[2,3]}>
            A Community Driven Bounty Management Application
          </Paragraph>
        </Box>
        <Box>
          <Heading color='green' f={[5,6]}>
            $150.00
          </Heading>
          <Paragraph f={[1]}>
            <strong>Last Updated:</strong> November 11th, 2019
          </Paragraph>
        </Box>
      </Flex>
      <Flex>
        <Heading bg='white' f={[1]} mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
          Details
        </Heading>
        <Heading bg='white' f={[1]} fw='300' mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
          Comments
        </Heading>
        <Heading bg='white' f={[1]} fw='300' mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
          Support
        </Heading>
      </Flex>
    </Container>
  </Box>
  <Box bg='white' py={[20,25]} >
    <Container w={['100%', '80%', 1080]} >
      <Paragraph f={[0]}>
        <Span><strong>tags:</strong></Span> {tags.map((tag, key)=> <Span key={key} color='grey' f={0} mr={[5,8]}>{tag}</Span>)}
      </Paragraph>
      <Flex>
        <Box w={[1,1,0.65]} pr={[0,0,75]} >
          <Image src={product1}/>
          <Flex justify='space-between' my={[15,25]} >
            {images.map((image, key)=> 
              <Box key={key} w={[1,1,0.3]} >
                <Image src={image}/>
              </Box>)
            }
          </Flex>
          <Paragraph f={[0,1]}>
            Maecenas luctus odio sed sapien rutrum, id suscipit orci ultricies. Praesent quis mi sed metus semper tincidunt quis at justo. Etiam viverra et mauris at sagittis. Morbi in libero sit amet mauris egestas porttitor rutrum mattis tellus. Praesent nec felis ipsum. Pellentesque auctor tempor eros ac venenati
          </Paragraph>
          <Paragraph f={[0,1]}>
            Maecenas luctus odio sed sapien rutrum, id suscipit orci ultricies. Praesent quis mi sed metus semper tincidunt quis at justo. Etiam viverra et mauris at sagittis. Morbi in libero sit amet mauris egestas porttitor rutrum mattis tellus. Praesent nec felis ipsum. Pellentesque auctor tempor eros ac venenati
          </Paragraph>
        </Box>
        <Box w={[1,1,0.35]} >
          <ProductFeatures/>
        </Box>
      </Flex>
    </Container>
  </Box>
</Flex>


const images = [
  product1,
  product1,
  product1,
]
const features = [
  'Included: Quality checked by Unity',
  'Mockups: Sketch and Photoshop files',
  'Software: Audited Smart Contracts'
]

const tags = [
  'bounties',
  'community',
  'open finance',
  'reputation'
]

const ProductFeatures = props => (
  <Flex direction='column' b='1px solid #dfdfdf' br={5} p={[10,15]} >
    <Flex justify='space-between' >
      <Heading color='green' f={[3]}>
        Product Features
      </Heading>
      <Box>
        ICON
      </Box>
    </Flex>
    <HorizontalRule bc='#ececec' w={1} />
    <List>
      {features.map((feature, key) => <Span>{feature}</Span> )}
    </List>
    <HorizontalRule bc='#ececec' w={1} mb={15} />
    <FormFeatureAddons/>
  </Flex>
)