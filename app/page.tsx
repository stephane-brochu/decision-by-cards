"use client";

import { useState } from "react";
import { createDeck, Card } from "../utils/deck";
import { evaluateHand } from "../utils/handEvaluator";
import CardBox from "./CardBox";

type GameState = "idle" | "playerTurn" | "dealerTurn" | "resolution";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [outcome, setOutcome] = useState<string>("");
  const [deck, setDeck] = useState<Card[]>([]);
  const [playerHand, setPlayerHand] = useState<Card[]>([]);
  const [dealerHand, setDealerHand] = useState<Card[]>([]);

  const handleDecide = () => {
    const newDeck = createDeck();
    const player = [newDeck.pop()!, newDeck.pop()!];
    const dealer = [newDeck.pop()!, newDeck.pop()!];

    setDeck(newDeck);
    setPlayerHand(player);
    setDealerHand(dealer);
    setOutcome("");
    setGameState("playerTurn");
  };

  const handleHit = () => {
    if (deck.length === 0) return;
    const card = deck.pop()!;
    const newHand = [...playerHand, card];
    setPlayerHand(newHand);

    if (evaluateHand(newHand) > 21) {
      setOutcome("Do not proceed");
      setGameState("resolution");
    }
  };

  const handleStand = () => {
    let dealer = [...dealerHand];
    let dTotal = evaluateHand(dealer);

    while (dTotal < 17) {
      const card = deck.pop()!;
      dealer.push(card);
      dTotal = evaluateHand(dealer);
    }

    setDealerHand(dealer);

    const playerTotal = evaluateHand(playerHand);
    let result = "";
    if (dTotal > 21 || playerTotal > dTotal) result = "Proceed";
    else if (playerTotal < dTotal) result = "Do not proceed";
    else result = "Try again";

    setOutcome(result);
    setGameState("resolution");
  };

  const handleRestart = () => {
    setOutcome("");
    setPlayerHand([]);
    setDealerHand([]);
    setDeck([]);
    setGameState("idle");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-4">
      {gameState === "idle" && (
        <button
          onClick={handleDecide}
          className="text-4xl font-bold px-10 py-6 border rounded-lg hover:bg-gray-200 transition"
        >
          DECIDE
        </button>
      )}

      {gameState === "playerTurn" && (
        <div className="flex flex-col items-center gap-6">
          <div className="text-2xl font-semibold mb-2">Your turn</div>

          <div className="flex gap-16" style={{ perspective: "600px" }}>
            {/* Player hand */}
            <div className="flex flex-col items-center gap-2">
              <div className="font-semibold">Your hand:</div>
              <div className="flex gap-2">
                {playerHand.map((c, idx) => (
                  <CardBox key={idx} name={c.name} suit={c.suit} />
                ))}
              </div>
              <div>Total: {evaluateHand(playerHand)}</div>
            </div>

            {/* Dealer shows */}
            <div className="flex flex-col items-center gap-2">
              <div className="font-semibold">Dealer shows:</div>
              <div className="flex gap-2">
                {dealerHand.length > 0 && (
                  <CardBox name={dealerHand[0].name} suit={dealerHand[0].suit} />
                )}
                {dealerHand.length > 1 && (
                  <CardBox
                    name={dealerHand[1].name}
                    suit={dealerHand[1].suit}
                    hidden
                    reveal={false} // Always false during playerTurn
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={handleHit}
              className="px-6 py-3 border rounded-lg hover:bg-gray-200 transition"
            >
              HIT
            </button>
            <button
              onClick={handleStand}
              className="px-6 py-3 border rounded-lg hover:bg-gray-200 transition"
            >
              STAND
            </button>
          </div>
        </div>
      )}

      {gameState === "resolution" && (
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-semibold">Outcome: {outcome}</div>

          <div className="flex gap-16 mt-2" style={{ perspective: "600px" }}>
            {/* Player hand */}
            <div className="flex flex-col items-center gap-2">
              <div className="font-semibold">Your hand:</div>
              <div className="flex gap-2">
                {playerHand.map((c, idx) => (
                  <CardBox key={idx} name={c.name} suit={c.suit} />
                ))}
              </div>
              <div>Total: {evaluateHand(playerHand)}</div>
            </div>

            {/* Dealer hand */}
            <div className="flex flex-col items-center gap-2">
              <div className="font-semibold">Dealer hand:</div>
              <div className="flex gap-2">
                {dealerHand.map((c, idx) => (
                  <CardBox key={idx} name={c.name} suit={c.suit} reveal />
                ))}
              </div>
              <div>Total: {evaluateHand(dealerHand)}</div>
            </div>
          </div>

          <button
            onClick={handleRestart}
            className="px-6 py-3 border rounded-lg hover:bg-gray-200 transition mt-4"
          >
            DECIDE AGAIN
          </button>
        </div>
      )}
    </main>
  );
}
