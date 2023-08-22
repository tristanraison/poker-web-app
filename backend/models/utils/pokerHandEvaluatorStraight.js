const PokerCard = require("../pokerCard");
const Deck = require("../deck");

function hasStraight(cards) {
  const deck = new Deck();
  const uniqueRanks = new Set();
  for (const card of cards) {
    uniqueRanks.add(card.rank);
  }

  const ranks = Array.from(uniqueRanks).sort(
    (a, b) => deck.ranks.indexOf(a) - deck.ranks.indexOf(b)
  );

  // Special case for Ace-2-3-4-5 straight
  if (
    ranks.includes("Ace") &&
    ranks.includes("2") &&
    ranks.includes("3") &&
    ranks.includes("4") &&
    ranks.includes("5")
  ) {
    return true;
  }

  for (let i = 0; i < ranks.length - 4; i++) {
    if (deck.ranks.indexOf(ranks[i]) + 4 === deck.ranks.indexOf(ranks[i + 4])) {
      return true;
    }
  }

  return false;
}

module.exports = {
  hasStraight,
  // Export other hand evaluation functions...
};
