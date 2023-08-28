const PokerCard = require("../../models/pokerCard");
const {
  hasTwoPair,
  getTwoPairRanks,
} = require("../../models/utils/pokerHandEvaluatorTwoPair");

describe("hasTwoPair", () => {
  it("should detect two pairs", () => {
    const twoPairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("7", "Spades"),
      new PokerCard("King", "Hearts"),
      new PokerCard("King", "Diamonds"),
    ];
    expect(hasTwoPair(twoPairHand)).toBe(true);
  });

  it("should not detect two pairs when not present", () => {
    const notTwoPairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("5", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(hasTwoPair(notTwoPairHand)).toBe(false);
  });

  it("should not detect two pairs with a set of 4 cards", () => {
    const notTwoPairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("6", "Clubs"),
      new PokerCard("7", "Spades"),
    ];
    expect(hasTwoPair(notTwoPairHand)).toBe(false);
  });

  it("should detect two pairs with a set of 6 cards", () => {
    const notTwoPairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("7", "Spades"),
      new PokerCard("King", "Hearts"),
      new PokerCard("King", "Diamonds"),
      new PokerCard("Ace", "Clubs"),
    ];
    expect(hasTwoPair(notTwoPairHand)).toBe(true);
  });
});

describe("getTwoPairRanks", () => {
  it("should detect two pairs and return ranks [10, King]", () => {
    const twoPairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("7", "Spades"),
      new PokerCard("King", "Hearts"),
      new PokerCard("King", "Diamonds"),
    ];
    expect(getTwoPairRanks(twoPairHand)).toEqual(["King", "10"]);
  });

  it("should not detect two pairs and return null value", () => {
    const notTwoPairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("5", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(getTwoPairRanks(notTwoPairHand)).toBe(null);
  });
});
