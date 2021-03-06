import Firebase from 'firebase';
import { routeActions } from 'react-router-redux';

const fbRef = new Firebase('https://ss16-gave-app.firebaseio.com/');
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const RECEIVE_WISHLIST = 'RECEIVE_WISHLIST';
export const RECEIVE_STATUS_TYPES = 'RECEIVE_STATUS_TYPES';

export function bootstrapApp() {
  return (dispatch) => {
    const authData = fbRef.getAuth();
    if (authData) {
      saveUser(authData);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: authData
      });
    } else {
      dispatch(logoutUser());
    }
    setStatusTypes(dispatch);
  };
}

export function loginUser() {
  return (dispatch) => {
    fbRef.authWithOAuthPopup('facebook', (error, authData) => {
      if (!error) {
        saveUser(authData);
        dispatch({
          type: LOGIN_SUCCESS,
          payload: authData
        });
      }
    });
  };
}

export function logoutUser() {
  return (dispatch) => {
    fbRef.unauth();
    dispatch({
      type: LOGOUT_SUCCESS
    });
    dispatch(routeActions.push('/'));
  };
}

export function getWishlist(id) {
  return (dispatch) => {
    fbRef.child(`wishlists/${id}`).once('value', (snap) => {
      dispatch({
        type: RECEIVE_WISHLIST,
        payload: snap.val()
      });
    });
  };
}

export function addWishlistItem(wishlistId, payload) {
  return (dispatch) => {
    fbRef.child(`wishlists/${wishlistId}/items`).push(payload);
    dispatch(getWishlist(wishlistId));
  };
}

export function voteUp(wishlistId, userId, wishlistItemKey) {
  return (dispatch) => {
    const currItem = `wishlists/${wishlistId}/items/${wishlistItemKey}`;
    fbRef.child(currItem).once('value', (snap) => {
      fbRef.child(currItem).update({
        voteCount: snap.val().voteCount + 1
      });
      fbRef.child(currItem).child('voters').update({
        [userId]: Date.now()
      });
      dispatch(getWishlist(wishlistId));
    });
  };
}

export function changeWishlistItemStatus(wishlistId, userId, wishlistItemKey, statusId) {
  return (dispatch) => {
    const currItem = `wishlists/${wishlistId}/items/${wishlistItemKey}`;
    fbRef.child(currItem).once('value', (snap) => {
      fbRef.child(currItem).update({
        status: statusId,
        statusOwner: (statusId !== 0) ? userId : null
      });
      dispatch(getWishlist(wishlistId));
    });
  };
}

function saveUser(authData) {
  fbRef.child(`users/${authData.uid}`).set(authData.facebook);
}

function setStatusTypes(dispatch) {
  const statusTypes = {
    0: 'For grabs',
    1: 'Dibbs',
    2: 'Taken'
  };
  fbRef.child('status').set(statusTypes, () => {
    dispatch({
      type: RECEIVE_STATUS_TYPES,
      statusTypes
    });
  });
}
