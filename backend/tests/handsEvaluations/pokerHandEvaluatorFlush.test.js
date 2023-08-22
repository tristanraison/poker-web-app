const PokerCard = require("../../models/pokerCard");
const { hasFlush } = require("../../models/utils/pokerHandEvaluatorFlush");

describe("hasFlush", () => {
  it("should detect a flush", () => {
    const flushHand = [
      new PokerCard("7", "Hearts"),
      new PokerCard("2", "Hearts"),
      new PokerCard("10", "Hearts"),
      new PokerCard("4", "Hearts"),
      new PokerCard("King", "Hearts"),
    ];
    expect(hasFlush(flushHand)).toBe(true);
  });

  it("should detect a flush with 7 cards", () => {
    const flushHand = [
      new PokerCard("2", "Hearts"),
      new PokerCard("10", "Hearts"),
      new PokerCard("4", "Hearts"),
      new PokerCard("8", "Hearts"),
      new PokerCard("6", "Spades"),
      new PokerCard("7", "Hearts"),
      new PokerCard("8", "Spades"),
    ];
    expect(hasFlush(flushHand)).toBe(true);
  });

  it("should not detect a flush when not present", () => {
    const notFlushHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(hasFlush(notFlushHand)).toBe(false);
  });

  it("should not detect a flush with a set of 4 cards", () => {
    const notFlushHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
    ];
    expect(hasFlush(notFlushHand)).toBe(false);
  });

  it("should not detect a flush with a set of 6 cards", () => {
    const notFlushHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("3", "Hearts"),
      new PokerCard("2", "Diamonds"),
    ];
    expect(hasFlush(notFlushHand)).toBe(false);
  });
});

// Add more test cases for other hand evaluation functions...
