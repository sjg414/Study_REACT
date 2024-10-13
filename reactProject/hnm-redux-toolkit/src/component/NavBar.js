import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authenticateAction } from "../redux/actions/authenticateAction";

const NavBar = () => {
  const authentication = useSelector((state) => state.auth.authenticate); //인증 상태 가져오기
  const dispatch = useDispatch();
  const [loginText, setLoginText] = useState("로그인");
  const [display, setDisplay] = useState("none");
  const navigate = useNavigate();
  const menuItem = [
    "Women",
    "Men",
    "Baby",
    "Kids",
    "H&M HOME",
    "Sport",
    "Sale",
    "지속가능성",
  ];

  const goToHome = () => {
    navigate("/");
  };
  const goToLogin = () => {
    if (authentication) {
      setLoginText("로그인");
      dispatch(authenticateAction.logout()); //logout 처리 미들웨어로 넘기기
    } else navigate("/login");
  };

  const searchProduct = (event) => {
    if (event.key === "Enter") {
      let keyword = event.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  useEffect(() => {
    if (authentication) {
      setLoginText("로그아웃");
    }
  }, [authentication]);

  return (
    <div className="NavBar">
      <div className="NavBar-top">
        <div className="sideMenu hide">
          <div className="sideBtn">
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => {
                setDisplay("");
              }}
            />
          </div>
          <div className="sideMenu-area" style={{ display: `${display}` }}>
            <div className="sideMenu-button">
              {menuItem.map((item) => (
                <button>{item}</button>
              ))}
            </div>
            <div className="sideExit">
              <FontAwesomeIcon
                icon={faTimes}
                onClick={() => {
                  setDisplay("none");
                }}
              />
            </div>
          </div>
        </div>
        <div className="logo-area" onClick={goToHome}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png"
            alt=""
          />
        </div>
        <div className="login-area" onClick={goToLogin}>
          <FontAwesomeIcon icon={faUser} />
          {loginText}
        </div>
      </div>
      <div className="NavBar-Bottom">
        <div className="menuList">
          {menuItem.map((item) => (
            <button>{item}</button>
          ))}
        </div>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input
            type="text"
            placeholder="제품검색"
            onKeyDown={(event) => {
              searchProduct(event);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
