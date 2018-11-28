import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

import { LogInComponent } from './Components/Login.component';
import Modal from './Components/Modal';

import './Css/App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>

      </Provider>
    );
  }
}

export default App;