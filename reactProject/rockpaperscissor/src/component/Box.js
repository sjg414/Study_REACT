//Box 컴포넌트
import React from "react";

const Box = (props) => {
  console.log("props", props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img} />{" "}
      {/* 초기값이 null이고, 콜백함수를 통해 값이 변할 경우 오류 방지를 위해 false 가드를 넣어준다. */}
      <h2>WIN</h2>
    </div>
  );
};

export default Box;
