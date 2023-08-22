const PokerCard = require("../pokerCard");
const Deck = require("../deck");

function hasFourOfAKind(cards) {
  const rankCount = new Map();
  for (const card of cards) {
    const rank = card.rank;
    rankCount.set(rank, (rankCount.get(rank) || 0) + 1);
  }

  for (const count of rankCount.values()) {
    if (count >= 4) {
      return true;
    }
  }

  return false;
}

module.exports = {
  hasFourOfAKind,
  // Export other hand evaluation functions...
};
