import React, { useState, useEffect } from "react";
import PokerTable from "./PokerTable";
import Seat from "./Seat";
import CardInputMenu from "./../CardInputMenu";
import ParameterStrip from "./../ParameterStrip";
import "./../../css/game/game.css";

const Game = ({ players, potValue, bigBlindValue, boardCards }) => {
  const [player1Cards, setPlayer1Cards] = useState([]);
  const [gamePlayers, setGamePlayers] = useState(players);
  const [gameBoardCards, setGameBoardCards] = useState(boardCards);

  const updatePlayerCards = (playerPosition, newCards) => {
    const updatedPlayers = [...gamePlayers];
    const playerIndex = updatedPlayers.findIndex(
      (player) => player.position === playerPosition
    );

    if (playerIndex !== -1) {
      updatedPlayers[playerIndex].cards = newCards;
      setGamePlayers(updatedPlayers);
    }
  };

  const updateBoardCards = (newBoardCards) => {
    console.log("new board cards : ", newBoardCards);
    setGameBoardCards(newBoardCards);
  };

  useEffect(() => {
    setGamePlayers(players);
  }, [players]);

  useEffect(() => {
    console.log("board cards : ", boardCards);

    setGameBoardCards(boardCards);
  }, [boardCards]);

  return (
    <div className="game-container">
      <ParameterStrip />

      <div className="poker-table-wrapper">
        <PokerTable
          potValue={potValue}
          bigBlindValue={bigBlindValue}
          boardCards={gameBoardCards}
        />
      </div>

      <div className="seats-container">
        <div className="seats-wrapper">
          {[1, 2, 3, 4, 5, 6].map((position) => {
            const player = gamePlayers.find((p) => p.position === position);
            return (
              <Seat key={position} position={position} playerData={player} />
            );
          })}
        </div>
      </div>

      <div className="menu-and-stats-container">
        <div className="card-input-menu">
          <CardInputMenu
            player1Cards={player1Cards}
            updatePlayer1Cards={(newCards) => {
              updatePlayerCards(1, newCards); // Update player 1 cards
              setPlayer1Cards(newCards); // Update local state for player 1 cards
            }}
            boardCards={gameBoardCards} // Pass board cards to CardInputMenu
            updateBoardCards={(newCards) => {
              updateBoardCards(newCards); // Update board cards
            }}
          />
        </div>

        <div className="statistics-and-probability">
          <div className="win-probability">
            <h1>win probability</h1>
          </div>

          <div className="statistics">
            <h1>statistics</h1>
            <div className="player-1-cards">
              <h3>Player 1 Cards:</h3>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Game;
