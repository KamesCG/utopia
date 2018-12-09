/* --- Global Dependencies --- */
import React from 'react'
/* --- Local Dependencies --- */
// Components
import FormCreateValueProposal from 'forms/FormCreateValueProposal'
import DashboardOverviewItems from 'static/menus/DashboardOverview'
import MenuHorizontalList from 'components/menus/MenuHorizontalList'
import {
  Box, BackgroundGradient, Absolute, Heading, Paragraph
} from 'atomic'


/* --- React Component --- */
export default props =>
<Box p={25} >
  <Box mb={[20,40]} width={[1,1,0.5]} >
    <Heading color='blue' f={[5,6]}>
      Create A Proposal
    </Heading>
    <Paragraph f={[1]}>
      Ut vitae mauris justo. In orci lectus, posuere varius risus vel, tincidunt tincidunt justo. Morbi maximus suscipit leo id lacinia. Suspendisse at tempus nunc, porttitor mollis tellus. Fusce nec luctus velit, ut consectetur lacus. Nulla a vehicula mi, a dictum magna. Nunc tristique leo eget sem varius lacinia. Phasellus augue tellus, iaculis quis ullamcorper id, dapibus id sem.
    </Paragraph>
  </Box>
  <FormCreateValueProposal/>
</Box>