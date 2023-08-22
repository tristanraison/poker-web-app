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

module.exports = {
  hasPair,
  // Export other hand evaluation functions...
};
