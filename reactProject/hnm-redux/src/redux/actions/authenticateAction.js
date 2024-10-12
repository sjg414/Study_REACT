//로그인 처리를 위한 미들웨어
function login(id, password) {
  return (dispatch, getState) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: { id, password } });
  };
}

export const authenticateAction = { login };
