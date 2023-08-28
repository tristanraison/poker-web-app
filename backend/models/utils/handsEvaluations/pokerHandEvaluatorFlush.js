const PokerCard = require("../../pokerCard");
const Deck = require("../../deck");

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

function getFlushHighRank(cards) {
  if (hasFlush(cards)) {
    const suits = new Set();
    for (const card of cards) {
      suits.add(card.suit);
    }

    let highestRank = null;
    for (const suit of suits) {
      const sortedFlushCards = cards
        .filter((card) => card.suit === suit)
        .sort((a, b) => {
          if (a.rank !== b.rank) {
            return b.rank - a.rank; // Sort by rank value in descending order
          }
          // If ranks are equal, sort by suit in ascending order
          return a.suit.localeCompare(b.suit);
        });

      if (sortedFlushCards[0].rank === "Ace") {
        return "Ace"; // Flush contains Ace
      }

      if (
        !highestRank ||
        sortedFlushCards[0].rankValue > highestRank.rankValue
      ) {
        highestRank = sortedFlushCards[0];
      }
    }

    return highestRank.rank; // Highest rank in the flush
  }
  return null;
}

module.exports = {
  hasFlush,
  getFlushHighRank,
  // Export other hand evaluation functions...
};
