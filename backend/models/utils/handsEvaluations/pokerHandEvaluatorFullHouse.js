const {
  hasThreeOfAKind,
  getThreeOfAKindRank,
} = require("../handsEvaluations/pokerHandEvaluatorThreeOfAKind"); // Update with the actual path
const { hasPair } = require("./pokerHandEvaluatorPair");

function hasFullHouse(cards) {
  const hasThree = hasThreeOfAKind(cards);
  const hasTwo = hasPair(cards);

  return hasThree && hasTwo;
}

module.exports = {
  hasFullHouse,
};
