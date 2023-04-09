import React, { Component } from "react";
import "./styles.css";

class Paper extends Component {
  constructor(props) {
    super(props);

    this.FLIP_TIME = 128;

    this.state = {
      hiddenRows: [false, false, false],
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.textHidden !== this.props.textHidden) {
      this.toggleHiddenText();
    }
  }

  toggleHiddenText = () => {
    const { hiddenRows } = this.state;
    for (let row = 0; row < hiddenRows.length; row++) {
      setTimeout(() => {
        this.setState((prevState) => {
          const newRows = [...prevState.hiddenRows];
          newRows[row] = !newRows[row];
          return { hiddenRows: newRows };
        });
      }, this.FLIP_TIME * row);
    }
  };

  render() {
    const { x, y, opacity } = this.props;
    const { hiddenRows } = this.state;

    return (
      <div
        className="game-object paper"
        style={{
          opacity: opacity,
          top: y,
          left: x,
        }}
      >
        <svg
          width="70"
          height="84"
          viewBox="0 0 70 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask id="path-1-inside-1_104_14" fill="white">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M48 0H0V84H70V22L48 0Z"
            />
          </mask>
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M48 0H0V84H70V22L48 0Z"
            fill="#F9F0BF"
          />
          <path
            d="M0 0V-3H-3V0H0ZM48 0L50.1213 -2.12132L49.2426 -3H48V0ZM0 84H-3V87H0V84ZM70 84V87H73V84H70ZM70 22H73V20.7574L72.1213 19.8787L70 22ZM0 3H48V-3H0V3ZM3 84V0H-3V84H3ZM70 81H0V87H70V81ZM67 22V84H73V22H67ZM72.1213 19.8787L50.1213 -2.12132L45.8787 2.12132L67.8787 24.1213L72.1213 19.8787Z"
            fill="black"
            mask="url(#path-1-inside-1_104_14)"
          />
          <path
            d="M48 3L48 23L68.5 23"
            stroke="black"
            stroke-width="3"
            stroke-linecap="round"
          />
          <g className={`paper-row-text${hiddenRows[0] ? " row-hidden" : ""}`}>
            <circle cx="13" cy="34" r="2" fill="black" />
            <circle cx="21" cy="34" r="2" fill="black" />
            <circle cx="29" cy="34" r="2" fill="black" />
            <path
              d="M36 34H44"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M52 34H60"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
            />
          </g>
          <g className={`paper-row-text${hiddenRows[1] ? " row-hidden" : ""}`}>
            <circle cx="44" cy="45" r="2" fill="black" />
            <circle cx="52" cy="45" r="2" fill="black" />
            <circle cx="60" cy="45" r="2" fill="black" />
            <path
              d="M13 45H21"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M29 45H37"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
            />
          </g>
          <g className={`paper-row-text${hiddenRows[2] ? " row-hidden" : ""}`}>
            <circle cx="28" cy="56" r="2" fill="black" />
            <circle cx="36" cy="56" r="2" fill="black" />
            <circle cx="44" cy="56" r="2" fill="black" />
            <circle cx="52" cy="56" r="2" fill="black" />
            <path
              d="M13 56H21"
              stroke="black"
              stroke-width="4"
              stroke-linecap="round"
            />
          </g>
        </svg>
      </div>
    );
  }
}

export default Paper;
