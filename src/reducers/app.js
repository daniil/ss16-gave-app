import createReducer from '../utils/create-reducer';
import {
  BOOTSTRAP_APP
} from 'actions/app-actions';

const initialState = {
  isBootstrapped: false
};

const actionHandlers = {
  [BOOTSTRAP_APP]: (state, action) => {
    return Object.assign({}, state, {
      isBootstrapped: true
    });
  }
};

export default createReducer(initialState, actionHandlers);
