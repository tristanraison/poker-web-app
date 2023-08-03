// poker-web-app-backend/models/pokerCard.js
class PokerCard {
  constructor(rank, suit) {
    this.rank = rank;
    this.suit = suit;
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }
}

module.exports = PokerCard;
