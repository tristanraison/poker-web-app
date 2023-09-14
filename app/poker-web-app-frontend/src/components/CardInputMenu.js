import React, { useState } from "react";
import "./../css/cardInputMenu.css";
import { createCard } from "./Card/cardUtils.js";

const CardInputMenu = ({ updatePlayer1Cards, updateBoardCards }) => {
  const clearCard = createCard("");
  const [userCards, setUserCards] = useState([clearCard, clearCard]);
  const [boardCards, setBoardCards] = useState([
    clearCard,
    clearCard,
    clearCard,
    clearCard,
    clearCard,
  ]);

  const [resetUserInputs, setResetUserInputs] = useState(false);
  const [resetBoardInputs, setResetBoardInputs] = useState(false);

  const [userCardText, setUserCardText] = useState(["", ""]);
  const [boardCardText, setBoardCardText] = useState(["", "", "", "", ""]);

  const handleUserCardTextChange = (cardIndex) => (event) => {
    const newCardValue = event.target.value;
    const updatedUserCardText = [...userCardText];
    updatedUserCardText[cardIndex] = newCardValue;
    setUserCardText(updatedUserCardText);
  };

  const convertUserCardTextToUserCards = () => {
    const newUserCards = userCardText.map((cardText) => createCard(cardText));
    setUserCards(newUserCards);
    updatePlayer1Cards(newUserCards);

    // Optionally, you can also call your updatePlayer1Cards function here if needed.
  };

  const handleBoardCardTextChange = (cardIndex) => (event) => {
    const newCardValue = event.target.value;
    const updatedBoardCardText = [...boardCardText];
    updatedBoardCardText[cardIndex] = newCardValue;
    setBoardCardText(updatedBoardCardText);
  };

  const convertBoardCardTextToUserCards = () => {
    const newBoardCards = boardCardText.map((cardText) => createCard(cardText));
    console.log("new board cards : ", newBoardCards);
    setUserCards(newBoardCards);
    updateBoardCards(newBoardCards);

    // Optionally, you can also call your updatePlayer1Cards function here if needed.
  };

  const handleResetBoardInputs = () => {
    const hiddenCard = createCard("");
    const updatedBoardCards = [
      hiddenCard,
      hiddenCard,
      hiddenCard,
      hiddenCard,
      hiddenCard,
    ];
    updateBoardCards(updatedBoardCards);
  };

  const handleResetUserInputs = () => {
    const hiddenCard = createCard("");
    const updatedUserCards = [hiddenCard, hiddenCard];
    updatePlayer1Cards(updatedUserCards);
  };

  const handleResetAllCards = () => {
    // Reset user cards
    handleResetUserInputs();
    handleResetBoardInputs();
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
              value={userCardText[cardIndex]}
              onChange={(event) => handleUserCardTextChange(cardIndex)(event)}
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
              value={boardCardText[cardIndex]}
              onChange={handleBoardCardTextChange(cardIndex)}
            />
          </div>
        ))}
        <button onClick={handleResetBoardInputs}>Reset Board Cards</button>
      </div>
      <div className="reset-all-cards-button">
        <button onClick={handleResetAllCards}>Reset All Cards</button>
      </div>
      <div>
        <button onClick={convertUserCardTextToUserCards}>
          Convert User Cards
        </button>
      </div>
      <div>
        <button onClick={convertBoardCardTextToUserCards}>
          Convert User Cards
        </button>
      </div>
    </div>
  );
};

export default CardInputMenu;
