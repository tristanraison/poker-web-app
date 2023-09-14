import React from "react";
import Card from "./Card";
import "./../../css/cards/cardWrapper.css";

const CardsWrapper = ({ cards }) => {
  return (
    <div className="card-wrapper">
      {cards.map((card, index) => (
        <Card
          key={index}
          suit={card.suit}
          color={card.color}
          rank={card.rank}
          isHidden={card.isHidden}
        />
      ))}
    </div>
  );
};

export default CardsWrapper;
