import React, { useState, useEffect, useRef } from "react";
import { useInterval } from "react-use";
import { select, selectAll, easeLinear } from "d3";
import {
  dist,
  getMedianXCoord,
  getPointsLeftOf,
  getPointsRightOf,
  getPointsInDeltaStrip,
  bruteForceCP,
  minPtFromStrip,
  getClosestPairInSet,
} from "./DivideConquerCP";
import Pseudocode from "./Pseudocode";
import "./styles.css";

const DIMENSIONS = { width: 320, height: 320 };
const BEST_COLOR = "red";
const HIGHLIGHT_COLOR = "rgb(184, 218, 255)";
const ANIMATION_DURATION = 500;

const ClosestPair = () => {
  const svgRef = useRef();
  const canvasRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [dots, setDots] = useState();
  const [steps, setSteps] = useState([]);
  const [best, setBest] = useState();
  const [algo, setAlgo] = useState("dc");

  useEffect(() => {
    const svg = select(svgRef.current);
    if (!dots) return;

    // draw circles
    svg
      .selectAll(".dot")
      .data(dots, (dot) => dot.id)
      .join("circle")
      .raise()
      .attr("class", "dot")
      .attr("id", (dot) => dot.id)
      .attr("stroke", "black")
      .attr("stroke-width", "2px")
      .attr("cx", (dot) => dot.x)
      .attr("cy", (dot) => dot.y)
      .transition()
      .ease(easeLinear)
      .attr("r", 5)
      .attr("fill", "white")
      .attr("stroke", "black");
  }, [dots]);

  useInterval(() => {
    if (!steps[0] || !isAnimating) return;
    const cur = steps[iteration];
    if (algo === "naive") {
      switch (cur.action) {
        case "compare":
          highlightCode(cur.action);
          drawLine(cur.p1, cur.p2);
          break;
        case "best":
          highlightCode(cur.action);
          if (best) {
            select(svgRef.current)
              .selectAll("line[id='" + `${best.id}` + "']")
              .lower()
              .transition()
              .duration(ANIMATION_DURATION)
              .style("stroke", "black")
              .style("stroke-width", "2px");
            select(svgRef.current)
              .selectAll(
                `circle:not([id='${cur.p1.id}']):not([id='${cur.p2.id}'])`
              )
              .transition()
              .duration(10)
              .style("stroke", "black");
          }
          setBest({ id: `${cur.p1.id}${cur.p2.id}`, p1: cur.p1, p2: cur.p2 });
          highlightLine(cur.p1, cur.p2);
          break;
        case "clear":
          select(svgRef.current)
            .selectAll(`line:not([id="${best.id}"])`)
            .transition()
            .duration(ANIMATION_DURATION)
            .style("opacity", "0.1");
          break;
        case "minequalsinf":
        case "forp1":
        case "forp2":
        case "end":
          highlightCode(cur.action);
          setIsAnimating(false);
          break;
        default:
          break;
      }
    } else if (algo === "dc") {
      console.log(cur);
      switch (cur.action) {
        case "setM":
          break;

        case "end":
          setIsAnimating(false);
          break;

        default:
          // setIsAnimating(false);
          break;
      }
    }

    setIteration(iteration + 1);
  }, ANIMATION_DURATION + 100);

  const reset = () => {
    setIteration(0);
    setIsAnimating(false);
    setSteps([]);
    setBest(undefined);
    highlightCode("nil");
  };

  const generateRandomDots = (n = 10) => {
    reset();
    setDots([]);
    let newDots = [];
    for (let i = 0; i < n; ++i) {
      newDots[i] = {
        id: i,
        x: Math.round(Math.random() * DIMENSIONS.width),
        y: Math.round(Math.random() * DIMENSIONS.height),
      };
    }
    setDots(newDots);
    select(svgRef.current).selectAll("line").remove();
    select(svgRef.current).selectAll("circle").style("stroke", "black");
  };

  const drawLine = (p1, p2, color = "black") => {
    select(svgRef.current)
      .append("line")
      .attr("id", `${p1.id}${p2.id}`)
      .lower()
      .attr("x1", p1.x)
      .attr("y1", p1.y)
      .attr("x2", p1.x)
      .attr("y2", p1.y)
      .style("stroke", color)
      .style("stroke-width", "2px")
      .style("opacity", "100%")
      .transition()
      .duration(ANIMATION_DURATION)
      .attr("x2", p2.x)
      .attr("y2", p2.y);
  };

  const highlightLine = (p1, p2) => {
    select(svgRef.current)
      .selectAll("line[id='" + `${p1.id}${p2.id}` + "']")
      .transition()
      .duration(100)
      .style("stroke", BEST_COLOR)
      .style("stroke-width", "5px")
      .transition()
      .ease(easeLinear)
      .duration(100)
      .style("stroke-width", "3px")
      .on("end", () => {
        select(svgRef.current)
          .selectAll(`circle[id='${p1.id}'], circle[id='${p2.id}']`)
          .transition()
          .style("stroke", "red");
      });
  };

  const highlightCode = (id) => {
    selectAll(".cp-pseudo-line").style("background-color", "white");
    selectAll(`#${id}`).style("background-color", HIGHLIGHT_COLOR);
  };

  const naiveClosestPair = (points) => {
    if (!isAnimating && algo === "naive") reset();
    let newSteps = [];
    let dMin = Infinity;
    newSteps.push({
      action: "minequalsinf",
    });
    for (let i = 0; i < points.length; i++) {
      newSteps.push({
        action: "forp1",
      });
      for (let j = 0; j < points.length; j++) {
        if (i === j) continue;
        newSteps.push({
          action: "forp2",
        });
        newSteps.push({
          p1: points[i],
          p2: points[j],
          action: "compare",
        });
        const dist = Math.sqrt(
          Math.pow(points[i].x - points[j].x, 2) +
            Math.pow(points[i].y - points[j].y, 2)
        );
        if (dist < dMin) {
          dMin = dist;
          newSteps.push({
            p1: points[i],
            p2: points[j],
            action: "best",
          });
        }
      }
      newSteps.push({ action: "clear" });
    }
    newSteps.push({ action: "end" });
    setSteps(newSteps);
    setIsAnimating(true);
  };

  const dcUtil = (points) => {
    // let m = getMedianXCoord(points);
    // let l = getPointsLeftOf(points, m);
    // let r = getPointsRightOf(points, m);
    // let lPts = dcUtil(l);
    // let rPts = dcUtil(r);
    return bruteForceCP(points);
  };

  const dcClosestPair = (points) => {
    if (!isAnimating && algo === "dc") reset();
    let newSteps = [];

    let m = getMedianXCoord(points);
    newSteps.push({ action: "setM", m: m });

    let l = getPointsLeftOf(points, m);
    let lPts = dcUtil(l);
    newSteps.push({ action: "selectLeft", left: l });
    newSteps.push({ action: "highlightPair", pair: lPts });

    let r = getPointsRightOf(points, m);
    let rPts = dcUtil(r);
    newSteps.push({ action: "selectRight", right: r });
    newSteps.push({ action: "highlightPair", pair: rPts });

    let deltaL = Math.abs(dist(lPts[0], lPts[1]));
    let deltaR = Math.abs(dist(rPts[0], rPts[1]));
    let delta = Math.min(deltaL, deltaR);
    newSteps.push({ action: "showDelta", delta });

    let strip = getPointsInDeltaStrip(points, m, delta);
    newSteps.push({ action: "showStrip", strip });

    let minFromStrip = bruteForceCP(strip);
    newSteps.push({ action: "highlightPair", pair: minFromStrip });

    // const closest = getClosestPairInSet([lPts, rPts, minFromStrip]);
    const closest = [];
    newSteps.push({ action: "highlightPair", pair: closest });
    newSteps.push({ action: "end" });

    setSteps(newSteps);
    setIsAnimating(true);
  };

  return (
    <div className="closest-pair">
      <div className="cp-wrapper">
        <Pseudocode algo={algo}></Pseudocode>
        <div className="cp-canvas" ref={canvasRef}>
          <svg ref={svgRef} style={{ width: 320, height: 320 }}></svg>
        </div>
      </div>
      <div className="cp-controls">
        <div className="cp-buttons-wrapper">
          <button onClick={() => generateRandomDots(10)}>
            Generate Points
          </button>
          <button onClick={() => naiveClosestPair(dots)}>
            NaiveClosestPair
          </button>
          <button onClick={() => dcClosestPair(dots)}>
            DivideConquerClosestPair
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClosestPair;
