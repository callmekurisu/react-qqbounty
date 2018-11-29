import {combineReducers} from 'redux';
import { bWindowReducer } from './BountyWindow.reducer';
// import each individual reducers here, example:

export const state = combineReducers({
  // attach each reducer to a state name here, example
  bountyWindow: bWindowReducer
})