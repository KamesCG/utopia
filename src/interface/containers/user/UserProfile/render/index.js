/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { Flex, Box, Image, Button, Span } from 'atomic'
/* --------------------------- Styled Components ---------------------------- */
import AuthorizationLogin from 'containers/authentication/AuthorizationLogin'
/* ------------------------------- Component -------------------------------- */
const UserProfile = (props) => !props.user 
?
null
:
<Flex {...props} 
  align='center' direction={['row']} justify='space-between' wrap='wrap' 
  textAlign={['center']} w={[1]} >
  <Box >
    <Span>{props.user.displayName}</Span>
  </Box>
  <Box >
    <Image src={props.user.photoURL} h={[37.5]} w={[37.5]} br={0.5} bs={[2]} b={['2px solid transparent']} bc={['white']} />
  </Box>
</Flex>
  

/* ---------------------------- Export Package ------------------------------ */
export default UserProfile