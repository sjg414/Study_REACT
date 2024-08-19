import React from "react";
import { Link, useNavigate } from "react-router-dom"; //page 간의 이동 시켜주는 역할

const Hompage = () => {
  const navigate = useNavigate();
  const goProductPage = () => {
    navigate("/products?q=pants");
  };
  return (
    <div>
      <h1>Hompage</h1>
      <Link to="/about">Go to Aboutpage</Link>
      <button onClick={goProductPage}>go to product page</button>
    </div>
  );
};

export default Hompage;
