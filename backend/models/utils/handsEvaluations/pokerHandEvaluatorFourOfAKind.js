const PokerCard = require("../../pokerCard");
const Deck = require("../../deck");

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

function getFourOfAKindRank(cards) {
  const rankCount = new Map();
  for (const card of cards) {
    const rank = card.rank;
    rankCount.set(rank, (rankCount.get(rank) || 0) + 1);
  }

  for (const [rank, count] of rankCount.entries()) {
    if (count >= 4) {
      return rank;
    }
  }

  return null;
}

module.exports = {
  hasFourOfAKind,
  getFourOfAKindRank,
  // Export other hand evaluation functions...
};
