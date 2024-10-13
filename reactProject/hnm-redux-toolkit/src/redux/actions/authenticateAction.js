//로그인 처리를 위한 미들웨어
import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password) {
  return async (dispatch, getState) => {
    let auth = await Promise.resolve(true);
    console.log("promise?", typeof auth);
    // dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
    dispatch(authenticateActions.loginSuccess({ id, password }));
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch(authenticateActions.logoutSuccess());
  };
}

export const authenticateAction = { login, logout };
