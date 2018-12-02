import axios from 'axios';
import { snackbarTypes } from './Snackbar.actions';

const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;
let jwtToken = localStorage.getItem('JWT');

export const storeTypes = {
  STORE_SET_PRODUCTS: 'STORE_SET_PRODUCTS',
  STORE_PURCHASE:     'STORE_PURCHASE'
}

export const purchase = (pProductId) => (dispatch) => {
  if( localStorage.getItem('JWT') ) {
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('JWT');
    axios.post(SERVER_ADDRESS+'/products/'+pProductId)
    .then(response => {
      dispatch({
        type: snackbarTypes.SNACKBAR_ADD,
        payload: {
          message: "Order processed! Thank you."
        }
      });
      dispatch({
        type: snackbarTypes.SNACKBAR_ADD,
        payload: {
          message: "Order processed! Thank you."
        }
      });
    })
    .catch(error => {
      dispatch({
        type: snackbarTypes.SNACKBAR_ADD,
        payload: {
          message: "Unable to process order."
        }
      });
    });
  } else {
    dispatch({
      type: snackbarTypes.SNACKBAR_ADD,
      payload: {
        message: "Please login to purchase."
      }
    });
  }
}

export const setUp = () => (dispatch) => {
  axios.get(`${SERVER_ADDRESS}/products`,
  {headers: {
    'Authorization': `Bearer ${jwtToken}`
  }})
  .then(response => {
    dispatch({
      type: storeTypes.STORE_SET_PRODUCTS,
      payload: {
        products: response.data.result.product_list
      }
    });
  })
  .catch(error => {
    console.log("No bueno =(")
  });
}