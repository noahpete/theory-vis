import React, { useState, useEffect, Component } from "react";
import { Pseudocode } from "components";
import Dot from "./Dot";
import "./styles.css";

const util = require("utils/NumberUtils");

const COLORS = {
  red: "#EF233C",
  yellow: "#FFBE0B",
  blue: "#3A86FF",
};

class ClosestPair extends Component {
  state = {
    dots: [],
    dotsSteps: [],
    colorKey: [],
    colorSteps: [],
    curStep: 0,
    count: 10,
    delay: 100,
    algorithm: "",
    timeouts: [],
  };

  componentDidMount() {
    this.generateRandomDots();
  }

  generateRandomDots = () => {
    const count = this.state.count;
    const temp = [];

    for (let i = 0; i < count; ++i) {
      temp.push({
        x: util.generateRandomNumber(0, 300),
        y: util.generateRandomNumber(0, 300),
        color: "darkgray",
      });
    }

    this.setState({
      dots: temp,
      dotsSteps: [temp],
      curStep: 0,
    });
  };

  changeDots = (index, dot) => {
    let temp = this.state.dots;
    temp[index] = dot;
    this.setState({
      dots: temp,
      dotsSteps: [temp],
      curStep: 0,
    });
  };

  naive = (Points) => {
    let minDist = Infinity;
    let minPair = [];

    for (let i = 0; i < Points.length; ++i) {
      for (let j = i + 1; j < Points.length; ++j) {
        if (util.dist(Points[i], Points[j]) < minDist) {
          minDist = util.dist(Points[i], Points[j]);
          minPair = [i, j];
        }
      }
    }
  };

  render() {
    let dots = this.state.dots.map((dot, index) => (
      <Dot key={index} x={dot.x} y={dot.y} color={dot.color} />
    ));

    return (
      <div className="closest-pair">
        <div className="cp-wrapper">
          <div className="cp-pseudocode">
            <Pseudocode />
          </div>
          <div className="cp-canvas">{dots}</div>
        </div>
        <div className="cp-controls">
          <button onClick={() => this.generateRandomDots()}>Make Dots</button>
          <button>NaiveClosestPair</button>
        </div>
      </div>
    );
  }
}

export default ClosestPair;
