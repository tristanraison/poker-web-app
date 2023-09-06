const PokerCard = require("./pokerCard");

const validSuits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const validRanks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];

class Deck {
  constructor() {
    this.suits = validSuits;
    this.ranks = validRanks;
    this.cards = this.createDeck();
  }

  createDeck() {
    const cards = [];
    for (const suit of this.suits) {
      for (const rank of this.ranks) {
        cards.push(new PokerCard(rank, suit));
      }
    }
    return cards;
  }

  shuffle() {
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
  }

  draw() {
    if (this.cards.length === 0) {
      throw new Error("No more cards in the deck.");
    }
    return this.cards.pop();
  }
}

module.exports = {
  validSuits,
  validRanks,
  Deck,
};
