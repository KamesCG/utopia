/* --- Global Dependencies --- */
import React from "react";

/* --- Local Dependencies --- */
import {
  Flex,
  Box
} from "atomic";
import { MarkdownEditor } from 'containers'
/* ------- React Component ------- */
export default props => 
<Box>
  <MarkdownEditor
    uid={props.uid}
    branch={['proposals', props.uid, 'comments']}
    writeType={'create'}
    delta={`update|proposal|${props.uid}|body|request`}
  />
</Box>