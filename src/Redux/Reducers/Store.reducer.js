import { storeTypes } from "../Actions/Store.actions";

const initialState = {
  products: []
}

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case storeTypes.STORE_SET_PRODUCTS:
      return {
        ...state,
        products: action.payload.products
      }
    default:
      break;
  }

  return state;
}