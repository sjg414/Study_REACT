//Homepage : 제품들을 렌더링
//Loginpage : 로그인화면
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./page/Homepage";
import Loginpage from "./page/Loginpage";

function App() {
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
