"use client";

import { useState, useEffect } from "react";

type CardBoxProps = {
  name: string;
  suit: string;
  hidden?: boolean;   // Is the card initially hidden?
  reveal?: boolean;   // Should the card be revealed now?
};

export default function CardBox({ name, suit, hidden = false, reveal = false }: CardBoxProps) {
  const [flipped, setFlipped] = useState(!hidden);

  useEffect(() => {
    if (reveal) {
      setFlipped(true);
    }
  }, [reveal]);

  return (
    <div
      className={`w-12 h-16 border rounded-lg flex items-center justify-center text-lg font-semibold
        bg-white shadow-sm transition-transform duration-500 ease-in-out transform
        ${flipped ? "" : "rotate-y-180 bg-gray-200"}
      `}
      style={{ perspective: "600px" }}
    >
      {flipped ? (
        <div className="flex flex-col items-center justify-center">
          <span>{name}</span>
          <span>{suit}</span>
        </div>
      ) : (
        <div className="flex items-center justify-center w-full h-full text-xl">?</div>
      )}
    </div>
  );
}
