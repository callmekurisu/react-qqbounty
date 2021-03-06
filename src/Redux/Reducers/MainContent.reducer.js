import { mainContentTypes } from "../Actions/MainContent.actions";

const initialState = {
  page: 'home'
}

export const mainContentReducer = (state = initialState, action) => {
  switch (action.type) {
    case mainContentTypes.CHANGE_PAGE:
      return {
        ...state,
        page: action.payload.page
      }
    default:
      break;
  }

  return state;
}