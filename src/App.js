import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import './Css/App.css';
import BountyWindow from './Components/BountyWindow.component';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BountyWindow/>
      </Provider>
    );
  }
}

export default App;