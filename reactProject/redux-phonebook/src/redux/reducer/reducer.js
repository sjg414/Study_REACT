let initialState = {
  num: 0, //연락처 갯수
  contactList: [], //연락처 정보(name, phoneNumber)
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT": //create 버튼 클릭 시, 연락처 추가(num+1, name, phoneNumber 값 저장)
      return {
        ...state,
        num: state.num + 1,
        contactList: [
          ...state.contactList,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    default:
      return { ...state };
  }
}

export default reducer;
