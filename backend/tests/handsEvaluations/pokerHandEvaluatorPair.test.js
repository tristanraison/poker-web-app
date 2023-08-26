const PokerCard = require("../../models/pokerCard");
const {
  hasPair,
  getPairRank,
} = require("../../models/utils/pokerHandEvaluatorPair");

describe("hasPair", () => {
  it("should detect a pair", () => {
    const pairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("5", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(hasPair(pairHand)).toBe(true);
  });

  it("should detect a pair with a set of 6 cards", () => {
    const pairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("7", "Spades"),
      new PokerCard("Queen", "Hearts"),
      new PokerCard("King", "Diamonds"),
    ];
    expect(hasPair(pairHand)).toBe(true);
  });

  it("should not detect a pair when not present", () => {
    const notPairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(hasPair(notPairHand)).toBe(false);
  });

  it("should not detect a pair with a set of 4 cards", () => {
    const notPairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("3", "Clubs"),
      new PokerCard("Queen", "Spades"),
    ];
    expect(hasPair(notPairHand)).toBe(false);
  });

  it("should not detect a pair with a set of 6 cards", () => {
    const notPairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("3", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("4", "Spades"),
      new PokerCard("Queen", "Hearts"),
      new PokerCard("King", "Diamonds"),
    ];
    expect(hasPair(notPairHand)).toBe(false);
  });
});

describe("getPairRank", () => {
  it("should detect a pair of 10", () => {
    const pairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("5", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(getPairRank(pairHand)).toBe("10");
  });

  it("should not detect a pair and return null value", () => {
    const pairHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("5", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(getPairRank(pairHand)).toBe(null);
  });
});
