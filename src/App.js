import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

import Modal from './Components/Modal';

import './Css/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Modal />
      </Provider>
    );
  }
}

export default App;