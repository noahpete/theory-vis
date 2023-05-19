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
  const [dur, setDur] = useState(ANIMATION_DURATION);

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
      setDur(ANIMATION_DURATION);
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
          highlightCode(cur.action);
          break;
        case "end":
          highlightCode(cur.action);
          setIsAnimating(false);
        default:
          break;
      }
    } else if (algo === "dc") {
      setDur(ANIMATION_DURATION * 1.2);
      switch (cur.action) {
        case "setM":
          highlightCode("letm");
          select(svgRef.current)
            .append("line")
            .attr("x1", cur.m)
            .attr("y1", DIMENSIONS.height / 2)
            .attr("x2", cur.m)
            .attr("y2", DIMENSIONS.height / 2)
            .lower()
            .transition()
            .duration(500)
            .attr("y1", 0)
            .attr("y2", DIMENSIONS.height)
            .style("stroke", "black");
          break;
        case "selectLeft":
          highlightCode("letL");
          select(svgRef.current)
            .append("rect")
            .attr("x", 0)
            .attr("y", 0)
            .attr("width", cur.m)
            .attr("height", DIMENSIONS.height)
            .attr("fill", HIGHLIGHT_COLOR)
            .attr("opacity", 0)
            .lower()
            .transition()
            .duration(150)
            .attr("opacity", 1)
            .transition()
            .duration(350)
            .attr("opacity", 0);
          break;
        case "selectRight":
          highlightCode("letR");
          select(svgRef.current)
            .append("rect")
            .attr("x", cur.m)
            .attr("y", 0)
            .attr("width", DIMENSIONS.height - cur.m)
            .attr("height", DIMENSIONS.height)
            .attr("fill", HIGHLIGHT_COLOR)
            .attr("opacity", 0)
            .lower()
            .transition()
            .duration(150)
            .attr("opacity", 1)
            .transition()
            .duration(350)
            .attr("opacity", 0);
          break;
        case "drawLine":
          highlightCode(cur.code);
          if (cur.pair.length > 0) drawLine(cur.pair[0], cur.pair[1]);
          break;
        case "highlightLine":
          highlightCode(cur.code);
          highlightLine(cur.pair[0], cur.pair[1], "blue");
          break;
        case "showDelta":
          highlightCode(cur.code);
          select(`[id='${cur.pair[0].id}${cur.pair[1].id}'`)
            .clone()
            .raise()
            .transition()
            .duration(1000)
            .style("stroke", "darkgray")
            .attr("x1", cur.m)
            .attr("y1", DIMENSIONS.height / 2)
            .attr("x2", cur.m - cur.dist)
            .attr("y2", DIMENSIONS.height / 2)
            .transition()
            .duration(500)
            .style("opacity", 0);
          break;
        case "showStrip":
          highlightCode("minStrip");
          select(svgRef.current)
            .append("rect")
            .lower()
            .attr("id", "temp")
            .attr("x", cur.m)
            .attr("y", 0)
            .attr("width", 0)
            .attr("height", DIMENSIONS.height)
            .style("fill", "white")
            .transition()
            .duration(500)
            .attr("x", cur.m - cur.delta)
            .attr("width", 2 * cur.delta)
            .style("fill", HIGHLIGHT_COLOR);
          select(svgRef.current)
            .append("text")
            .text("δ")
            .attr("id", "temp")
            .attr("x", cur.m)
            .attr("y", 25)
            .attr("opacity", 0)
            .transition()
            .duration(500)
            .attr("x", cur.m - (cur.delta / 2 + 5))
            .attr("opacity", 1);
          select(svgRef.current)
            .append("text")
            .text("δ")
            .attr("id", "temp")
            .attr("x", cur.m)
            .attr("y", 25)
            .attr("opacity", 0)
            .transition()
            .duration(500)
            .attr("x", cur.m + (cur.delta / 2 - 5))
            .attr("opacity", 1);
          break;
        case "pair7":
          highlightCode(cur.code);
          let dots = selectAll(".dot").filter(function (d) {
            var x = select(this).attr("cx");
            return x >= cur.m - cur.delta && x <= cur.m + cur.delta;
          });
          dots = dots._groups[0];
          if (dots.length > 1) {
            for (let i = 0; i < dots.length; ++i) {
              for (let j = i + 1; j < dots.length; ++j) {
                drawLine(
                  {
                    id: dots[i].getAttribute("id"),
                    x: dots[i].getAttribute("cx"),
                    y: dots[i].getAttribute("cy"),
                  },
                  {
                    id: dots[j].getAttribute("id"),
                    x: dots[j].getAttribute("cx"),
                    y: dots[j].getAttribute("cy"),
                  },
                  "black",
                  "raise"
                );
              }
            }
            selectAll(".dot").raise();
          }
          break;
        case "best":
          highlightCode(cur.code);
          highlightLine(cur.pair[0], cur.pair[1]);
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
  }, dur + 100);

  const reset = () => {
    setIteration(0);
    setIsAnimating(false);
    setSteps([]);
    setBest(undefined);
    highlightCode("nil");
    selectAll("#temp").remove();
    selectAll(".dot").style("stroke", "black");
    selectAll("line").remove();
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

  const drawLine = (p1, p2, color = "black", depth = "lower") => {
    const line = select(svgRef.current)
      .append("line")
      .attr("id", `${p1.id}${p2.id}`)
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

    if (depth === "raise") {
      const svgNode = svgRef.current;
      const lineNode = line.node();
      svgNode.appendChild(lineNode); // Move line to the end of the SVG
    } else if (depth === "lower") {
      const svgNode = svgRef.current;
      const firstChild = svgNode.firstChild;
      const lineNode = line.node();
      svgNode.insertBefore(lineNode, firstChild); // Move line to the beginning of the SVG
    }
  };

  const highlightLine = (p1, p2, color = BEST_COLOR) => {
    select(svgRef.current)
      .selectAll("line[id='" + `${p1.id}${p2.id}` + "']")
      .transition()
      .duration(100)
      .style("stroke", color)
      .style("stroke-width", "5px")
      .transition()
      .ease(easeLinear)
      .duration(100)
      .style("stroke-width", "3px")
      .on("end", () => {
        select(svgRef.current)
          .selectAll(`circle[id='${p1.id}'], circle[id='${p2.id}']`)
          .raise()
          .transition()
          .style("stroke", color);
      });
  };

  const highlightCode = (id) => {
    selectAll(".cp-pseudo-line").style("background-color", "white");
    selectAll(`#${id}`).style("background-color", HIGHLIGHT_COLOR);
  };

  const naiveClosestPair = (points) => {
    reset();
    setAlgo("naive");
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
    reset();
    setAlgo("dc");
    let newSteps = [];

    let m = getMedianXCoord(points);
    newSteps.push({ action: "setM", m: m });

    let l = getPointsLeftOf(points, m);
    let r = getPointsRightOf(points, m);
    newSteps.push({ action: "selectLeft", m: m, left: l });
    newSteps.push({ action: "selectRight", m: m, right: r });

    let lPts = dcUtil(l);
    let rPts = dcUtil(r);
    newSteps.push({ action: "drawLine", code: "l1l2", pair: lPts });
    newSteps.push({ action: "drawLine", code: "r1r2", pair: rPts });

    let deltaL = Math.abs(dist(lPts[0], lPts[1]));
    let deltaR = Math.abs(dist(rPts[0], rPts[1]));
    let delta = Math.min(deltaL, deltaR);
    newSteps.push({ action: "highlightLine", code: "dL", pair: lPts });
    newSteps.push({ action: "highlightLine", code: "dR", pair: rPts });

    if (deltaL < deltaR)
      newSteps.push({
        action: "showDelta",
        code: "delta",
        m: m,
        dist: deltaL,
        pair: lPts,
      });
    else
      newSteps.push({
        action: "showDelta",
        code: "delta",
        m: m,
        dist: deltaR,
        pair: rPts,
      });

    let strip = getPointsInDeltaStrip(points, m, delta);
    newSteps.push({ action: "showStrip", pts: strip, m: m, delta: delta });

    let minFromStrip = bruteForceCP(strip);
    newSteps.push({
      action: "pair7",
      code: "pair7",
      m: m,
      delta: delta,
      pair: minFromStrip,
    });

    const closest = getClosestPairInSet([lPts, rPts, minFromStrip]);
    newSteps.push({ action: "best", code: "best", pair: closest });
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
          {/* <form>
            <option value="Brute Force (Naive)"></option>
            <option value="Divide and Conquer"></option>
          </form> */}
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
