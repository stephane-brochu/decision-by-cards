"use client";

import { useState, useEffect } from "react";

type GameState = "idle" | "dealing" | "playerTurn";

export default function Home() {
  const [gameState, setGameState] = useState<GameState>("idle");

  const handleDecide = () => {
    setGameState("dealing");
  };

  // Auto-transition from dealing → playerTurn
  useEffect(() => {
    if (gameState === "dealing") {
      const timer = setTimeout(() => {
        setGameState("playerTurn");
      }, 500); // 0.5 second delay
      return () => clearTimeout(timer);
    }
  }, [gameState]);

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
            <button className="px-6 py-3 border rounded-lg">HIT</button>
            <button className="px-6 py-3 border rounded-lg">STAND</button>
          </div>
        </div>
      )}
    </main>
  );
}
