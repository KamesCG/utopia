import React from 'react';

export const layout = {
  panelRight: {
    enabled: true
  },
};

export const PanelRightContext = React.createContext({
  layout: false,
  panelRightToggle: version => {}
});

export const PanelCenterContext = React.createContext({
  active: false,
  toggle: version => {}
});