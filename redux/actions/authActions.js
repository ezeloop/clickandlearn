import { LOGIN, LOGOUT } from "../types/types";
import { uiFinishLoading, uiStartLoading } from "./uiActions";

const signIn = async ({ username, password }) => {
  console.log("singin");
  /*
  / TO DO // REPLACE WITH COGNITO LOGIN METHOD
  */
  //await loginUserWithAwsCognito(username, password);
};

export const setUserToken = (token) => ({
  type: LOGIN,
  payload: {
    token,
    isLoggedIn: true,
  },
});

export const startLoginWithUsernameAndPassword = (username, password) => {
  return async (dispatch) => {
    dispatch(uiStartLoading());
    // EXAMPLE OF IMPLEMENTATION BELOW
    // await signIn({ username, password })
    //   .then((token) => {
    //     dispatch(setUserToken(token));
    //     dispatch(uiFinishLoading());
    //   })
    //   .catch((err) => {
    //     dispatch(uiFinishLoading());
    //     console.log(err);
    //   });

    //ONLY FOR ILUSTRATIVE PURPOSE USING THIS APROACH BELOW
    dispatch(setUserToken("tokenexample"));
    setTimeout(() => {
      dispatch(uiFinishLoading());
    }, 1000);
  };
};

export const logout = () => ({
  type: LOGOUT,
});

export const startLogout = () => {
  return async (dispatch) => {
    dispatch(uiStartLoading());
    /*
    / TO DO // REPLACE WITH COGNITO LOGOUT METHOD
    */
    //await logoutUserWithAwsCognito();
    dispatch(logout());
    dispatch(uiFinishLoading());
  };
};
