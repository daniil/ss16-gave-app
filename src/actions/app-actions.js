import Firebase from 'firebase';

const fbRef = new Firebase("https://ss16-gave-app.firebaseio.com/");
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export function bootstrapApp() {
  return (dispatch) => {
    const authData = fbRef.getAuth();
    if (authData) {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: authData
      });
    }
  };
}

export function loginUser() {
  return (dispatch) => {
    fbRef.authWithOAuthPopup('facebook', (error, authData) => {
      if (!error) {
        console.log("::AUTH SUCCESS", authData);
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
  }
}
