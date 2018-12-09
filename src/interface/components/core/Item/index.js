/* --- Global Dependencies --- */
import React from 'react'
import Foundry from 'foundry'
/* ---------------------------- Module Package ------------------------------ */
export default ({data, component, styled, ...props}) =>!component 
? null
: React.createElement(component, {...props, data, styled})
