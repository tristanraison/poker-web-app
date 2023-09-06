// poker-web-app-backend/models/pokerTable.js
const PokerTable = require("./../models/pokerTable");
const Player = require("./../models/player");

describe("PokerTable Class", () => {
  let pokerTable;

  beforeEach(() => {
    pokerTable = new PokerTable();
  });

  test("Adding players to the table", () => {
    pokerTable.addPlayer("Alice", 1000);
    pokerTable.addPlayer("Bob", 1000);

    expect(pokerTable.players.length).toBe(2);
    expect(pokerTable.players[0].getName()).toBe("Alice");
    expect(pokerTable.players[1].getName()).toBe("Bob");
  });

  test("Removing players from the table", () => {
    pokerTable.addPlayer("Alice", 1000);
    pokerTable.addPlayer("Bob", 1000);
    pokerTable.addPlayer("Charlie", 1000);

    pokerTable.removePlayer("Bob");

    expect(pokerTable.players.length).toBe(2);
    expect(pokerTable.players[0].getName()).toBe("Alice");
    expect(pokerTable.players[1].getName()).toBe("Charlie");
  });

  test("Starting a new game", () => {
    pokerTable.addPlayer("Alice", 1000);
    pokerTable.addPlayer("Bob", 1000);
    pokerTable.startGame();

    expect(pokerTable.communityCards.length).toBe(0);
    expect(pokerTable.pot).toBe(0);
    expect(pokerTable.deck.remainingCards()).toBe(
      52 - 2 * pokerTable.players.length
    );
  });

  //more further tests cases for other methods as per your implementation
});
