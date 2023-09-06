import React from "react";
import PropTypes from "prop-types";
import "./../css/cardInput.css";

const CardInput = ({ rank, suit, onRankChange, onSuitChange }) => {
  return (
    <div className="card-input">
      <input
        type="text"
        className="rank-input"
        placeholder="Rank"
        value={rank}
        onChange={(e) => onRankChange(e.target.value)}
      />
      <input
        type="text"
        className="suit-input"
        placeholder="Suit"
        value={suit}
        onChange={(e) => onSuitChange(e.target.value)}
      />
    </div>
  );
};

CardInput.propTypes = {
  rank: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
  onRankChange: PropTypes.func.isRequired,
  onSuitChange: PropTypes.func.isRequired,
};

export default CardInput;
