/* --- Interface Globals --- */
import 'theme/inject/index.js'
import 'theme/stylesheet/app.global.css'
/* --- Global Dependencies --- */
import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import { ThemeProvider} from 'styled-components'

/* --- Local Dependencies --- */
import Contexts from 'context/Contexts'
import themeSettings from 'theme/settings'
import { ScrollToTop } from 'atomic'
import Routes from './entry.js';

/* --- Component --- */
export default ({ store, history, children }) =>
<Provider store={store}>
    <ConnectedRouter history={history}>
        <ThemeProvider theme={themeSettings}>
            <ScrollToTop>
              <Contexts>
                <Routes/>
              </Contexts>
            </ScrollToTop>
        </ThemeProvider>
    </ConnectedRouter>
</Provider>