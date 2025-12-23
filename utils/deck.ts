export type Card = {
  value: number;
  name: string;
  suit: string; // new
};

export function createDeck(): Card[] {
  const names = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"];
  const suits = ["♠","♥","♦","♣"];
  const deck: Card[] = [];

  for (let name of names) {
    let value: number;
    if (name === "A") value = 11;
    else if (["J","Q","K"].includes(name)) value = 10;
    else value = parseInt(name);

    for (let suit of suits) {
      deck.push({ value, name, suit });
    }
  }

  return shuffle(deck);
}

function shuffle(deck: Card[]): Card[] {
  const shuffled = [...deck];
  for (let i = shuffled.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i +1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
