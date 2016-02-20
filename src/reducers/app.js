import createReducer from '../utils/create-reducer';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from 'actions/app-actions';

const initialState = {
  isAuthenticated: false,
  loggedInUser: null
};

const actionHandlers = {
  [LOGIN_SUCCESS]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: true,
      loggedInUser: action.payload
    });
  },
  [LOGOUT_SUCCESS]: (state) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      loggedInUser: null
    });
  }
};

export default createReducer(initialState, actionHandlers);
