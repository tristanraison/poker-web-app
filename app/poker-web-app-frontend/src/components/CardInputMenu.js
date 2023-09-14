import React, { useState } from "react";
import "./../css/cardInputMenu.css";
import { createCard } from "./Card/cardUtils.js";
import Alert from "./Alert"; // Import your custom alert component

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

  const [userCardText, setUserCardText] = useState(["", ""]);
  const [boardCardText, setBoardCardText] = useState(["", "", "", "", ""]);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const handleUserCardTextChange = (cardIndex) => (event) => {
    const newCardValue = event.target.value;
    const updatedUserCardText = [...userCardText];
    updatedUserCardText[cardIndex] = newCardValue;
    setUserCardText(updatedUserCardText);
  };

  const handleBoardCardTextChange = (cardIndex) => (event) => {
    const newCardValue = event.target.value;
    const updatedBoardCardText = [...boardCardText];
    updatedBoardCardText[cardIndex] = newCardValue;
    setBoardCardText(updatedBoardCardText);
  };

  const convertUserCardTextToUserCards = () => {
    try {
      const newUserCards = userCardText.map((cardText) => createCard(cardText));
      setUserCards(newUserCards);
      updatePlayer1Cards(newUserCards);
      setError(""); // Clear any previous errors
      setShowError(false); // Hide the error alert
    } catch (error) {
      setError(error.message); // Update the error state with the error message
      setShowError(true); // Show the error alert
    }
  };

  const convertBoardCardTextToUserCards = () => {
    const newBoardCards = boardCardText.map((cardText) => createCard(cardText));
    console.log("new board cards : ", newBoardCards);
    setUserCards(newBoardCards);
    updateBoardCards(newBoardCards);
  };

  const handleResetUserInputs = () => {
    const hiddenCard = createCard("");
    const updatedUserCards = [hiddenCard, hiddenCard];
    updatePlayer1Cards(updatedUserCards);
    setUserCardText(["", ""]);
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
    setBoardCardText(["", "", "", "", ""]);
  };

  const handleResetAllCards = () => {
    // Reset user cards and board cards
    handleResetUserInputs();
    handleResetBoardInputs();
  };

  return (
    <div className="card-input-menu">
      {/* ... Other components ... */}
      {showError && (
        <Alert message={error} onClose={() => setShowError(false)} />
      )}
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
        <div className="buttons">
          <button
            className="modern-button"
            onClick={convertUserCardTextToUserCards}
          >
            Convert User Cards
          </button>
          <button className="modern-button" onClick={handleResetUserInputs}>
            Reset User Cards
          </button>
        </div>
      </div>
      <div className="board-cards-frame">
        <h3>Board Cards</h3>
        {boardCards.map((card, cardIndex) => (
          <div className="card-input" key={cardIndex}>
            <input
              type="text"
              placeholder={`Board Card ${cardIndex + 1}`}
              value={boardCardText[cardIndex]}
              onChange={(event) => handleBoardCardTextChange(cardIndex)(event)}
            />
          </div>
        ))}
        <div className="buttons">
          <button
            className="modern-button"
            onClick={convertBoardCardTextToUserCards}
          >
            Convert Board Cards
          </button>
          <button className="modern-button" onClick={handleResetBoardInputs}>
            Reset Board Cards
          </button>
        </div>
      </div>
      <div className="board-cards-frame">
        <div className="buttons">
          <h3>Reset all cards</h3>
          <button className="modern-button" onClick={handleResetAllCards}>
            Reset All Cards
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardInputMenu;
