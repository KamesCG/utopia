/* --- Global Dependencies --- */
import React from "react";
import ReactMarkdown from 'react-markdown'
/* --- Local Dependencies --- */
import { product1, ethereumMountains } from 'assets/images'
import {
  Box, Container, Flex, Heading, Paragraph, Image, HorizontalRule, List, Span
} from "atomic";
import FormFeatureAddons from 'forms/FormFeatureAddons'
import { CommentCreateMarkdown } from 'containers'


const Comments = [
  {
    comment: 'Curabitur quis rutrum nulla. Donec commodo vestibulum luctus. Nam quam tellus, pretium sed turpis eget, maximus dignissim ante. Nullam venenatis faucibus facilisis. Pellentesque gravida nulla vel ultricies porta. Fusce non nulla vitae risus ultricies pharetra non vel augue.',
    user: 'Kames Cox Geraghty',
    avatar: 'https://lh3.googleusercontent.com/-JS9i1bSfAug/AAAAAAAAAAI/AAAAAAAAAzc/i9BxZkKChtM/photo.jpg'
  }
]

/* ------- React Component ------- */
export default props => 
<Flex justify='space-between' >
  <Box width={[1,1,0.65]} >
    {
      Object.keys(props.comments).map((comment)=> <Comment key={comment} {...props.comments[comment]}/> )
    }
    <CommentCreateMarkdown 
      uid={props.uid}
      branch={['proposals', props.uid, 'comments']}
      writeType={'create'}
      delta={`update|proposal|${props.uid}|body|request`}
    />
  </Box>
  <Box br={10} boxShadow={1} p={[10,25]} width={[1,1,0.30]} >
    <Heading color='blue' f={[3]}>
      Timeline
    </Heading>
    <Paragraph f={[1]}>
      <strong>Review:</strong> Pellentesque gravida nulla vel ultricies porta. Fusce non nulla vitae risus ultricies pharetra non vel augue.
    </Paragraph>  
  </Box>
</Flex>


const Comment = props =>(
<Flex boxShadow={0} br={5} mb={10} p={[10,15]} >
  <Flex justify='center' px={[10,15]} width={[1,0.15]} >
    <Image height={60} width={60} boxShadow={1} br={99999} b='1px solid #FFF' src={props.avatar}/>
  </Flex>
  <Box px={[10,15]} width={[1,0.85]} >
    <Heading color='blue' f={[3]}>
      {props.user} <Span f={1} color='charcoal'> on Decembmer 11th</Span>
    </Heading>
    <ReactMarkdown source={props.comment}/>
  </Box>
</Flex>
)