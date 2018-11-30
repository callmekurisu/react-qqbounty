import { combineReducers }  from 'redux';
import { bountyReducer }   from './Bounty.reducer';
import { userReducer }      from './User.reducer';
import { snackbarReducer }      from './Snackbar.reducer';
import { mainContentReducer }   from './MainContent.reducer';

export const state = combineReducers({
  user: userReducer,
  snackbar: snackbarReducer,
  bounty: bountyReducer,
  mainContent: mainContentReducer
})