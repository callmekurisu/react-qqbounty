import { BountiesClient } from '../../AxiosClients/qqBountyClient';
import { userTypes }      from './User.actions';
import { snackbarTypes }  from './Snackbar.actions';
import axios from 'axios';
export const bountyTypes = {
  GET_SEARCH_BOUNTIES:      'GET_SEARCH_BOUNTIES',
  GET_NEW_BOUNTIES:         'GET_NEW_BOUNTIES',
  GET_OLD_BOUNTIES:         'GET_OLD_BOUNTIES',
  GET_POPULAR_BOUNTIES:     'GET_POPULAR_BOUNTIES',
  GET_HIGH_PAY_BOUNTIES:    'GET_HIGH_PAY_BOUNTIES',
  POST_BOUNTY:        'POST_BOUNTY',
  OPEN_BOUNTY_MODAL:  'OPEN_BOUNTY_MODAL',
  CLOSE_BOUNTY_MODAL: 'CLOSE_BOUNTY_MODAL'
}
const SERVER_ADDRESS = process.env.REACT_APP_SERVER_ADDRESS;

export const getNewBounties = () => (dispatch) => {
  axios.get(SERVER_ADDRESS+'/bounties/newest')
  .then(response => {
    dispatch({
      type: bountyTypes.GET_NEW_BOUNTIES,
      payload: {
        newBounties: response.data.result
      }
    });
  })
  .catch(error => {
    console.log("No bueno =(")
  });
}

export const getOldBounties = () => (dispatch) => {
  axios.get(SERVER_ADDRESS+'/bounties/oldest')
  .then(response => {
    dispatch({
      type: bountyTypes.GET_OLD_BOUNTIES,
      payload: {
        oldBounties: response.data.result
      }
    });
  })
  .catch(error => {
    console.log("No bueno =(")
  });
}

export const getPopularBounties = () => (dispatch) => {
  axios.get(SERVER_ADDRESS+'/bounties/popular')
  .then(response => {
    dispatch({
      type: bountyTypes.GET_POPULAR_BOUNTIES,
      payload: {
        popularBounties: response.data.result
      }
    });
  })
  .catch(error => {
    console.log("No bueno =(")
  });
}

export const getHighPayBounties = () => (dispatch) => {
  axios.get(SERVER_ADDRESS+'/bounties/cost')
  .then(response => {
    dispatch({
      type: bountyTypes.GET_HIGH_PAY_BOUNTIES,
      payload: {
        highPayBounties: response.data.result
      }
    });
  })
  .catch(error => {
    console.log("No bueno =(")
  });
}

export const getBountyBySubjects = (pSubjects) => (dispatch) => {
  // ["Math","PADFAdsf"]
  let paramString = "";
  if(pSubjects.length !== 0) {
      paramString = "?"
      pSubjects.map((subject)=>{
          paramString = "subjects="+subject+"&"
      })

      paramString = paramString.substring(0,paramString.length-1);
  }
  axios.get(SERVER_ADDRESS+`/bounties/subjects${paramString}`)
  .then(response => {
    dispatch({
      type: bountyTypes.GET_HIGH_PAY_BOUNTIES,
      payload: {
        highPayBounties: response.data.result
      }
    });
  })
  .catch(error => {
    console.log("No bueno =(")
  });
}

export const submitBounty = (state) => (dispatch) => {
  console.log(state)
  let jwtToken = localStorage.getItem("JWT");
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + jwtToken;
    axios.post(SERVER_ADDRESS+'/bounties',state)
    .then(response => {
      dispatch({
        type: userTypes.SET_USER_INFO,
        payload: {
          user: response.data.result.user
        }
      });
      dispatch({
        type: snackbarTypes.SNACKBAR_ADD,
        payload: {
          message: "Bounty Submitted"
        }
      });
    })
    .catch(error => {
      
    });

}

export const openBountyModal = (pBounty) => (dispatch) => {
  dispatch({
    type: bountyTypes.OPEN_BOUNTY_MODAL,
      payload: {
        modalOpen:      true,
        modalBountyId:  pBounty.bountyId,
        modalBounty:    pBounty
      }
  });
}

export const closeBountyModal = () => (dispatch) => {
  dispatch({
    type: bountyTypes.CLOSE_BOUNTY_MODAL,
      payload: {
        modalOpen:      false
      }
  });
}