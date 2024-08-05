//Box Class Component
import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    let result = "";

    //Computer의 결과는 user의 반대
    if (
      this.props.title === "Computer" &&
      this.props.result !== "tie" &&
      this.props.result !== ""
    )
      result = this.props.result === "win" ? "lose" : "win";
    else result = this.props.result;

    return (
      <div className={`box ${result}`}>
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img}
          alt="item-img"
        />
        {/* 초기값이 null이고, 콜백함수를 통해 값이 변할 경우 오류 방지를 위해 false 가드를 넣어준다. */}
        <h2>{result}</h2>
      </div>
    );
  }
}
