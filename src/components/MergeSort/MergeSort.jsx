import React, { Component } from "react";
import { Pseudocode, Bar } from "components";
import "./styles.css";

// icons
import Play from "@mui/icons-material/PlayCircleFilledRounded";
import Forward from "@mui/icons-material/SkipNextRounded";
import Backward from "@mui/icons-material/SkipPreviousRounded";
import RotateLeft from "@mui/icons-material/RotateLeft";

class MergeSort extends Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    count: 20,
    delay: 500,
    algorithm: "MergeSort",
    timeouts: [],
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateRandomArray = () => {
    const count = this.state.count;
    const temp = [];

    for (let i = 0; i < count; ++i) {
      temp.push(this.generateRandomNumber(50, 200));
    }

    this.setState({
      array: temp,
      arraySteps: [temp],
    });
  };

  render() {
    let bars = this.state.array.map((val, index) => (
      <Bar key={index} index={index} length={val} color={0} />
    ));
    return (
      <div className="ms-wrapper">
        <div className="ms-canvas">
          <div className="ms-bars-wrapper">{bars}</div>
        </div>
        <div className="ms-control-panel"></div>
      </div>
    );
  }
}

export default MergeSort;
