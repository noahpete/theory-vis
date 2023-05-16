import React, { useState, useEffect, useRef } from "react";
import { useInterval } from "react-use";
import { select } from "d3";
import "./styles.css";

const ClosestPair = () => {
  const svgRef = useRef();
  const canvasRef = useRef();
  const dimensions = { width: 320, height: 320 };
  const [dots, setDots] = useState();
  const [isAnimating, setIsAnimating] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [steps, setSteps] = useState([]);
  const BEST_COLOR = "yellow";

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dots) return;

    // draw circles
    svg
      .selectAll(".dot")
      .data(dots, (dot) => dot.id)
      .join("circle")
      .attr("class", "dot")
      .attr("cx", (dot) => dot.x)
      .attr("cy", (dot) => dot.y)
      .transition()
      .attr("r", 5)
      .attr("fill", (dot) => dot.color);
  }, [dots]);

  useInterval(() => {
    if (iteration >= steps.length) return;

    const dotId = steps[iteration].dotId;
    if (isAnimating) {
      if (dotId === "all") {
        for (let i = 0; i < dots.length; i++) {
          if (dots[i].color !== BEST_COLOR) {
            colorDot(i, steps[iteration].color);
          }
        }
      } else {
        if (dots[dotId].color !== BEST_COLOR) {
          colorDot(dotId, steps[iteration].color);
        }
      }
    }
    setIteration(iteration + 1);
  }, 500);

  function generateRandomDots(n = 10) {
    setDots([]);
    setSteps([]);
    let newDots = [];
    for (let i = 0; i < n; ++i) {
      newDots[i] = {
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        color: "darkgray",
      };
    }
    setDots(newDots);
  }

  function colorDot(dotId, color) {
    setDots((prevDots) =>
      prevDots.map((dot) => {
        if (dot.id === dotId) {
          dot.color = color;
          return {
            ...dot,
            color: color,
          };
        }
        return dot;
      })
    );
    // dot = dots.filter((dot) => dot.color === color);
  }

  function naiveClosestPair() {
    setIsAnimating(false);
    let newSteps = [];

    let dMin = Infinity;
    for (let i = 0; i < dots.length; i++) {
      newSteps.push({
        dotId: "all",
        color: "darkgray",
      });
      newSteps.push({
        dotId: i,
        color: "blue",
      });
      for (let j = i + 1; j < dots.length; j++) {
        newSteps.push({
          dotId: j,
          color: "red",
        });
        const dx = Math.pow(dots[i].x - dots[j].x, 2);
        const dy = Math.pow(dots[i].y - dots[j].y, 2);
        const dist = Math.sqrt(dx + dy);
        if (dist < dMin) {
          newSteps.push({
            dotId: j,
            color: BEST_COLOR,
          });
          dMin = dist;
        }
      }
    }

    setSteps(newSteps);
    console.log(newSteps);
    // reset animate properties
    setIteration(0);
    setIsAnimating(true);
  }

  return (
    <div className="closest-pair">
      <div className="cp-wrapper">
        <div className="cp-pseudocode"></div>
        <div className="cp-canvas" ref={canvasRef}>
          <svg ref={svgRef} style={{ width: 320, height: 320 }}></svg>
        </div>
      </div>
      <div className="cp-controls">
        <div className="cp-buttons-wrapper">
          <button onClick={() => generateRandomDots(10)}>Make Dots</button>
          <button onClick={() => naiveClosestPair()}>NaiveClosestPair</button>
        </div>
      </div>
    </div>
  );
};

export default ClosestPair;
