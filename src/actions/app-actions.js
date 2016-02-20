export const BOOTSTRAP_APP = 'BOOTSTRAP_APP';

export function bootstrapApp() {
  return (dispatch) => {
    dispatch({
      type: BOOTSTRAP_APP
    });
  };
}
