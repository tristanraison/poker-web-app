// poker-web-app-backend/models/deck.test.js
const Deck = require("./../models/deck");

describe("Deck Class", () => {
  let deck;

  beforeEach(() => {
    deck = new Deck();
  });

  test("Deck should be created with 52 cards", () => {
    expect(deck.cards.length).toBe(52);
  });

  test("Deck should contain unique cards", () => {
    const cardSet = new Set(
      deck.cards.map((card) => `${card.getRank()} of ${card.getSuit()}`)
    );
    expect(cardSet.size).toBe(52);
  });

  test("Deck should be shuffled", () => {
    const originalOrder = deck.cards.slice();
    deck.shuffle();
    expect(deck.cards).not.toEqual(originalOrder);
  });

  test("Drawn card should be removed from the deck", () => {
    const drawnCard = deck.draw();
    expect(deck.cards.includes(drawnCard)).toBe(false);
  });

  test("Drawing more cards than available should throw an error", () => {
    // Draw all 52 cards
    for (let i = 0; i < 52; i++) {
      deck.draw();
    }
    // Now try drawing one more card, it should throw an error
    expect(() => deck.draw()).toThrow("No more cards in the deck.");
  });
});
