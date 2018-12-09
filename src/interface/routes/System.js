import React from 'react'
import {
  Box, Flex, Heading, Paragraph, HorizontalRule
} from 'atomic'

import Login from 'views/Login'
export default [
  {
    path: "/system/login",
    component: Login,
    props: {
      exact: true,
    }
  },

]