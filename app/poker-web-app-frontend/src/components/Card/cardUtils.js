// cardUtils.js

import { validSuits, validRanks } from "./../../backend/models/deck";
import PokerCard from "../../backend/models/pokerCard";

// matching value for the suit
const suitCodeToName = {
  C: "Clubs",
  H: "Hearts",
  D: "Diamonds",
  S: "Spades",
};

export function createCard(cardValue) {
  // If the cardValue is empty, return a hidden card
  if (cardValue === "") {
    return new PokerCard("", "", true); // Assuming PokerCard constructor accepts a third parameter for hidden
  }

  const suitCode = cardValue.slice(-1).toUpperCase();
  const rank = cardValue.slice(0, -1).toUpperCase();

  // Check if the suit code is valid
  if (!suitCodeToName.hasOwnProperty(suitCode)) {
    throw new Error("Invalid suit code");
  }

  // Get the full suit name from the mapping
  const suit = suitCodeToName[suitCode];

  if (!isValidSuit(suit) || !isValidRank(rank)) {
    throw new Error("Invalid card value");
  }

  return new PokerCard(rank, suit, false); // Remove the curly braces and "new"
}

function isValidSuit(suit) {
  return validSuits.includes(suit);
}

function isValidRank(rank) {
  return validRanks.includes(rank);
}
