// poker-web-app-backend/models/player.js
const PokerCard = require("./pokerCard");

class Player {
  constructor(name, initialBalance) {
    this.name = name;
    this.balance = initialBalance;
    this.hand = [];
  }

  getName() {
    return this.name;
  }

  getBalance() {
    return this.balance;
  }

  getHand() {
    return this.hand;
  }

  addToBalance(amount) {
    this.balance += amount;
  }

  deductFromBalance(amount) {
    this.balance -= amount;
  }

  setHand(card1, card2) {
    if (!(card1 instanceof PokerCard) || !(card2 instanceof PokerCard)) {
      throw new Error(
        "Invalid cards. Both cards should be instances of PokerCard."
      );
    }
    this.hand = [card1, card2];
  }
}

module.exports = Player;
