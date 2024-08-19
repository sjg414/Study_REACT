import React from "react";
import { useNavigate } from "react-router-dom"; //page간의 이동을 시켜주는 함수(Link랑 비슷)

const Aboutpage = () => {
  const navigate = useNavigate();

  const goToHompage = () => {
    navigate("/");
  };
  return (
    <div>
      <h1>Aboutpage</h1>
      <button onClick={goToHompage}>Go to Hompage</button>
    </div>
  );
};

export default Aboutpage;
