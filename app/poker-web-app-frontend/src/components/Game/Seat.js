import React from "react";
import Player from "./Player";
import "./../../css/game/seat.css";

const Seat = ({ playerData, position }) => {
  // Conditional rendering: Display Player if playerData exists, otherwise show the seat as empty.
  return (
    <div className={`seat-container seat-${position}`}>
      {playerData ? (
        <Player
          name={playerData.name}
          balance={playerData.balance}
          cards={playerData.cards}
        />
      ) : (
        <div className="empty-seat">Empty Seat</div>
      )}
    </div>
  );
};

export default Seat;
