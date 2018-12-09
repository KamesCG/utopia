/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import { PanelRightContext } from 'layout/LayoutContext.js'
import AccountInformation from 'views/AccountInformation';
import { Box } from 'atomic'
/* --- React Component --- */
export default props =>
<PanelRightContext.Consumer>
{panel => (
<Box onClick={() => panel.toggle(!panel.active, AccountInformation)}>
    {props.children}
</Box>
)}
</PanelRightContext.Consumer>