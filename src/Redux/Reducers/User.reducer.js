import { userTypes } from "../Actions/User.actions";

const initialState = {
  login:  true,
  user:   null,
  balance: 0
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
    case userTypes.SET_USER_INFO:
      return {
        ...state,
        user: action.payload.user,
        balance: action.payload.user.walletBalance
      }
    case userTypes.USER_BALANCE_CHANGE:
      return {
        ...state,
        balance: action.payload.balance
      }
    default:
      break;
  }

  return state;
}