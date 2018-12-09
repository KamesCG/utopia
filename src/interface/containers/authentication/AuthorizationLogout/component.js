/* --- Global Dependencies --- */
import React from 'react'

/* --- Local Dependencies --- */
import { Flex, Box, Image, Button } from 'atomic'
/* --- Component --- */
export default (props) => !props.user.loggedIn ? null:<Box onClick={props.logout} f={[0]}>Logout</Box>