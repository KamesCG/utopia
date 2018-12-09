/* --- Global Dependencies --- */
import React from "react";
import { Route } from 'react-router';
import { Switch } from 'react-router-dom'
/* --- Local Dependencies --- */
import {
  Flex, Box, Heading, Link, HorizontalRule
} from "atomic";

import { MarkdownEditor } from 'containers'

/* ------- React Component ------- */
export default props => {
  const path = props.location.pathname.split("/")[5]
  return (
  <Flex direction='column'>
  <Flex>
  <Heading 
      bg={path === 'body' ? 'blue' : 'white' }
      color={path === 'body' ? 'white' : 'blue' }
      br={7}
      f={[3]} fw='300' mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
      <Link to={`/dashboard/proposal/${props.uid}/edit/body`}>Description</Link>
    </Heading>
    <Heading 
      bg={path === 'accountability' ? 'blue' : 'white' }
      color={path === 'accountability' ? 'white' : 'blue' }
      br={7}
      f={[3]} fw='300' mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
      <Link to={`/dashboard/proposal/${props.uid}/edit/accountability`}>Accountability</Link>
    </Heading>
    <Heading 
      bg={path === 'discipline' ? 'blue' : 'white' }
      color={path === 'discipline' ? 'white' : 'blue' }
      br={7}
      f={[3]} fw='300' mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
      <Link to={`/dashboard/proposal/${props.uid}/edit/discipline`}>Discipline</Link>
    </Heading>
  </Flex>
  <Switch>
      <Route path={`/dashboard/proposal/${props.uid}/edit/accountability`}
        render={() => <Accountability
          uid={props.uid}
          markdown={props.proposalAccountability || 'No content'}  
        />}
      />
      <Route path={`/dashboard/proposal/${props.uid}/edit/discipline`}
        render={() => <Discipline
          uid={props.uid}
          markdown={props.proposalDiscipline || ''}  
        />}
      />
      <Route path={`/dashboard/proposal/${props.uid}/edit/body`}
        render={() => <Summary
          uid={props.uid}
          markdown={props.proposalBody}  
        />}
      />
    </Switch>
  </Flex>
  )
}

const Summary = props =>(
<Box>
  <MarkdownEditor 
    uid={props.uid} markdown={props.markdown} 
    branch={['proposals', props.uid, 'data', 'proposalBody']}
    delta={`update|proposal|${props.uid}|body|request`}
  />
</Box>
)

const Accountability = props =>(
<Box>
  <MarkdownEditor 
    uid={props.uid} markdown={props.markdown} 
    branch={['proposals', props.uid, 'data', 'proposalAccountability']}
    delta={`update|proposal|${props.uid}|accountability|request`}
  />
</Box>
)

const Discipline = props =>(
<Box>
<MarkdownEditor 
    uid={props.uid} markdown={props.markdown} 
    branch={['proposals', props.uid, 'data', 'proposalDiscipline']}
    delta={`update|proposal|${props.uid}|discipline|request`}
  />
</Box>
)