import React, { useState, useEffect, Component } from "react";
import { Pseudocode } from "components";
import Dot from "./Dot";
import "./styles.css";

const util = require("utils/NumberUtils");
const CANVAS_DIMEN = 300;
const ANIMATION_DELAY = 100;

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

  generateRandomDots = (n = 10) => {
    this.setState({ dots: [] });
    let newDots = [];

    for (let i = 0; i < n; ++i) {
      newDots[i] = {
        id: i,
        y: Math.random() * 0.75 * CANVAS_DIMEN,
        x: Math.random() * 0.75 * CANVAS_DIMEN,
        color: "darkgray",
      };
    }

    return newDots;
  };

  animateDots = (newDots) => {
    this.setState({ dots: [] });
    let delay = 0;
    newDots.forEach((dot) => {
      setTimeout(() => {
        this.setState((prevState) => ({
          dots: [...prevState.dots, dot],
        }));
      }, delay);
      delay += ANIMATION_DELAY;
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
        const dist = Math.sqrt(
          (Points[i].x - Points[j].x) * (Points[i].x - Points[j].x) +
            (Points[i].y - Points[j].y) * (Points[i].y - Points[j].y)
        );
        if (dist < minDist) {
          minDist = dist;
          minPair = [i, j];
        }
      }
    }
    return minPair;
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
          <div className="cp-buttons-wrapper">
            <button onClick={() => this.animateDots(this.generateRandomDots())}>
              Make Dots
            </button>
            <button
              onClick={() => {
                console.log(dots);
                let newDots = [...dots];
                let pair = this.naive(dots);
                newDots[0].color = "blue";
                newDots[1].color = "blue";
                console.log(pair);
                this.setState({
                  dots: newDots,
                });
              }}
            >
              NaiveClosestPair
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClosestPair;
