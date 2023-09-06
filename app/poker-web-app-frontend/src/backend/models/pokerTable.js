// poker-web-app-backend/models/pokerTable.js
const Player = require("./player");
const Deck = require("./deck");

class PokerTable {
  constructor() {
    this.players = [];
    this.deck = new Deck();
    this.communityCards = [];
    this.pot = 0;
    this.dealerPosition = 0; // Index of the dealer player in the players array
    this.currentPlayer = 0; // Index of the current player in the players array
  }

  addPlayer(name, initialBalance) {
    const player = new Player(name, initialBalance);
    this.players.push(player);
  }

  removePlayer(name) {
    this.players = this.players.filter((player) => player.getName() !== name);
  }

  startGame() {
    this.deck.shuffle();
    this.communityCards = [];
    this.pot = 0;

    this.dealHands();
    this.determineDealerPosition();
    this.bettingRound();
  }

  dealHands() {
    for (const player of this.players) {
      const card1 = this.deck.draw();
      const card2 = this.deck.draw();
      player.setHand(card1, card2);
    }
  }

  determineDealerPosition() {
    this.dealerPosition = (this.dealerPosition + 1) % this.players.length;
    this.currentPlayer = this.dealerPosition;
  }

  bettingRound() {
    // Implement the betting round logic here
    // Handle player actions (bet, check, fold, etc.)
    // Update the pot and community cards based on player actions
    // Move to the next player's turn
  }

  dealCommunityCard() {
    const card = this.deck.draw();
    this.communityCards.push(card);
  }

  showdown() {
    // Implement the showdown logic here
    // Evaluate players' hands and determine the winner(s)
    // Distribute the pot to the winner(s) or split it in case of a tie
  }
}

module.exports = PokerTable;
