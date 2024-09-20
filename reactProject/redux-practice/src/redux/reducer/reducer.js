//초기 상태
let initialState = {
  count: 0,
};

//reducer(useDispatch로 action을 받으면 해당 action을 실행)
function reducer(state = initialState, action) {
  console.log("action : ", action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
  }

  return { ...state };
}

export default reducer;
