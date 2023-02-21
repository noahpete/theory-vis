import React, { useEffect, useState } from 'react';
import Card from './Card';

import './potential.css';

const Potential = () => {
  const BOARD_DIMEN = 400;
  const FLIP_TIME = 128;

  const [boardSize, setBoardSize] = useState(5);
  const [turn, setTurn] = useState(0);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    resetCards();
  }, [boardSize]);

  const resetCards = (event = null) => {
    const defCards = [];
    for (let row = 0; row < boardSize; row++) {
      const curRow = [];
      for (let col = 0; col < boardSize; col++) {
        curRow.push({
          id: (col + row * boardSize),
          row,
          col,
          flipped: false,
        })
      }
      defCards.push(curRow);
    }
    setCards(defCards);
    setTurn(0);
  }

  const handleClick = (row, col) => {
    console.log(row, col);
    if (turn % 2 === 0) {
      if (!validRow(row)) return;
      flipCard(row, col);
      for (let i = 1; i < boardSize; i++) {
        setTimeout(() => {
          if (col - i >= 0) flipCard(row, col - i);
          if (col + i < boardSize) flipCard(row, col + i);
        }, FLIP_TIME * i);
      }
    } else {
      if (!validCol(col)) return;
      flipCard(row, col);
      for (let i = 1; i < boardSize;  i++) {
        setTimeout(() => {
          if (row - i >= 0) flipCard(row - i, col);
          if (row + i < boardSize) flipCard(row + i, col);
        }, FLIP_TIME * i);
      }
    }
    setTurn(turn + 1);
  }

  const flipCard = (row, col) => {
    const newCards = [...cards];
    newCards[row][col].flipped = !newCards[row][col].flipped;
    setCards(newCards);
  }

  const validRow = (row) => {
    let flipCount = 0;
    for (let i = 0; i < boardSize; ++i)
      if (cards[row][i].flipped) flipCount++;
    return flipCount < boardSize / 2;
  }

  const validCol = (col) => {
    let flipCount = 0;
    for (let i = 0; i < boardSize; ++i)
      if (cards[i][col].flipped) flipCount++;
    return flipCount < boardSize / 2;
  }

  const getNumFaceUp = () => {
    let count = 0;
    for (const row of cards)
      for (const card of row)
        if (card.flipped) count++;
    return count;
  }

  return (
    <div className="display-and-controls">
      <div className="board-wrapper">
        <div className="board"
          style={{
            width: BOARD_DIMEN,
            height: BOARD_DIMEN
          }}
        >
          {cards && cards.map((row, rowI) => {
            return (
              <div className="row" key={rowI} >
                {row.map(card => (
                  <Card
                    key={ card.id }
                    card={ card }
                    flipped={ cards[card.row][card.col].flipped }
                    onClick={() => handleClick(card.row, card.col)}
                  />
                ))}
              </div>
            )
          })}
        </div>
          <div className="legend-wrapper">
            <div className="legend">
              <h2>Flip a {turn % 2 === 0 ? "row" : "column"}</h2>
              <div className="stats">
                <div className="stat-row">
                  <div className="card-icon"><Card flipped={ false } /></div><p>{ boardSize * boardSize - getNumFaceUp() }</p>
                </div>
                <div className="stat-row">
                  <div className="card-icon"><Card flipped={ true } /></div><p>{ getNumFaceUp() }</p>
                </div>
                <p>ratio of face up tiles: { Math.round((getNumFaceUp() / (boardSize * boardSize)) * 100) / 100 }</p>
              </div>
            </div>
        </div>
      </div>
      <div className="controls-wrapper">
        <div className="controls">
          <input
            type="number"
            min="1"
            max="15"
            step="2"
            value={ boardSize }
            onChange={e => setBoardSize(e.target.value)}
          />
          <button onClick={resetCards} >Reset Cards</button>
          {/* <button onClick={simulateFlips} >Simulate Random Flips</button> */}
          </div>
      </div>
    </div>
  );
}

export default Potential