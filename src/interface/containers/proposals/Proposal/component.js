/* --- Global Dependencies --- */
import React from "react";
import { Switch } from 'react-router-dom'
import { Route } from 'react-router';

/* --- Local Dependencies --- */
import {
  Box, Container, Flex, Heading, Paragraph, Link,
} from "atomic";

/* --- Module Dependencies --- */
import EditProposal from './edit'
import ProposalVoting from './supporters'
import ProposalComments from './comments'
import ProposalOverview from './overview.js'
/* ------- React Component ------- */
export default props => {
  const path = props.location.pathname.split("/")[4]
  return !props.data ? null :
<Flex direction='column' >
  <Box bg='gray' >
    <Container pt={[20,25]} w={['100%', '80%', 1080]}>
      <Flex bg='gray' justify='space-between'>
        <Box w={[1,1,0.65]} >
          <Heading color='blue' f={[4,5]}>
            {props.data.data.proposalTitle}
          </Heading>
          <Paragraph color='charcoal' f={[2,3]}>
            {props.data.data.proposalTagline}
          </Paragraph>
        </Box>
        <Box w={[1,1,0.35]} ta='center' >
          <Heading color='green' f={[5,6]}>
            Primary
          </Heading>
          <Paragraph f={[1]}>
            <strong>Last Updated:</strong> November 11th, 2019
          </Paragraph>
        </Box>
      </Flex>
      <Flex>
        <Heading 
          bg={path === 'overview' ? 'blue' : 'white' }
          color={path === 'overview' ? 'white' : 'blue' }
          f={[1]} mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
          <Link to={`/dashboard/proposal/${props.match.params.uid}/overview`}>Overview</Link>
        </Heading>
        <Heading 
          bg={path === 'voting' ? 'blue' : 'white' }
          color={path === 'voting' ? 'white' : 'blue' }
          f={[1]} mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
          <Link to={`/dashboard/proposal/${props.match.params.uid}/voting`}>Voting</Link>
        </Heading>
        <Heading 
          bg={path === 'comments' ? 'blue' : 'white' }
          color={path === 'comments' ? 'white' : 'blue' }
          f={[1]} mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
          <Link to={`/dashboard/proposal/${props.match.params.uid}/comments`}>Comments</Link>
        </Heading>
        <Heading 
          bg={path === 'edit' ? 'blue' : 'white' }
          color={path === 'edit' ? 'white' : 'blue' }
          f={[1]} mb={0} mr={[5,8]} px={[10,15]} py={[5,8]} >
          <Link to={`/dashboard/proposal/${props.match.params.uid}/edit/body`}>Edit</Link>
        </Heading>
      </Flex>
    </Container>
  </Box>
  <Box bg='white' p={[20,35]} >
    <Switch>
      <Route path={`/dashboard/proposal/${props.match.params.uid}/voting`} component={ProposalVoting} />
      <Route path={`/dashboard/proposal/${props.match.params.uid}/comments`}
        render={() => <ProposalComments
          comments={props.data.comments}
          uid={props.match.params.uid}
          location={props.location}
        />}
      />
      <Route path={`/dashboard/proposal/${props.match.params.uid}/edit`}
        render={() => <EditProposal 
          uid={props.match.params.uid}
          location={props.location}
          proposalBody={props.data.data.proposalBody}
          proposalAccountability={props.data.data.proposalAccountability}
          proposalDiscipline={props.data.data.proposalDiscipline}
        />}
      />
      <Route path={`/dashboard/proposal/${props.match.params.uid}/overview`}
        render={() => <ProposalOverview 
          proposalBody={props.data.data.proposalBody}
          proposalAccountability={props.data.data.proposalAccountability}
          proposalDiscipline={props.data.data.proposalDiscipline}
          data={props.data}  
        />} 
      />
    </Switch>
  </Box>
</Flex>
}