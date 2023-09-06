import React, { useState } from "react";
import "./../css/cardInputMenu.css";
import { createCard } from "./Card/cardUtils.js";

const CardInputMenu = ({
  updatePlayer1Cards,
  boardCards,
  updateBoardCards,
}) => {
  const [userCards, setUserCards] = useState(["", ""]);

  const [resetUserInputs, setResetUserInputs] = useState(false);
  const [resetBoardInputs, setResetBoardInputs] = useState(false);

  const handleUserCardChange = (cardIndex) => (event) => {
    const newCardValue = event.target.value;
    const updatedUserCards = [...userCards];
    updatedUserCards[cardIndex] = newCardValue;

    setUserCards(updatedUserCards);
    updatePlayer1Cards(updatedUserCards);
  };

  const handleUserCardBlur = (cardIndex) => () => {
    const cardValue = userCards[cardIndex];

    try {
      const validCard = createCard(cardValue);
      if (validCard) {
        const updatedUserCards = [...userCards];
        updatedUserCards[cardIndex] = validCard;
        setUserCards(updatedUserCards);
        updatePlayer1Cards(updatedUserCards);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleBoardCardChange = (cardIndex) => (event) => {
    const newBoardCardValue = event.target.value;
    const updatedBoardCards = [...boardCards];
    updatedBoardCards[cardIndex] = newBoardCardValue;

    updateBoardCards(updatedBoardCards); // Update the board cards in the parent component
  };

  const handleBoardCardBlur = (cardIndex) => () => {
    const cardValue = boardCards[cardIndex];

    try {
      const validCard = createCard(cardValue);
      if (validCard) {
        const updatedBoardCards = [...boardCards];
        updatedBoardCards[cardIndex] = validCard;
        updateBoardCards(updatedBoardCards);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const handleResetUserInputs = () => {
    setUserCards(["", ""]);
    setResetUserInputs(true);
    setTimeout(() => {
      setResetUserInputs(false);
    }, 100);
  };

  const handleResetBoardInputs = () => {
    const updatedBoardCards = ["", "", "", "", ""];
    updateBoardCards(updatedBoardCards);
  };

  return (
    <div className="card-input-menu">
      <div className="user-cards-frame">
        <h3>User Cards</h3>
        {userCards.map((card, cardIndex) => (
          <div className="card-input" key={cardIndex}>
            <input
              type="text"
              placeholder={`User Card ${cardIndex + 1}`}
              value={userCards[cardIndex]}
              onChange={handleUserCardChange(cardIndex)}
              onBlur={handleUserCardBlur(cardIndex)}
            />
          </div>
        ))}
        <button onClick={handleResetUserInputs}>Reset User Cards</button>
      </div>
      <div className="board-cards-frame">
        <h3>Board Cards</h3>
        {boardCards.map((card, cardIndex) => (
          <div className="card-input" key={cardIndex}>
            <input
              type="text"
              placeholder={`Board Card ${cardIndex + 1}`}
              value={boardCards[cardIndex]}
              onChange={handleBoardCardChange(cardIndex)}
              onBlur={handleBoardCardBlur(cardIndex)}
            />
          </div>
        ))}
        <button onClick={handleResetBoardInputs}>Reset Board Cards</button>
      </div>
    </div>
  );
};

export default CardInputMenu;
