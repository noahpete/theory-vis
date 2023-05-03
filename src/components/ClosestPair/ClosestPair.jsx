import React, { useState, useEffect, Component } from "react";
import { Pseudocode } from "components";
import Dot from "./Dot";
import "./styles.css";

const CANVAS_DIMEN = 300;
const ANIMATION_DELAY = 100;

class ClosestPair extends Component {
  state = {
    dots: [],
    curStep: 0,
    count: 10,
    stopAnimation: false,
    lineCoords: { x1: 0, y1: 0, x2: 0, y2: 0 },
  };

  componentDidMount() {
    this.generateRandomDots();
  }

  generateRandomDots = (n = 10) => {
    this.setState({ dots: [], seed: Math.random() });
    this.drawLine({ x: 0, y: 0 }, { x: 0, y: 0 });
    let newDots = [];
    for (let i = 0; i < n; ++i) {
      newDots[i] = {
        id: i,
        y: Math.random() * 0.95 * CANVAS_DIMEN + 2,
        x: Math.random() * 0.95 * CANVAS_DIMEN + 2,
        color: "darkgray",
        visited: false,
      };
    }
    return newDots;
  };

  animateDots = async (newDots) => {
    this.setState({ dots: [], stopAnimation: true });
    let delay = 0;
    for (const dot of newDots) {
      await new Promise((resolve) => setTimeout(resolve, delay));
      this.setState((prevState) => ({
        dots: [...prevState.dots, dot],
      }));
      // delay += ANIMATION_DELAY;
    }
    this.setState({ stopAnimation: false });
  };

  visitDot = (dotIdx) => {
    this.setState((prevState) => {
      const updatedDots = [...prevState.dots];
      updatedDots[dotIdx] = {
        x: prevState.dots[dotIdx].x,
        y: prevState.dots[dotIdx].y,
        visited: true,
      };
      return { dots: updatedDots };
    });
  };

  bestDot = (dotIdx) => {
    this.setState((prevState) => {
      const updatedDots = [...prevState.dots];
      updatedDots[dotIdx] = {
        x: prevState.dots[dotIdx].x,
        y: prevState.dots[dotIdx].y,
        isBest: true,
      };
      return { dots: updatedDots };
    });
  };

  doiDot = (dotIdx) => {
    this.setState((prevState) => {
      const updatedDots = [...prevState.dots];
      updatedDots[dotIdx] = {
        x: prevState.dots[dotIdx].x,
        y: prevState.dots[dotIdx].y,
        doi: !prevState.dots[dotIdx].doi,
      };
      return { dots: updatedDots };
    });
  };

  drawLine = (dot1, dot2) => {
    const { x: x1, y: y1 } = dot1;
    const { x: x2, y: y2 } = dot2;
    this.setState({ lineCoords: { x1, y1, x2, y2 } });
  };

  animateAlgorithm = (log) => {
    console.log(this.state.stopAnimation);
    let i = 0;
    const origSeed = this.state.seed;
    const animate = () => {
      if (i < log.length) {
        if (this.state.stopAnimation || this.state.seed != origSeed) {
          return;
        }
        const elt = log[i];
        switch (elt.action) {
          case "doi":
            this.doiDot(elt.dotIdx);
            break;
          case "best":
            this.bestDot(elt.dotIdx);
            break;
          case "visit":
            this.visitDot(elt.dotIdx);
            break;
          case "line":
            this.drawLine(
              this.state.dots[elt.dot1Idx],
              this.state.dots[elt.dot2Idx]
            );
            break;
          default:
            break;
        }
        i++;
        setTimeout(animate, 500);
      }
    };
    animate();
  };

  // algorithms
  naive = () => {
    console.log("naive");
    const log = [];
    let dMin = Infinity;
    for (let i = 0; i < this.state.dots.length; i++) {
      const curState = {
        v: this.state.dots[i].visited,
        b: this.state.dots[i].isBest,
        i: this.state.dots[i].doi,
      };
      log.push({
        dotIdx: i,
        action: "doi",
      });
      let isMin = false;
      for (let j = i + 1; j < this.state.dots.length; j++) {
        log.push({
          dot1Idx: i,
          dot2Idx: j,
          action: "line",
        });
        const dx = Math.pow(this.state.dots[i].x - this.state.dots[j].x, 2);
        const dy = Math.pow(this.state.dots[i].y - this.state.dots[j].y, 2);
        const dist = Math.sqrt(dx + dy);
        if (dist < dMin) {
          isMin = true;
          log.push({
            dotIdx: i,
            action: "best",
          });
          log.push({
            dotIdx: j,
            action: "best",
          });
          dMin = dist;
        }
      }
      log.push({
        dotIdx: i,
        action: curState.b || isMin ? "best" : "visit",
      });
    }
    this.animateAlgorithm(log);
  };

  render() {
    let dots = this.state.dots.map((dot, index) => (
      <Dot
        key={index}
        x={dot.x}
        y={dot.y}
        visited={dot.visited}
        isBest={dot.isBest}
        doi={dot.doi}
      />
    ));

    console.log(this.state.lineCoords);

    return (
      <div className="closest-pair">
        <div className="cp-wrapper">
          <div className="cp-pseudocode">
            <Pseudocode />
          </div>
          <div className="cp-canvas">
            {dots}
            <svg width={CANVAS_DIMEN} height={CANVAS_DIMEN}>
              <line
                x1={this.state.lineCoords.x1}
                y1={this.state.lineCoords.y1}
                x2={this.state.lineCoords.x2}
                y2={this.state.lineCoords.y2}
                stroke="red"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="cp-controls">
          <div className="cp-buttons-wrapper">
            <button onClick={() => this.animateDots(this.generateRandomDots())}>
              Make Dots
            </button>
            <button onClick={() => this.naive()}>NaiveClosestPair</button>
            <button onClick={() => this.visitDot(0)}>Make dot 0 blue</button>
            <button onClick={() => this.bestDot(0)}>Make dot 0 best</button>
            <button onClick={() => this.doiDot(0)}>Make dot 0 doi</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ClosestPair;
