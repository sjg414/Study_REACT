//로그인 처리를 위한 미들웨어
import { authenticateActions } from "../reducers/authenticateReducer";

function login(id, password) {
  return async (dispatch, getState) => {
    dispatch(authenticateActions.loginSuccess({ id, password }));
  };
}

function logout() {
  return (dispatch, getState) => {
    dispatch(authenticateActions.logoutSuccess());
  };
}

export const authenticateAction = { login, logout };
