const PokerCard = require("../../models/pokerCard");
const {
  hasStraight,
  getStraightHighRank,
} = require("../../models/utils/handsEvaluations/pokerHandEvaluatorStraight");

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

describe("hasStraight", () => {
  it("should not detect a straight then returns null value", () => {
    const notStraightHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("3", "Hearts"),
      new PokerCard("2", "Diamonds"),
    ];
    expect(getStraightHighRank(notStraightHand)).toBe(null);
  });

  it("should detect a straight then returns King value", () => {
    const notStraightHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("9", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("Jack", "Hearts"),
      new PokerCard("6", "Diamonds"),
    ];
    expect(getStraightHighRank(notStraightHand)).toBe("King");
  });

  it("should detect a straight then returns Ace value (highest straight)", () => {
    const hasStraightHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("Jack", "Hearts"),
      new PokerCard("Ace", "Diamonds"),
    ];
    expect(getStraightHighRank(hasStraightHand)).toBe("Ace");
  });

  it("should detect a straight then returns 5 value (lowest straight)", () => {
    const hasStraightHand = [
      new PokerCard("3", "Hearts"),
      new PokerCard("4", "Diamonds"),
      new PokerCard("2", "Clubs"),
      new PokerCard("5", "Spades"),
      new PokerCard("Jack", "Hearts"),
      new PokerCard("Ace", "Diamonds"),
    ];
    expect(getStraightHighRank(hasStraightHand)).toBe("5");
  });
});

// Add more test cases for other hand evaluation functions...
