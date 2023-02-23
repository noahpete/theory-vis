import React from 'react';
import mcard from 'assets/m-card.svg';
import ocard from 'assets/o-card.svg';
import './styles.css';

const Card = ({ card, flipped, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front"
          src={mcard}
          alt="card front"
        />
        <img className="back"
          src={ocard}
          alt="card back"
        />
      </div>
    </div>
  );
}

export default Card;