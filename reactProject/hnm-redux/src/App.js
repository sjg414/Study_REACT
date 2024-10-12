import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import NavBar from "./component/NavBar";
import ProductAll from "./page/ProductAll";
import LoginPage from "./page/LoginPage";
import PrivateRoute from "./route/PrivateRoute";
import { useState } from "react";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:id" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
