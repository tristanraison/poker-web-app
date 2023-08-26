const PokerCard = require("../pokerCard");
const Deck = require("../deck");

function hasPair(cards) {
  const rankCount = new Map();

  for (const card of cards) {
    const rank = card.rank;
    rankCount.set(rank, (rankCount.get(rank) || 0) + 1);
  }

  return Array.from(rankCount.values()).includes(2);
}

function getPairRank(cards) {
  const rankCount = new Map();

  for (const card of cards) {
    const rank = card.rank;
    rankCount.set(rank, (rankCount.get(rank) || 0) + 1);
  }

  for (const [rank, count] of rankCount.entries()) {
    if (count === 2) {
      return rank;
    }
  }

  return null;
}

module.exports = {
  hasPair,
  getPairRank,
  // Export other hand evaluation functions...
};
