import React from "react";
import PropTypes from "prop-types";
import "./../../css/cards/card.css";

const Card = ({ suit, rank, isHidden }) => {
  const cardClasses = `card ${isHidden ? "hidden" : ""} ${suit}`;
  return (
    <div className={cardClasses}>
      <div className="card-content">
        <div className="card-rank-suit">
          <div className="card-rank">{rank}</div>
          <div className="card-suit">{getSuitSymbol(suit)}</div>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  suit: PropTypes.oneOf(["Hearts", "Diamonds", "Spades", "Clubs", ""])
    .isRequired,
  rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  hidden: PropTypes.bool,
};

const getSuitSymbol = (suit) => {
  switch (suit) {
    case "Hearts":
      return "♥";
    case "Diamonds":
      return "♦";
    case "Spades":
      return "♠";
    case "Clubs":
      return "♣";
    default:
      return "";
  }
};

export default Card;
