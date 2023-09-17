const PokerCard = require("../../pokerCard");
const Deck = require("../../deck");

function hasTwoPair(cards) {
  const rankCount = new Map();

  for (const card of cards) {
    const rank = card.rank;
    rankCount.set(rank, (rankCount.get(rank) || 0) + 1);
  }

  let pairCount = 0;
  for (const count of rankCount.values()) {
    if (count === 2) {
      pairCount++;
      if (pairCount === 2) {
        return true;
      }
    }
  }

  return false;
}

function getTwoPairRanks(cards) {
  const rankCount = new Map();
  const pairRanks = [];
  const deck = new Deck();

  for (const card of cards) {
    const rank = card.rank;
    rankCount.set(rank, (rankCount.get(rank) || 0) + 1);
  }

  for (const [rank, count] of rankCount.entries()) {
    if (count === 2) {
      pairRanks.push(rank);
    }
  }

  if (pairRanks.length >= 2) {
    pairRanks.sort((a, b) => deck.ranks.indexOf(b) - deck.ranks.indexOf(a));
    return [pairRanks[0], pairRanks[1]];
  }

  return null;
}
module.exports = {
  hasTwoPair,
  getTwoPairRanks,
  // Export other hand evaluation functions...
};
