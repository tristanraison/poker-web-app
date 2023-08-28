const { hasRoyalFlush } = require("./pokerHandEvaluatorStraightRoyalFlush");
const { hasStraightFlush } = require("./pokerHandEvaluatorStraightFlush");
const { hasFourOfAKind } = require("./pokerHandEvaluatorFourOfAKind");
const { hasFlush } = require("./pokerHandEvaluatorFlush");
const { hasStraight } = require("./pokerHandEvaluatorStraight");
const { hasThreeOfAKind } = require("./pokerHandEvaluatorThreeOfAKind");

const { hasPair } = require("./pokerHandEvaluatorPair");

function evaluateHand(hand) {
  const detectedCombinations = [];

  if (hasRoyalFlush(hand)) {
    detectedCombinations.push("Royal Flush");
  }
  if (hasStraightFlush(hand)) {
    detectedCombinations.push("Straight Flush");
  }
  if (hasFourOfAKind(hand)) {
    detectedCombinations.push("Four of a Kind");
  }
  if (hasFourOfAKind(hand)) {
    detectedCombinations.push("Four of a Kind");
  }
  if (hasFourOfAKind(hand)) {
    detectedCombinations.push("Four of a Kind");
  }
  if (hasFourOfAKind(hand)) {
    detectedCombinations.push("Four of a Kind");
  }
  if (hasFourOfAKind(hand)) {
    detectedCombinations.push("Four of a Kind");
  }
  // Add other combination checks here...

  return detectedCombinations;
}

module.exports = {
  evaluateHand,
};
