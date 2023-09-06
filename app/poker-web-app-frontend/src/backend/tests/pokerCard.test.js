// poker-web-app-backend/models/pokerCard.test.js
const PokerCard = require("./../models/pokerCard");

test("PokerCard - getRank() returns the correct rank", () => {
  const card = new PokerCard("Ace", "Spades");
  expect(card.getRank()).toBe("Ace");
});

test("PokerCard - getSuit() returns the correct suit", () => {
  const card = new PokerCard("Ace", "Spades");
  expect(card.getSuit()).toBe("Spades");
});
