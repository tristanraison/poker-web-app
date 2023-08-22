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

module.exports = {
  hasThreeOfAKind,
  // Export other hand evaluation functions...
};
