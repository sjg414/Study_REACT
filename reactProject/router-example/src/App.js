import "./App.css";
import Hompage from "./page/Hompage";
import Aboutpage from "./page/Aboutpage";
import { Routes, Route, Navigate } from "react-router";
import ProductPage from "./page/ProductPage";
import ProductDetailPage from "./page/ProductDetailPage";
import LoginPage from "./page/LoginPage";
import { useState } from "react";
import UserPage from "./page/UserPage";

function App() {
  const [authenticate, setAuthenticate] = useState(false);

  //Redirect component(인증된 사용자만 접근 가능)
  const PrivateRoute = () => {
    return authenticate === true ? <UserPage /> : <Navigate to="/login" />;
  };
  return (
    <div>
      <Routes>
        {/*page switch 역할 */}
        <Route path="/" element={<Hompage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
