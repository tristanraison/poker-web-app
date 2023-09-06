import React from "react";
import PropTypes from "prop-types";
import CardInput from "./CardInput"; // Import the CardInput component
import "./../css/cardInputSection.css";

const CardInputSection = ({ title, cards, onCardChange }) => {
  return (
    <div className="card-input-section">
      <h2 className="section-title">{title}</h2>
      <div className="card-inputs">
        {cards.map((card, index) => (
          <CardInput
            key={index}
            rank={card.rank}
            suit={card.suit}
            onRankChange={(value) => onCardChange(index, "rank", value)}
            onSuitChange={(value) => onCardChange(index, "suit", value)}
          />
        ))}
      </div>
    </div>
  );
};

CardInputSection.propTypes = {
  title: PropTypes.string.isRequired,
  cards: PropTypes.array.isRequired,
  onCardChange: PropTypes.func.isRequired,
};

export default CardInputSection;
