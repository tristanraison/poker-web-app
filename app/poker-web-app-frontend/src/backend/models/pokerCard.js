// poker-web-app-backend/models/pokerCard.js
class PokerCard {
  constructor(rank, suit, isHidden) {
    this.rank = rank;
    this.suit = suit;
    this.isHidden = isHidden;
  }

  getRank() {
    return this.rank;
  }

  getSuit() {
    return this.suit;
  }

  // Define an equals method to compare two cards
  equals(otherCard) {
    // Check if both the rank and suit are the same
    return this.rank === otherCard.rank && this.suit === otherCard.suit;
  }
}

module.exports = PokerCard;
