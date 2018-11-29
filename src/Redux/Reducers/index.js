import { combineReducers }  from 'redux';
import { bWindowReducer }   from './BountyWindow.reducer';
// import each individual reducers here, example:
import { userReducer }      from './User.reducer';

export const state = combineReducers({
  // attach each reducer to a state name here, example
  user: userReducer,
  bountyWindow: bWindowReducer
})