import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FormAttestationBuilder from 'containers/forms/FormAttestationBuilder'
import QRScanner from 'containers/qr/QRScanner'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="container">
          <QRScanner/>
          <FormAttestationBuilder/>
        </div>
      </div>
    );
  }
}

export default App;
