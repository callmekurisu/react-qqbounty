import { combineReducers }  from 'redux';
import { bWindowReducer }   from './BountyWindow.reducer';
import { userReducer }      from './User.reducer';
import { snackbarReducer }      from './Snackbar.reducer';

export const state = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  bountyWindow: bWindowReducer
})