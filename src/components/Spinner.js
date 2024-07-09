import React, { Component } from "react";
import spinner from "./spinner.gif";

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center align-middle">
        <img src={spinner} alt="loading"></img>
      </div>
    );
  }
}

export default Spinner;
