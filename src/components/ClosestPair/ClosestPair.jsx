import React, { useState, useEffect, useRef } from "react";
import { sleep } from "utils/utils";
import { useInterval } from "react-use";
import { select, easeLinear } from "d3";
import "./styles.css";

const DIMENSIONS = { width: 320, height: 320 };
const BEST_COLOR = "red";
const HIGHLIGHT_COLOR = "rgb(184, 218, 255)";

const ClosestPair = () => {
  const svgRef = useRef();
  const canvasRef = useRef();
  const [isAnimating, setIsAnimating] = useState(false);
  const [iteration, setIteration] = useState(0);
  const [dots, setDots] = useState();
  const [steps, setSteps] = useState([]);
  const [best, setBest] = useState();

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
    switch (cur.action) {
      case "compare":
        select(`#${cur.action}`)
          .style("background-color", HIGHLIGHT_COLOR)
          .transition()
          .duration(1500)
          .style("background-color", "white");
        drawLine(cur.p1, cur.p2);
        break;
      case "best":
        select(`#${cur.action}`)
          .style("background-color", HIGHLIGHT_COLOR)
          .transition()
          .duration(1500)
          .style("background-color", "white");
        if (best) {
          select(svgRef.current)
            .selectAll("line[id='" + `${best.id}` + "']")
            .lower()
            .transition()
            .duration(500)
            .style("stroke", "black")
            .style("stroke-width", "2px");
          select(svgRef.current)
            .selectAll(
              `circle:not([id='${cur.p1.id}']):not([id='${cur.p2.id}'])`
            )
            .transition()
            .duration(100)
            .style("stroke", "black");
        }
        setBest({ id: `${cur.p1.id}${cur.p2.id}`, p1: cur.p1, p2: cur.p2 });
        highlightLine(cur.p1, cur.p2);
        break;
      case "clear":
        select(svgRef.current)
          .selectAll(`line:not([id="${best.id}"])`)
          .transition()
          .duration(500)
          .style("opacity", "0.1");
        break;
      case "minequalsinf":
      case "forp1":
      case "forp2":
        // select("cp-pseudo-line")
        //   .style("background-color", "#FFF")
        //   .transition()
        //   .duration(500);
        select(`#${cur.action}`)
          .style("background-color", HIGHLIGHT_COLOR)
          .transition()
          .duration(1500)
          .style("background-color", "white");

      default:
        break;
    }

    setIteration(iteration + 1);
  }, 600);

  const generateRandomDots = (n = 10) => {
    setIsAnimating(false);
    setIteration(0);
    setSteps([]);
    setBest(undefined);
    setDots([]);
    let newDots = [];
    for (let i = 0; i < n; ++i) {
      newDots[i] = {
        id: i,
        x: Math.round(Math.random() * DIMENSIONS.width),
        y: Math.round(Math.random() * DIMENSIONS.height),
        color: "black",
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
      .duration(500)
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
          .duration(100)
          .style("stroke", "red");
      });
  };

  const naiveClosestPair = async () => {
    let newSteps = [];
    let dMin = Infinity;

    newSteps.push({
      action: "minequalsinf",
    });

    for (let i = 0; i < dots.length; i++) {
      newSteps.push({
        action: "forp1",
      });

      for (let j = 0; j < dots.length; j++) {
        if (i === j) continue;
        newSteps.push({
          action: "forp2",
        });

        newSteps.push({
          p1: dots[i],
          p2: dots[j],
          action: "compare",
        });

        const dist = Math.sqrt(
          Math.pow(dots[i].x - dots[j].x, 2) +
            Math.pow(dots[i].y - dots[j].y, 2)
        );
        if (dist < dMin) {
          dMin = dist;

          newSteps.push({
            p1: dots[i],
            p2: dots[j],
            action: "best",
          });
        }
      }
      newSteps.push({
        action: "clear",
      });
    }
    setIsAnimating(true);
    setSteps(newSteps);
  };

  return (
    <div className="closest-pair">
      <div className="cp-wrapper">
        <div className="cp-pseudocode">
          <div className="cp-pseudo-line">
            <p>NaiveClosestPair(points):</p>
          </div>
          <div id="minequalsinf" className="cp-pseudo-line">
            <p>&emsp;min := &infin;</p>
          </div>
          <div id="forp1" className="cp-pseudo-line">
            <p>&emsp;for each point, p1, in points:</p>
          </div>
          <div id="forp2" className="cp-pseudo-line">
            <p>&emsp;&emsp;for each other point, p2, in points:</p>
          </div>
          <div id="compare" className="cp-pseudo-line">
            <p>&emsp;&emsp;&emsp;if distance between p1 and p2 &lt; min:</p>
          </div>
          <div id="best" className="cp-pseudo-line">
            <p>&emsp;&emsp;&emsp;&emsp;min = distance between p1 and p2</p>
          </div>
          <div id="best" className="cp-pseudo-line">
            <p>&emsp;&emsp;&emsp;&emsp;bestPair = (p1, p2)</p>
          </div>
          <div id="end" className="cp-pseudo-line">
            <p>&emsp;return bestPair</p>
          </div>
        </div>
        <div className="cp-canvas" ref={canvasRef}>
          <svg ref={svgRef} style={{ width: 320, height: 320 }}></svg>
        </div>
      </div>
      <div className="cp-controls">
        <div className="cp-buttons-wrapper">
          <button onClick={() => generateRandomDots(10)}>
            Generate Points
          </button>
          <button onClick={() => naiveClosestPair()}>NaiveClosestPair</button>
        </div>
      </div>
    </div>
  );
};

export default ClosestPair;
