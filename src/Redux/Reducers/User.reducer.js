import { userTypes } from "../Actions/User.actions";

const initialState = {
  login: false
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.USER_LOGIN:
      return {
        ...state,
        login: action.payload.login
      }
    case userTypes.USER_LOGOUT:
      return {
        ...state,
        login: action.payload.login
      }
    case userTypes.USER_REGISTER:
      return {
        ...state
      }
    default:
      break;
  }

  return state;
}