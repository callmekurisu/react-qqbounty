import { BountiesClient } from '../../AxiosClients/qqBountyClient';
import { userTypes }      from './User.actions';
import { snackbarTypes }  from './Snackbar.actions';

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

export const getNewBounties = () => (dispatch) => {
  BountiesClient.get('/newest')
  .then((response) => {
    dispatch({
      type: bountyTypes.GET_NEW_BOUNTIES,
        payload: {
          newBounties: response.data.result
        }
    })
  })
}

export const getOldBounties = () => (dispatch) => {
  BountiesClient.get('/oldest')
  .then((response) => {
    dispatch({
      type: bountyTypes.GET_OLD_BOUNTIES,
        payload: {
          oldBounties: response.data.result
        }
    })
  })
}

export const getPopularBounties = () => (dispatch) => {
  BountiesClient.get('/popular')
  .then((response) => {
    dispatch({
      type: bountyTypes.GET_POPULAR_BOUNTIES,
        payload: {
          popularBounties: response.data.result
        }
    })
  })
}

export const getHighPayBounties = () => (dispatch) => {
  BountiesClient.get('/cost')
  .then((response) => {
    dispatch({
      type: bountyTypes.GET_HIGH_PAY_BOUNTIES,
        payload: {
          highPayBounties: response.data.result
        }
    })
  })
}

export const submitBounty = (state) => (dispatch) => {
  console.log(state)
  // BountiesClient.post()
  // .then((response) => {
  //   dispatch({
  //     type: bountyTypes.GET_HIGH_PAY_BOUNTIES,
  //       payload: {
  //         highPayBounties: response.data.result
  //       }
  //   })
  // })

  dispatch({
    type: snackbarTypes.SNACKBAR_ADD,
    payload: {
      message: "Bounty Submitted"
    }
  });

  dispatch({
    type: userTypes.USER_BALANCE_CHANGE,
    payload: {
      message: "Bounty Submitted"
    }
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