//page 제목과 메뉴 표현을 위한 컴포넌트
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Menubar = () => {
  const navigate = useNavigate();
  const menu = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sports",
    "Sale",
    "지속가능성",
  ];

  const goLoginPage = () => {
    navigate("/login");
  };
  return (
    <div className="menubar-container">
      <div className="login-container">
        <h1>H&M</h1>
        <Button
          className="login-btn"
          variant="info"
          onClick={() => goLoginPage()}
        >
          Login
        </Button>
      </div>
      <ul className="menubar">
        {menu.map((item) => (
          <li
            key={item}
            onClick={() => {
              console.log("item?", item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menubar;
