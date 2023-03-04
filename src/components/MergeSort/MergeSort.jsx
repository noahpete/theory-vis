import React, { Component } from "react";
import { Pseudocode, Bar } from "components";
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

    this.setState({
      array: temp,
      arraySteps: [temp],
    });
  }

  render() {
    let bars = this.state.array.map((val, index) => {
      return (
        <Bar
          key={index}
          index={index}
          length={val}
          color={this.state.colorKey[index]}
        />
      );
    });
    return <div className="ms-wrapper">{bars}</div>;
  }
}

export default MergeSort;
