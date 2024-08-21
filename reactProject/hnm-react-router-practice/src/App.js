//Homepage : 제품들을 렌더링
//Loginpage : 로그인화면
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navigate, Route, Routes, useFetcher } from "react-router-dom";
import Homepage from "./page/Homepage";
import Loginpage from "./page/Loginpage";
import { useState } from "react";
import Userpage from "./page/Userpage";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  const PrivateRoute = () => {
    return authenticate ? <Userpage /> : <Navigate to="/login" />;
  };
  return (
    <div className="main-container">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
      </Routes>
    </div>
  );
}

export default App;
