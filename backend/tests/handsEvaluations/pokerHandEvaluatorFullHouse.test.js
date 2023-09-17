const PokerCard = require("../../models/pokerCard");
const {
  hasFullHouse,
} = require("../../models/utils/handsEvaluations/pokerHandEvaluatorFullHouse"); // Update with the actual path

describe("hasFullHouse", () => {
  it("should detect a full house", () => {
    const fullHouse = [
      new PokerCard("7", "Hearts"),
      new PokerCard("7", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("3", "Spades"),
      new PokerCard("3", "Hearts"),
    ];
    expect(hasFullHouse(fullHouse)).toBe(true);
  });

  it("should not detect a full house when not present", () => {
    const notFullHouse = [
      new PokerCard("7", "Hearts"),
      new PokerCard("7", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("10", "Spades"),
      new PokerCard("Jack", "Hearts"),
    ];
    expect(hasFullHouse(notFullHouse)).toBe(false);
  });

  it("should not detect a full house with a set of 4 cards", () => {
    const notFullHouse = [
      new PokerCard("7", "Hearts"),
      new PokerCard("7", "Diamonds"),
      new PokerCard("7", "Clubs"),
      new PokerCard("3", "Spades"),
    ];
    expect(hasFullHouse(notFullHouse)).toBe(false);
  });

  it("should not detect a full house with a set of 6 cards", () => {
    const notFullHouse = [
      new PokerCard("7", "Hearts"),
      new PokerCard("7", "Diamonds"),
      new PokerCard("5", "Clubs"),
      new PokerCard("3", "Spades"),
      new PokerCard("3", "Hearts"),
      new PokerCard("6", "Clubs"),
    ];
    expect(hasFullHouse(notFullHouse)).toBe(false);
  });
});
