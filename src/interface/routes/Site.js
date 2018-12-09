import React from 'react'
import {
  Box, Flex, Heading, Paragraph, HorizontalRule
} from 'atomic'

import Front from 'views/Front'
import Login from 'views/Login'
import Product from 'views/Product'
export default [
  {
    path: "/",
    main: Login,
    props: {
      exact: true,
    }
  },
  /* ------------------------- Product -------------------------- */
  {
    path: "/products",
    main: Product,
  },
  /* --- Trust Anchors --- */
  {
    path: "/product",
    main: Product,
  },
  /* ------------------------- Users -------------------------- */

]