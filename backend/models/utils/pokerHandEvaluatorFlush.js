const PokerCard = require("../pokerCard");
const Deck = require("../deck");

function hasFlush(cards) {
  const suits = new Set();
  for (const card of cards) {
    suits.add(card.suit);
  }

  for (const suit of suits) {
    const flushRanks = getFlushRanks(cards, suit);
    if (flushRanks) {
      return true;
    }
  }

  return false;
}

function getFlushRanks(cards, suit) {
  const deck = new Deck();
  const sortedCards = cards
    .filter((card) => card.suit === suit)
    .sort((a, b) => deck.ranks.indexOf(a.rank) - deck.ranks.indexOf(b.rank));

  return sortedCards.length >= 5
    ? sortedCards.slice(-5).map((card) => card.rank)
    : null;
}

module.exports = {
  hasFlush,
  // Export other hand evaluation functions...
};
