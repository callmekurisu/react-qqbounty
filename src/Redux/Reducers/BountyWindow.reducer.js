import { bType } from "../../Redux/Actions/BountyWindow.actions";

const initialState = {
  bounties: []
}
export const bWindowReducer = (state = initialState, action) => {
  switch (action.type) {
    case bType.PREVIEW_BOUNTY:
      return {
        ...state,
        bounties: action.payload.bounties
    }
    default:
      break;
  }

  return state;
}
