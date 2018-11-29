import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

import BountyModal from './Components/BountyModal.component';

import './Css/App.css';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BountyModal/>
      </Provider>
    );
  }
}

export default App;