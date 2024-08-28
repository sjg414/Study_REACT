//page 제목과 메뉴 표현을 위한 컴포넌트
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Menubar = ({ authenticate, setAuthenticate }) => {
  const navigate = useNavigate();

  //메뉴 리스트
  const menuList = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sports",
    "Sale",
    "지속가능성",
  ];

  //로그인 버튼 클릭 시 로그인 화면으로 이동
  const goToLogin = () => {
    if (authenticate === true) {
      setAuthenticate(false);
      navigate("/");
    } else navigate("/login");
  };
  useEffect(() => {
    console.log("menubar logout");
  }, [authenticate]);
  return (
    <div>
      <div>
        <div className="login-container" onClick={() => goToLogin()}>
          <FontAwesomeIcon icon={faUser} />
          <div>{authenticate === true ? "로그인" : "로그아웃"}</div>
        </div>
      </div>
      <div className="menu-logo">
        <img
          width={200}
          src="https://www.hm.com/entrance/assets/bundle/img/HM-Share-Image.jpg"
        />
      </div>
      <div className="menu-area">
        <ul className="menubar">
          {menuList.map((item) => (
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
        <div className="search-area">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <input type="text" placeholder="제품검색" />
        </div>
      </div>
    </div>
  );
};

export default Menubar;
