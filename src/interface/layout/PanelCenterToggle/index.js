/* --- Global Dependencies --- */
import React from 'react'
 
/* --- Local Dependencies --- */
import { PanelCenterContext } from 'layout/LayoutContext.js'
import AccountInformation from 'views/AccountInformation';
/* --- React Component --- */
export default props => (
<PanelCenterContext.Consumer>
    {panel => (
        <div onClick={() => panel.toggle(!panel.active, AccountInformation)}>
            {props.children}
        </div>
    )}
</PanelCenterContext.Consumer>
)