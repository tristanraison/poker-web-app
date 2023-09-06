import React from "react";
import CardsWrapper from "./../Card/CardWrapper"; // Import the CardWrapper component
import "./../../css/game/pokerTable.css"; // Import the poker table styles

const PokerTable = ({ potValue, bigBlindValue, boardCards }) => {
  return (
    <div className="poker-table">
      <div className="table-container">
        <div className="table">
          {/* Display the board cards on the table */}
          <CardsWrapper cards={boardCards} />
        </div>

        <div className="table-header">
          <div className="table-header-item">
            Pot: <span className="pot-value">${potValue}</span>
          </div>
          <div className="table-header-item">
            Big Blind: <span className="big-blind-value">${bigBlindValue}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokerTable;
