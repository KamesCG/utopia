/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
// import idx from './idx'
/* ------------------------- Internal Dependencies -------------------------- */
import { Box, Flex, Button, Heading, ReduxField } from 'atomic'
import Form from 'molecules/Form'
import StyleFieldDefault from 'static/style/StyleFieldDefault'
/* ---------------------------- Form Component ------------------------------ */
export default ({ handleSubmit, isSubmitting, styled, ...props}) =>
<Form {...styled}>
    <Field name="proposalTitle" placeholder="Proposal Name" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="proposalTagline" placeholder="Proposal Tagline" component={ReduxField} type="text" {...StyleFieldDefault} />
    <Field name="proposalSummary" placeholder="Proposal Summary" component={ReduxField} type="textarea" {...StyleFieldDefault} />
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='blue' w={1} >
      Create Proposal
    </Button>
  </Box>
</Form>
