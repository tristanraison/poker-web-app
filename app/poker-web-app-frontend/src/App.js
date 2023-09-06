// App.js
import React from "react";
import Header from "./components/Header";
import GameTable from "./components/Game/Game";
import "./css/app.css";

const App = () => {
  // Dummy data for players
  const players = [
    {
      name: "Player 1",
      position: 1, // Player's seating position
      balance: 1000,
      cards: [
        { rank: "10", suit: "Spades" },
        { rank: "10", suit: "Spades" },
      ],
    },
    // Add more players as needed
  ];

  const potValue = 5000; // Example pot value
  const bigBlindValue = 100; // Example big blind value
  const boardCards = [
    { rank: "10", suit: "Spades" },
    { rank: "10", suit: "Spades" },
    { rank: "10", suit: "Spades" },
    { rank: "10", suit: "Spades" },
    { rank: "10", suit: "Spades" },
  ]; // Example board cards

  return (
    <div>
      <Header />
      <div className="app">
        <GameTable
          players={players}
          potValue={potValue}
          bigBlindValue={bigBlindValue}
          boardCards={boardCards}
        />
      </div>
    </div>
  );
};

export default App;
