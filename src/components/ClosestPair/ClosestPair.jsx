import React, { useState, useEffect, useRef } from "react";
import { useInterval } from "react-use";
import { select, easeLinear } from "d3";
import "./styles.css";

const ClosestPair = () => {
  const svgRef = useRef();
  const canvasRef = useRef();
  const dimensions = { width: 320, height: 320 };
  const [dots, setDots] = useState();
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
      .ease(easeLinear)
      .delay((d, i) => i * 50)
      .attr("r", 5)
      .attr("fill", (dot) => dot.color);
  }, [dots]);

  const generateRandomDots = (n = 10) => {
    select(svgRef.current).selectAll("line").remove();
    setDots([]);
    let newDots = [];
    for (let i = 0; i < n; ++i) {
      newDots[i] = {
        id: i,
        x: Math.random() * dimensions.width,
        y: Math.random() * dimensions.height,
        color: "black",
      };
    }
    setDots(newDots);
  };

  const drawLine = (p1, p2, delay = 0, color = "black") => {
    select(svgRef.current)
      .append("line")
      .attr("id", `${p1.x}-${p1.y}-${p2.x}-${p2.y}`)
      .attr("x1", p1.x)
      .attr("y1", p1.y)
      .attr("x2", p1.x)
      .attr("y2", p1.y)
      .transition()
      .duration(500)
      .delay(delay)
      .attr("x2", p2.x)
      .attr("y2", p2.y)
      .style("stroke", color);
  };

  const undrawLine = (id, delay) => {
    const coords = id.split("-");
    const dot1 = {
      x: coords[0],
      y: coords[1],
    };
    const dot2 = {
      x: coords[2],
      y: coords[3],
    };
    select(svgRef.current)
      .select(id)
      .attr("x2", dot2.x)
      .attr("y2", dot2.y)
      .transition()
      .duration(500)
      .delay(delay)
      .attr("X2", dot1.x)
      .attr("y2", dot1.y);
  };

  const naiveClosestPair = () => {
    select(svgRef.current).selectAll("line").remove();
    let skipCount = 0;
    let bestCount = 0;
    let dMin = Infinity;
    let bestId = "";
    for (let i = 0; i < dots.length; i++) {
      for (let j = 0; j < dots.length; j++) {
        if (i === j) {
          skipCount += 1;
          continue;
        }
        const dot1 = {
          x: dots[i].x,
          y: dots[i].y,
        };
        const dot2 = {
          x: dots[j].x,
          y: dots[j].y,
        };
        console.log(j + i * dots.length, dot1, dot2);
        const dx = Math.pow(dot1.x - dot2.x, 2);
        const dy = Math.pow(dot1.y - dot2.y, 2);
        const dist = Math.sqrt(dx + dy);
        if (dist < dMin) {
          dMin = dist;
          if (bestId !== "")
            undrawLine(bestId, j - skipCount + bestCount * 2 + i * dots.length);
          drawLine(
            dot1,
            dot2,
            500 * (j - skipCount + bestCount * 2 + 1 + i * dots.length), // + 1 for bestId line above
            BEST_COLOR
          );
          bestId = `${dot1.x}-${dot1.y}-${dot2.x}-${dot2.y}`;
          bestCount += 1;
        } else {
          drawLine(
            dot1,
            dot2,
            500 * (j - skipCount + bestCount * 2 + i * dots.length)
          );
        }
      }
      const lines = select(svgRef.current).selectAll("line");
      select(svgRef.current)
        .selectAll("line")
        .filter(function () {
          return this.getAttribute("stroke") !== BEST_COLOR;
        })
        .transition()
        .delay(500 * ((i + 1) * dots.length - skipCount + bestCount - 0.2))
        .on("end", () => {
          lines.remove();
        });
    }
  };

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
