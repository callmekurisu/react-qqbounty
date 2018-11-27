import { clickerTypes } from "../Actions/Clicker.actions";
import { chuckNorrisTypes } from "../Actions/ChuckNorris.actions";

const initialState = {
  clicks: 25,
  multiplier: 1
}

export const clickerReducer = (state = initialState, action) => {
  switch (action.type) {
    case clickerTypes.UPDATE_CLICKS:
      return {
        ...state,
        clicks: state.clicks + action.payload.amount * state.multiplier
      }
    case clickerTypes.INCREASE_MULTIPLIER:
      return {
        ...state,
        multiplier: state.multiplier + action.payload.amount,
        clicks: state.clicks - action.payload.cost
      }
    case chuckNorrisTypes.BUY_NEW_JOKE:
      return {
        ...state,
        clicks: state.clicks - action.payload.amount
      }
    default:
      break;
  }

  return state;
}