// poker-web-app-backend/models/player.js
const Player = require("./../models/player");
const PokerCard = require("../models/pokerCard");

describe("Player Class", () => {
  let player;

  beforeEach(() => {
    player = new Player("Alice", 1000);
  });

  test("Player should have a name and initial balance", () => {
    expect(player.getName()).toBe("Alice");
    expect(player.getBalance()).toBe(1000);
  });

  test("Player should have an empty hand initially", () => {
    expect(player.getHand()).toEqual([]);
  });

  test("Player balance should be updated correctly", () => {
    player.addToBalance(500);
    expect(player.getBalance()).toBe(1500);

    player.deductFromBalance(300);
    expect(player.getBalance()).toBe(1200);
  });

  test("Player should be able to set a hand", () => {
    const card1 = new PokerCard("Ace", "Hearts");
    const card2 = new PokerCard("King", "Spades");
    player.setHand(card1, card2);

    expect(player.getHand()).toEqual([card1, card2]);
  });

  test("Setting an invalid hand should throw an error", () => {
    const card1 = new PokerCard("Ace", "Hearts");
    const invalidCard = "Invalid Card";

    expect(() => player.setHand(card1, invalidCard)).toThrow(
      "Invalid cards. Both cards should be instances of PokerCard."
    );
  });
});
