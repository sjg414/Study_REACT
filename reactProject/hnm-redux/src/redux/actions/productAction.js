//제품정보 가져오는 미들웨어 함수(비동기 처리를 위한)
function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `http://localhost:4000/products/?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

//detail 정보 가져오기 위한 미들웨어 함수(비동기 처리를 위한)
function getPrductDetail(id) {
  return async (dispatch, getState) => {
    let url = `http://localhost:4000/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_DETAIL_SUCCESS", payload: { data } });
  };
}

export const productAction = { getProducts, getPrductDetail };
