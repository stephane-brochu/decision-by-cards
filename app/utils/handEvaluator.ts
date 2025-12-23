import { Card } from "./deck";

export function evaluateHand(hand: Card[]): number {
  let total = hand.reduce((sum, card) => sum + card.value, 0);

  // Adjust for Aces if total > 21
  let aces = hand.filter(c => c.name === "A").length;
  while (total > 21 && aces > 0) {
    total -= 10; // count Ace as 1 instead of 11
    aces--;
  }

  return total;
}
