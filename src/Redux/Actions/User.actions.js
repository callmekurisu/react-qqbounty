import axios from 'axios';
import { snackbarTypes } from './Snackbar.actions';
import { mainContentTypes } from './MainContent.actions';
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;
export let jwtToken;

function setJwtToken(){
  jwtToken = localStorage.getItem('JWT');
}
export const userTypes = {
  USER_LOGIN:   'USER_LOGIN',
  USER_LOGOUT:  'USER_LOGOUT',
  USER_REGISTER:'USER_REGISTER',
  USER_BALANCE_CHANGE:'USER_BALANCE_CHANGE',
  SET_USER_INFO:      'SET_USER_INFO'
}

export const setupUser = () => (dispatch) => {
  if(localStorage.getItem('JWT')) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('JWT');
    axios.get(SERVER_ADDRESS+'/users/info')
    .then(response => {
      dispatch({
        type: userTypes.SET_USER_INFO,
        payload: {
          user: response.data.result.user
        }
      });
      dispatch({
        type: userTypes.USER_LOGIN,
        payload: {
          login: true
        }
      });
    })
  }
}

export const login = (pUsername, pPassword) => (dispatch) => {
  dispatch({
    type: userTypes.USER_LOGIN,
    payload: {
      login: true
    }
  });
  axios.post(SERVER_ADDRESS+'/users/login', {
    username: pUsername,
    password: pPassword
  })
  .then(response => {
    dispatch({
      type: userTypes.USER_LOGIN,
      payload: {
        login: true
      }
    });
    dispatch({
      type: snackbarTypes.SNACKBAR_ADD,
      payload: {
        message: "Welcome back " + response.data.result.user.username
      }
    });
    localStorage.setItem('JWT', response.data.result.jwt);

    setJwtToken();
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.result.jwt;
    axios.get(SERVER_ADDRESS+'/users/info')
    .then(response => {
      dispatch({
        type: userTypes.SET_USER_INFO,
        payload: {
          user: response.data.result.user
        }
      });
    })
    .catch(error => {
      
    });
  })
  .catch(error => {

  });
}

export const logout = () => (dispatch) => {
  localStorage.removeItem('JWT');
  dispatch({
    type: userTypes.USER_LOGOUT,
    payload: {
      login: false
    }
  });
  dispatch({
    type: snackbarTypes.SNACKBAR_ADD,
    payload: {
      message: "Logged out"
    }
  });
  dispatch({
    type: mainContentTypes.CHANGE_PAGE,
      payload: {
        page: 'home'
      }
  });
}

export const register = (pUsername, pPassword, pEmail) => (dispatch) => {
  const userObject = {
    "username": pUsername,
    "password": pPassword,
    "email": pEmail
  }
  axios.post(SERVER_ADDRESS+'/users',userObject)
  .then(response => {
    dispatch({
      type: snackbarTypes.SNACKBAR_ADD,
      payload: {
        message: "Register Successful"
      }
    });
  })
  .catch(error => {
    dispatch({
      type: userTypes.USER_LOGIN,
      payload: {
        login: false
      }
    });
    dispatch({
      type: snackbarTypes.SNACKBAR_ADD,
      payload: {
        message: "Unable to register"
      }
    });
  });
}

export const balanceChange = (pBalance) => (dispatch) => {
  dispatch({
    type: userTypes.USER_BALANCE_CHANGE,
    payload: {
      balance: pBalance
    }
  });
}