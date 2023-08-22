// poker-web-app-backend/utils/__tests__/pokerHandEvaluator.test.js
const PokerCard = require("../../models/pokerCard");
const { hasRoyalFlush } = require("../../models/utils/pokerHandEvaluator");

describe("hasRoyalFlush", () => {
  it("should detect a royal flush", () => {
    const royalFlush = [
      new PokerCard("10", "Spades"),
      new PokerCard("Jack", "Spades"),
      new PokerCard("Queen", "Spades"),
      new PokerCard("King", "Spades"),
      new PokerCard("Ace", "Spades"),
    ];
    expect(hasRoyalFlush(royalFlush)).toBe(true);
  });

  it("should detect a royal flush with 7 cards", () => {
    const royalFlush = [
      new PokerCard("2", "Spades"),
      new PokerCard("3", "Spades"),
      new PokerCard("10", "Spades"),
      new PokerCard("Jack", "Spades"),
      new PokerCard("Queen", "Spades"),
      new PokerCard("King", "Spades"),
      new PokerCard("Ace", "Spades"),
    ];
    expect(hasRoyalFlush(royalFlush)).toBe(true);
  });

  it("should not detect a royal flush when not present", () => {
    const notRoyalFlush = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Spades"),
      new PokerCard("King", "Hearts"),
      new PokerCard("Ace", "Clubs"),
    ];
    expect(hasRoyalFlush(notRoyalFlush)).toBe(false);
  });

  it("should not detect a royal flush when not present with a set of 4 cards", () => {
    const notRoyalFlush = [
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Diamonds"),
      new PokerCard("King", "Diamonds"),
      new PokerCard("Ace", "Diamonds"),
    ];
    expect(hasRoyalFlush(notRoyalFlush)).toBe(false);
  });

  it("should not detect a royal flush when not present with a set of 7 cards", () => {
    const notRoyalFlush = [
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Diamonds"),
      new PokerCard("King", "Diamonds"),
      new PokerCard("Ace", "Diamonds"),
      new PokerCard("8", "Diamonds"),
      new PokerCard("7", "Diamonds"),
      new PokerCard("9", "Diamonds"),
    ];
    expect(hasRoyalFlush(notRoyalFlush)).toBe(false);
  });
});

// Add more test cases for other hand evaluation functions...
