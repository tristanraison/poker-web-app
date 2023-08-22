const PokerCard = require("../../models/pokerCard");
const {
  hasStraightFlush,
} = require("../../models/utils/pokerHandEvaluatorStraightFlush");

describe("hasStraightFlush", () => {
  it("should detect a straight flush", () => {
    const straightFlush = [
      new PokerCard("7", "Hearts"),
      new PokerCard("8", "Hearts"),
      new PokerCard("9", "Hearts"),
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Hearts"),
    ];
    expect(hasStraightFlush(straightFlush)).toBe(true);
  });

  it("should detect a straight flush with 7 cards", () => {
    const straightFlush = [
      new PokerCard("2", "Spades"),
      new PokerCard("3", "Spades"),
      new PokerCard("4", "Spades"),
      new PokerCard("5", "Spades"),
      new PokerCard("6", "Spades"),
      new PokerCard("7", "Spades"),
      new PokerCard("8", "Spades"),
    ];
    expect(hasStraightFlush(straightFlush)).toBe(true);
  });

  it("should not detect a straight flush when not present", () => {
    const notStraightFlush = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Spades"),
      new PokerCard("King", "Hearts"),
      new PokerCard("Ace", "Clubs"),
    ];
    expect(hasStraightFlush(notStraightFlush)).toBe(false);
  });

  it("should not detect a straight flush with a set of 4 cards", () => {
    const notStraightFlush = [
      new PokerCard("2", "Spades"),
      new PokerCard("3", "Spades"),
      new PokerCard("5", "Spades"),
      new PokerCard("6", "Spades"),
    ];
    expect(hasStraightFlush(notStraightFlush)).toBe(false);
  });

  it("should not detect a straight flush with a set of 6 cards", () => {
    const notStraightFlush = [
      new PokerCard("2", "Hearts"),
      new PokerCard("3", "Hearts"),
      new PokerCard("4", "Hearts"),
      new PokerCard("5", "Hearts"),
      new PokerCard("7", "Hearts"),
      new PokerCard("8", "Hearts"),
    ];
    expect(hasStraightFlush(notStraightFlush)).toBe(false);
  });
});

// Add more test cases for other hand evaluation functions...