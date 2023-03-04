import React, { Component } from "react";
import "./styles.css";

class MergeSort extends Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    curStep: 0,
    count: 0,
    delay: 100,
    algorithm: "",
    timeouts: [],
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateRandomArray() {
    const count = this.state.count;
    const temp = [];

    for (let i = 0; i < count; ++i) {
      temp.push(this.generateRandomNumber(50, 200));
    }

    console.log(temp);
  }

  render() {
    return <div className="ms-wrapper"></div>;
  }
}

export default MergeSort;
