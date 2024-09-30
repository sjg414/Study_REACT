let initialState = {
  search: "", //검색 키워드
  contactArray: [], //연락처 정보(name, phoneNumber)
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case "ADD_CONTACT": //create 버튼 클릭 시, 연락처 추가(num+1, name, phoneNumber 값 저장)
      return {
        ...state,
        num: state.num + 1,
        contactArray: [
          ...state.contactArray,
          {
            name: payload.name,
            phoneNumber: payload.phoneNumber,
          },
        ],
      };
    case "INPUT_SEARCH": //검색 버튼 클릭 시, 검색 키워드 저장
      return {
        ...state,
        search: payload.search,
      };
    default:
      return { ...state };
  }
}

export default reducer;
