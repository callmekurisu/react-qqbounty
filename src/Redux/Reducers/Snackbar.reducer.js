import { snackbarTypes } from "../Actions/Snackbar.actions";

const initialState = {
  message: ''
}

export const snackbarReducer = (state = initialState, action) => {
  console.log(action.type)

  switch (action.type) {
    case snackbarTypes.SNACKBAR_ADD:
      console.log("thing")
      return {
        ...state,
        message: action.payload.message
      }
    default:
      break;
  }

  return state;
}