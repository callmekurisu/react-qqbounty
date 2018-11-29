import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './Redux/Store';

import  LogInComponent  from './Components/Navbar/Login.component';
import  NavBar  from './Components/Navbar/NavBar.component';
import  MainContent  from './Components/MainContent.component';

import './Css/App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <NavBar />
          <MainContent />
        </>
      </Provider>
    );
  }
}

export default App;