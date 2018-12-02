import { storeTypes } from "../Actions/Store.actions";

const initialState = {
  products: [{"id":1, "productName":"Basic", "productCredit":"500", "productCost":"500"},
  {"id":2, "productName":"Deluxe", "productCredit":"1000", "productCost":"1100"},
  {"id":3, "productName":"Wombo Combo", "productCredit":"2000", "productCost":"2300"}]
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