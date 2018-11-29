import { BountiesClient } from '../../AxiosClients/qqBountyClient';

export const bType = {
    PREVIEW_BOUNTY: 'PREVIEW_BOUNTY'
}
export const getInitBounties = () => (dispatch) => {
  BountiesClient.get()
   .then((response) => {
      dispatch({
        type: bType.PREVIEW_BOUNTY,
          payload: {
            bounties: response.data.result.bounty_list.content
            }
      })
    })
}

