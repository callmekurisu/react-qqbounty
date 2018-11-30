import { BountiesClient } from '../../AxiosClients/qqBountyClient';

export const bountyTypes = {
  PREVIEW_BOUNTY:     'PREVIEW_BOUNTY',
  OPEN_BOUNTY_MODAL:  'OPEN_BOUNTY_MODAL',
  CLOSE_BOUNTY_MODAL: 'CLOSE_BOUNTY_MODAL'
}

export const getInitBounties = () => (dispatch) => {
  BountiesClient.get()
  .then((response) => {
    dispatch({
      type: bountyTypes.PREVIEW_BOUNTY,
        payload: {
          bounties: response.data.result.bounty_list.content
        }
    })
  })
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