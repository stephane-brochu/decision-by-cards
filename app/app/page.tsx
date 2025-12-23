"use client";

import { useState, useEffect } from "react";

type GameState = "idle" | "dealing" | "playerTurn" | "dealerTurn" | "resolution";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("idle");
  const [outcome, setOutcome] = useState<string>("");

  const handleDecide = () => {
    setGameState("dealing");
  };

  const handleHit = () => {
    // Placeholder: for now, just transition to dealer turn
    setGameState("dealerTurn");
  };

  const handleStand = () => {
    setGameState("dealerTurn");
  };

  // Auto transition: Dealing → Player Turn
  useEffect(() => {
    if (gameState === "dealing") {
      const timer = setTimeout(() => {
        setGameState("playerTurn");
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  // Auto transition: Dealer Turn → Resolution
  useEffect(() => {
    if (gameState === "dealerTurn") {
      const timer = setTimeout(() => {
        // Random placeholder outcome for demo
        const outcomes = ["Proceed", "Do not proceed", "Try again"];
        setOutcome(outcomes[Math.floor(Math.random() * outcomes.length)]);
        setGameState("resolution");
      }, 1000); // 1 second to simulate dealer
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  const handleRestart = () => {
    setOutcome("");
    setGameState("idle");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6">
      {gameState === "idle" && (
        <button
          onClick={handleDecide}
          className="text-4xl font-bold px-10 py-6 border rounded-lg"
        >
          DECIDE
        </button>
      )}

      {gameState === "dealing" && (
        <div className="text-2xl font-semibold">Dealing cards…</div>
      )}

      {gameState === "playerTurn" && (
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-semibold">Your turn</div>
          <div className="flex gap-4">
            <button
              onClick={handleHit}
              className="px-6 py-3 border rounded-lg"
            >
              HIT
            </button>
            <button
              onClick={handleStand}
              className="px-6 py-3 border rounded-lg"
            >
              STAND
            </button>
          </div>
        </div>
      )}

      {gameState === "dealerTurn" && (
        <div className="text-2xl font-semibold">Dealer is playing…</div>
      )}

      {gameState === "resolution" && (
        <div className="flex flex-col items-center gap-4">
          <div className="text-2xl font-semibold">Outcome: {outcome}</div>
          <button
            onClick={handleRestart}
            className="px-6 py-3 border rounded-lg"
          >
            DECIDE AGAIN
          </button>
        </div>
      )}
    </main>
  );
}
