import Firebase from 'firebase';

const fbRef = new Firebase("https://ss16-gave-app.firebaseio.com/");
export const BOOTSTRAP_APP = 'BOOTSTRAP_APP';

export function bootstrapApp() {
  return (dispatch) => {
    dispatch({
      type: BOOTSTRAP_APP
    });
  };
}
