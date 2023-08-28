const PokerCard = require("./../../pokerCard");
const Deck = require("./../../deck");

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

  // Handle Ace-low straight for straight flush
  const aceLowStraightRanks = ["Ace", "2", "3", "4", "5"];
  const isAceLowStraight = aceLowStraightRanks.every((rank) =>
    sortedCards.some((card) => card.rank === rank)
  );

  if (isAceLowStraight) {
    return aceLowStraightRanks;
  }

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

function getStraightFlushHighRank(cards) {
  const sortedCards = cards.sort((a, b) => a.rankValue - b.rankValue); // Sort the cards before processing
  const suits = new Set();
  for (const card of sortedCards) {
    suits.add(card.suit);
  }

  for (const suit of suits) {
    const flushRanks = getFlushRanks(sortedCards, suit);
    if (flushRanks) {
      return flushRanks[4]; // Return the highest rank of the straight flush
    }
  }

  return null;
}

module.exports = {
  hasStraightFlush,
  getStraightFlushHighRank,
  // Export other hand evaluation functions...
};
