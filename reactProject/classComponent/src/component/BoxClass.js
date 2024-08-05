import React, { Component } from "react";

export default class BoxClass extends Component {
  render() {
    return <div>box{this.props.num}</div>;
  }
}
