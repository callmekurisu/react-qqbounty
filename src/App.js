import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

import Modal from './Components/Modal';

import './Css/App.css';
import { LogInComponent } from './Components/Login.component';
import {Provider} from 'react-redux';
import {store} from './Redux/Store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>

      </Provider>
    );
  }
}

export default App;