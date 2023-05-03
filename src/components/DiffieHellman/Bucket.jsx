import React, { Component } from "react";
import "./styles.css";

class Bucket extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { x, y, color, opacity, liqLevel } = this.props;

    return (
      <div
        className="game-object bucket"
        style={{
          opacity: opacity,
          top: y,
          left: x,
        }}
      >
        <svg
          width="66"
          height="56.5"
          viewBox="0 0 66 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          shapeRendering="auto"
        >
          <path
            d="M34 22.5C12.8 21.3 3.16667 26.3333 1 29V40.5C2 44.6667 9.5 53.4 31.5 55C53.5 56.6 63 46 65 40.5C65 37.5 66.5 31 65 29C63.5 27 60.5 24 34 22.5Z"
            fill={color}
          />
          <path
            d="M64.5 29C64.5 29.3175 64.3552 29.6732 63.9847 30.0692C63.612 30.4676 63.0378 30.8761 62.2556 31.2806C60.6925 32.089 58.3978 32.8319 55.5206 33.4613C49.7742 34.7183 41.8117 35.5 33 35.5C24.1883 35.5 16.2258 34.7183 10.4794 33.4613C7.60217 32.8319 5.30754 32.089 3.74441 31.2806C2.96222 30.8761 2.38801 30.4676 2.01527 30.0692C1.64484 29.6732 1.5 29.3175 1.5 29C1.5 28.6825 1.64484 28.3268 2.01527 27.9308C2.38801 27.5324 2.96222 27.1239 3.74441 26.7194C5.30754 25.911 7.60217 25.1681 10.4794 24.5387C16.2258 23.2817 24.1883 22.5 33 22.5C41.8117 22.5 49.7742 23.2817 55.5206 24.5387C58.3978 25.1681 60.6925 25.911 62.2556 26.7194C63.0378 27.1239 63.612 27.5324 63.9847 27.9308C64.3552 28.3268 64.5 28.6825 64.5 29Z"
            stroke="black"
          />
          <path
            d="M65 8V39.5C64.1534 44.6667 56.4667 55 32.4921 55C8.51746 55 1.50794 44.6667 1 39.5V8"
            stroke="black"
            stroke-width="2"
          />
          <path
            d="M65 8C65 8.51756 64.5379 9.31299 62.9094 10.2464C61.3569 11.1362 59.0439 11.9711 56.0989 12.685C50.2245 14.1091 42.0574 15 33 15C23.9426 15 15.7755 14.1091 9.90108 12.685C6.95606 11.9711 4.64308 11.1362 3.09057 10.2464C1.46209 9.31299 1 8.51756 1 8C1 7.48243 1.46209 6.68701 3.09057 5.75364C4.64308 4.86381 6.95606 4.02894 9.90108 3.315C15.7755 1.89091 23.9426 1 33 1C42.0574 1 50.2245 1.89091 56.0989 3.315C59.0439 4.02894 61.3569 4.86381 62.9094 5.75364C64.5379 6.68701 65 7.48243 65 8Z"
            stroke="black"
            stroke-width="2"
          />
        </svg>
      </div>
    );
  }
}

export default Bucket;
