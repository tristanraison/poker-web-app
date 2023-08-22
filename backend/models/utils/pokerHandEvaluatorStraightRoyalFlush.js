const PokerCard = require("../pokerCard");
const Deck = require("../deck");

function evaluateHand(hand) {
  const combinations = [];

  // Check for Royal Flush, Straight Flush, Four of a Kind, Full House, etc.
  if (hasRoyalFlush(hand)) {
    combinations.push("Royal Flush");
  } else if (hasStraightFlush(hand)) {
    combinations.push("Straight Flush");
  }
  // ... (other combinations)

  // If no high-ranking combination, then check for pairs, high cards, etc.
  if (combinations.length === 0) {
    if (hasPair(hand)) {
      combinations.push("Pair");
    }
    // ... (other lower-ranking combinations)
  }

  return combinations;
}

function hasRoyalFlush(cards) {
  const suits = new Set();
  for (const card of cards) {
    suits.add(card.suit);
  }

  for (const suit of suits) {
    const deck = new Deck();
    const royalFlushRanks = deck.ranks.slice(
      deck.ranks.length - 5,
      deck.ranks.length
    );
    const royalFlushInSuit = royalFlushRanks.every((rank) =>
      cards.some((card) => card.suit === suit && card.rank === rank)
    );

    if (royalFlushInSuit) {
      return true;
    }
  }

  return false;
}

module.exports = {
  hasRoyalFlush,
  // Export other hand evaluation functions...
};
