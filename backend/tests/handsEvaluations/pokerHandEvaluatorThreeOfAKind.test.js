const PokerCard = require("../../models/pokerCard");
const {
  hasThreeOfAKind,
  getThreeOfAKindRank,
} = require("../../models/utils/handsEvaluations/pokerHandEvaluatorThreeOfAKind");

describe("hasThreeOfAKind", () => {
  it("should detect a three of a kind", () => {
    const threeOfAKindHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("10", "Clubs"),
      new PokerCard("7", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(hasThreeOfAKind(threeOfAKindHand)).toBe(true);
  });

  it("should not detect a three of a kind when not present", () => {
    const notThreeOfAKindHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("Jack", "Diamonds"),
      new PokerCard("Queen", "Clubs"),
      new PokerCard("King", "Spades"),
      new PokerCard("2", "Hearts"),
    ];
    expect(hasThreeOfAKind(notThreeOfAKindHand)).toBe(false);
  });

  it("should not detect a three of a kind with a set of 4 cards", () => {
    const notThreeOfAKindHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("Jack", "Clubs"),
      new PokerCard("Queen", "Spades"),
    ];
    expect(hasThreeOfAKind(notThreeOfAKindHand)).toBe(false);
  });

  it("should not detect a three of a kind with a set of 6 cards", () => {
    const notThreeOfAKindHand = [
      new PokerCard("10", "Hearts"),
      new PokerCard("10", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("Jack", "Spades"),
      new PokerCard("Queen", "Hearts"),
      new PokerCard("King", "Diamonds"),
    ];
    expect(hasThreeOfAKind(notThreeOfAKindHand)).toBe(false);
  });

  it("should detect a three of a kind of 4 with a set of 6 cards", () => {
    const threeOfAKind4Hand = [
      new PokerCard("4", "Hearts"),
      new PokerCard("4", "Diamonds"),
      new PokerCard("4", "Clubs"),
      new PokerCard("Jack", "Spades"),
      new PokerCard("Queen", "Hearts"),
      new PokerCard("King", "Diamonds"),
    ];
    expect(getThreeOfAKindRank(threeOfAKind4Hand)).toBe("4");
  });

  it("should not detect a three of a kind rank with a set of 5 cards", () => {
    const notThreeOfAKindHand = [
      new PokerCard("4", "Hearts"),
      new PokerCard("4", "Diamonds"),
      new PokerCard("Jack", "Spades"),
      new PokerCard("Queen", "Hearts"),
      new PokerCard("King", "Diamonds"),
    ];
    expect(getThreeOfAKindRank(notThreeOfAKindHand)).toBe(null);
  });
});

// Add more test cases for other hand evaluation functions...
