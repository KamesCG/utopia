/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import { meshRight, embroided, consensysLogo } from 'assets/images'
import {
  BackgroundImage, Button, Box, Flex, Heading, Image, Span
} from "atomic";
import FormLogin from 'forms/FormLogin'
import { AuthorizationLogin } from 'containers'
/* ------- React Component ------- */
export default props => (
  <Flex 
    align='center' justify='center'
    height='100vh' >
    <BackgroundImage src={meshRight}/>
    <Box>
      <Flex
        align='center' direction='column' justify='center'
        gradient='white' gradientDir={'180deg'} boxShadow={5} br={15} px={[15,25]} pt={[55,75]} pb={[25, 40]} width={[0.9, 340, 560]} 
          hover={{
            boxShadow:1
          }}
        >
        <Heading color='blue' f={[5,6]} ta='center' >
          Utopia
        </Heading>
        <Heading color='blueLight' f={[3]} fw={300} ta='center' >
          ConsenSys Values & Governance
        </Heading>
        <Box w={[1, 265, 300]} my={30} >
          <AuthorizationLogin providerSelection='google' redirect='/dashboard/proposals/active'>
            <Button gradient='blue' width={1} ><Span textShadow={'light'}>LOGIN</Span></Button>
          </AuthorizationLogin>
        </Box>
        <Image width={40} src={consensysLogo}/>
        <Heading color='blueLight' mt={15} fw={300} f={[0]}>
          You wouldn't abandon ship in a storm just because you couldn't control the winds.
        </Heading>
      </Flex>
    </Box>
  </Flex>
)