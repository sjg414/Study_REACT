import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Menubar from "./component/Menubar";
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import PrivateRoute from "./route/PrivateRoute";

/*
1. 전체상품페이지, 로그인, 상품상세페이지
2. 전체 상품페이지에서는 전체 상품을 볼 수 있다.
3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
3. 상품디테일을 눌렀으나, 로그인이 안되있을 경우 로그인 페이지가 먼저 나온다.
4. 로그인이 되어 있을 경우에는 상품 디테일 페이지를 볼 수 있다.
5.로그아웃 버튼을 클릭하면 로그아웃이 된다.
5. 로그아웃이 되면 상품 디테일페이지를 볼 수 없다.(다시 로그인 페이지가 보임)
6. 로그인/로그아웃 표시
7. 상품을 검색할 수 있다. */

function App() {
  const [authenticate, setAuthenticate] = useState(false); // true : 로그인 O, false: 로그인 x

  return (
    <div className="main-container">
      <Menubar authenticate={authenticate} setAuthenticate={setAuthenticate} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route
          path="/login"
          element={<Login setAuthenticate={setAuthenticate} />}
        />
        <Route
          path="/product/:id"
          element={<PrivateRoute authenticate={authenticate} />}
        />
      </Routes>
    </div>
  );
}

export default App;
