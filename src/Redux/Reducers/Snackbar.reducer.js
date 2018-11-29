import { snackbarTypes } from "../Actions/Snackbar.actions";

const initialState = {
  message: ''
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.SNACKBAR_ADD:
      return {
        ...state,
        message: action.payload.message
      }
    default:
      break;
  }

  return state;
}