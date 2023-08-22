const PokerCard = require("./../pokerCard");
const Deck = require("./../deck"); // Make sure the path is correct

function hasStraightFlush(cards) {
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

  for (let i = 0; i < sortedCards.length - 4; i++) {
    if (
      deck.ranks.indexOf(sortedCards[i].rank) + 4 ===
      deck.ranks.indexOf(sortedCards[i + 4].rank)
    ) {
      return sortedCards.slice(i, i + 5).map((card) => card.rank);
    }
  }

  return null;
}

module.exports = {
  hasStraightFlush,
  // Export other hand evaluation functions...
};
