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
}

module.exports = PokerCard;
