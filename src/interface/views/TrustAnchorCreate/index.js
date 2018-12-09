/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex,
  Box, BackgroundGradient
} from "atomic";
import FormCreateTrustAnchor from 'forms/FormCreateTrustAnchor'
/* ------- React Component ------- */
export default props => 
<div>
<BackgroundGradient gradient='white'/>
<Box p={20} >
  <FormCreateTrustAnchor/>
</Box>
</div>