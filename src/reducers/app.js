import createReducer from '../utils/create-reducer';
import {
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
  RECEIVE_WISHLIST,
  RECEIVE_STATUS_TYPES
} from 'actions/app-actions';

const initialState = {
  isAuthenticated: false,
  loggedInUser: null,
  currentWishlist: null,
  statusTypes: null
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
  },
  [RECEIVE_WISHLIST]: (state, action) => {
    return Object.assign({}, state, {
      currentWishlist: action.payload
    });
  },
  [RECEIVE_STATUS_TYPES]: (state, action) => {
    return Object.assign({}, state, {
      statusTypes: action.statusTypes
    });
  }
};

export default createReducer(initialState, actionHandlers);
