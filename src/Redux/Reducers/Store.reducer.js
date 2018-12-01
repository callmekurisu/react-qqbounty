import { storeTypes } from "../Actions/Store.actions";

const initialState = {
  products: [ {"id":1, "product_name":"Basic", "product_credit":"500", "product_cost":"500"},
              {"id":2, "product_name":"Deluxe", "product_credit":"1000", "product_cost":"1100"},
              {"id":3, "product_name":"Wombo Combo", "product_credit":"2000", "product_cost":"2300"}]
}

export const storeReducer = (state = initialState, action) => {
  switch (action.type) {
    case storeTypes.STORE_SET_PRODUCTS:
      return {
        ...state,
        page: action.payload.products
      }
    default:
      break;
  }

  return state;
}