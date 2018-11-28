import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';
import './Css/App.css';
import BountyComponent from './Components/BountyWindow.component';



class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BountyComponent/>
      </Provider>
    );
  }
}

export default App;