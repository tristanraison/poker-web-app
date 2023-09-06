import React from "react";
import Card from "../Card/Card";
import "./../../css/game/player.css";

const Player = ({ name, balance, cards }) => {
  return (
    <div className="player-container">
      {/* Player name */}
      <div className="player-name">
        <h1>{name}</h1>
      </div>

      {/* Player cards */}
      <div className="player-cards">
        {cards.map((card, cardIndex) => (
          <Card
            key={cardIndex}
            suit={card.suit}
            color={card.color}
            rank={card.rank}
            hidden={card.hidden}
          />
        ))}
      </div>

      {/* Player balance */}
      <div className="player-balance">
        <h2>Balance: ${balance}</h2>
      </div>
    </div>
  );
};

export default Player;
