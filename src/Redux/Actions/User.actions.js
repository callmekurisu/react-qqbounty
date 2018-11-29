import axios from 'axios';

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

export const userTypes = {
  USER_LOGIN:   'USER_LOGIN',
  USER_LOGOUT:  'USER_LOGOUT',
  USER_REGISTER:'USER_REGISTER'
}

export const login = (pUsername, pPassword) => (dispatch) => {
  axios.post(SERVER_ADDRESS+'/users/login', {
    username: pUsername,
    password: pPassword
  })
  .then(response => {
    localStorage.setItem('JWT', response.data.result.jwt);
    dispatch({
      type: userTypes.USER_LOGIN,
      payload: {
        login: true
      }
    });
  })
  .catch(error => {
    dispatch({
      type: userTypes.USER_LOGIN,
      payload: {
        login: true
      }
    });
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
}

export const register = (pUsername, pPassword, pEmail) => (dispatch) => {
  axios.post(SERVER_ADDRESS+'/users', {
    username: pUsername,
    password: pPassword,
    email: pEmail
  })
  .then(response => {
    dispatch({
      type: userTypes.USER_LOGIN,
      payload: {
        login: true
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
  });
}