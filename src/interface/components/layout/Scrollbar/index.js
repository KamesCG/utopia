/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar'

export default props =>
<PerfectScrollbar wheelPropagation>
  {props.children}
</PerfectScrollbar>
