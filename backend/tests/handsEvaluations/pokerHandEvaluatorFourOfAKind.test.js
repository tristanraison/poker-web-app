const PokerCard = require("../../models/pokerCard");
const {
  hasFourOfAKind,
} = require("../../models/utils/pokerHandEvaluatorFourOfAKind");

describe("hasFourOfAKind", () => {
  it("should detect a four of a kind", () => {
    const fourOfAKind = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("10", "Clubs"),
      new PokerCard("10", "Spades"),
      new PokerCard("Jack", "Hearts"),
    ];
    expect(hasFourOfAKind(fourOfAKind)).toBe(true);
  });

  it("should not detect a four of a kind when not present", () => {
    const notFourOfAKind = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("Ace", "Hearts"),
    ];
    expect(hasFourOfAKind(notFourOfAKind)).toBe(false);
  });

  it("should not detect a four of a kind with a set of 4 cards", () => {
    const notFourOfAKind = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("10", "Clubs"),
      new PokerCard("Jack", "Spades"),
    ];
    expect(hasFourOfAKind(notFourOfAKind)).toBe(false);
  });

  it("should not detect a four of a kind with a set of 6 cards", () => {
    const notFourOfAKind = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("10", "Clubs"),
      new PokerCard("9", "Spades"),
      new PokerCard("Jack", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
    ];
    expect(hasFourOfAKind(notFourOfAKind)).toBe(false);
  });
});

// Add more test cases for other hand evaluation functions...
