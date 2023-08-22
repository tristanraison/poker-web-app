const PokerCard = require("../../models/pokerCard");
const {
  hasStraight,
} = require("../../models/utils/pokerHandEvaluatorStraight");

describe("hasStraight", () => {
  it("should detect a straight", () => {
    const straightHand = [
      new PokerCard("7", "Hearts"),
      new PokerCard("8", "Diamonds"),
      new PokerCard("9", "Clubs"),
      new PokerCard("10", "Spades"),
      new PokerCard("Jack", "Hearts"),
    ];
    expect(hasStraight(straightHand)).toBe(true);
  });

  it("should detect a straight with 7 cards", () => {
    const straightHand = [
      new PokerCard("2", "Hearts"),
      new PokerCard("3", "Diamonds"),
      new PokerCard("4", "Clubs"),
      new PokerCard("5", "Spades"),
      new PokerCard("6", "Hearts"),
      new PokerCard("7", "Diamonds"),
      new PokerCard("8", "Clubs"),
    ];
    expect(hasStraight(straightHand)).toBe(true);
  });

  it("should detect a straight with 7 unsorted cards", () => {
    const straightHand = [
      new PokerCard("4", "Hearts"),
      new PokerCard("5", "Diamonds"),
      new PokerCard("3", "Clubs"),
      new PokerCard("2", "Spades"),
      new PokerCard("Ace", "Hearts"),
      new PokerCard("7", "Diamonds"),
      new PokerCard("8", "Clubs"),
    ];
    expect(hasStraight(straightHand)).toBe(true);
  });

  it("should not detect a straight when not present", () => {
    const notStraightHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(hasStraight(notStraightHand)).toBe(false);
  });

  it("should not detect a straight with a set of 4 cards", () => {
    const notStraightHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
    ];
    expect(hasStraight(notStraightHand)).toBe(false);
  });

  it("should not detect a straight with a set of 6 cards", () => {
    const notStraightHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("3", "Hearts"),
      new PokerCard("2", "Diamonds"),
    ];
    expect(hasStraight(notStraightHand)).toBe(false);
  });
});

// Add more test cases for other hand evaluation functions...
