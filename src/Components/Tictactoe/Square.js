import React, { Component } from "react";

export default class Square extends Component {
  render() {
    return (
      <div style={{marginLeft:"50%",marginRight:"Auto"}}>
      <button className="square" onClick={this.props.onClick}>
        {this.props.value}
      </button>
      </div>
    );
  }
}
