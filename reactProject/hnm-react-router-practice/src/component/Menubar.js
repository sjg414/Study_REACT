//page 제목과 메뉴 표현을 위한 컴포넌트
import React from "react";

const Menubar = () => {
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
  return (
    <div className="menubar-container">
      <div>
        <h1>H&M</h1>
        <button className="login-btn">login</button>
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
