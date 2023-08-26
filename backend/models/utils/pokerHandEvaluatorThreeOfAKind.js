const PokerCard = require("../pokerCard");
const Deck = require("../deck");

function hasThreeOfAKind(cards) {
  const rankCount = new Map();

  for (const card of cards) {
    const rank = card.rank;
    rankCount.set(rank, (rankCount.get(rank) || 0) + 1);
  }

  return Array.from(rankCount.values()).includes(3);
}

function getThreeOfAKindRank(cards) {
  const rankCount = new Map();

  for (const card of cards) {
    const rank = card.rank;
    rankCount.set(rank, (rankCount.get(rank) || 0) + 1);
  }

  for (const [rank, count] of rankCount.entries()) {
    if (count === 3) {
      return rank;
    }
  }

  return null;
}

module.exports = {
  hasThreeOfAKind,
  getThreeOfAKindRank,
  // Export other hand evaluation functions...
};
