# Decision by Cards

A simple interactive card game built with **Next.js** and **TypeScript**, allowing players to make decisions based on a virtual card draw.

---

## Component Hierarchy

Home (page.tsx)
├─ HandsLayout (inline in page.tsx)
│ ├─ Dealer hand
│ │ └─ CardBox (for each dealer card)
│ └─ Player hand
│ └─ CardBox (for each player card)
├─ Buttons
│ ├─ DECIDE
│ ├─ HIT
│ ├─ STAND
│ └─ DECIDE AGAIN

yaml
Copy code

---

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [How to Play](#how-to-play)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Next Steps](#next-steps)
- [License](#license)

---

## Project Structure

/app
page.tsx # Main React component for the game
/components
CardBox.tsx # Card UI component (handles flipping and hidden state)
/utils
deck.ts # Functions and types for deck creation and shuffling
handEvaluator.ts # Function to calculate hand totals considering Aces
/public
favicon.ico # New favicon representing two cards

markdown
Copy code

### Key Components

#### `page.tsx`
- Handles all game logic:
  - Initial deal
  - Player actions (**HIT**, **STAND**)
  - Dealer actions
  - Outcome resolution
- Manages game state:
  - `idle` – Game not started
  - `playerTurn` – Player's turn to act
  - `resolution` – Dealer reveals hand and outcome
- Uses the `HandsLayout` helper for responsive hand rendering.
- Displays cards using the `CardBox` component.

#### `CardBox.tsx`
- Props:
  - `name`: Card rank (e.g., `"A"`, `"2"`, `"J"`)
  - `suit`: Card suit (e.g., `"♠"`, `"♥"`)
  - `hidden`: Whether the card is initially face-down
  - `reveal`: Whether the card should flip to show its face
- Handles flip animation and hidden state.

#### `deck.ts`
- `Card` type:
  ```ts
  type Card = {
    value: number;
    name: string;
    suit: string;
  }
createDeck() – Generates a full 52-card deck and shuffles it.

shuffle(deck) – Randomizes card order.

handEvaluator.ts
evaluateHand(hand) – Returns the hand's total value.

Adjusts Aces automatically to prevent busts.

Features
Interactive card-based decision-making game.

Mobile-responsive layout:

Dealer hand appears above player hand on mobile.

Hands are side-by-side on larger screens.

Animated card flipping for hidden dealer cards.

Clear outcome messages:

"Do it", "Don't do it", "Try again".

Restart button to start a new game.

Fully typed with TypeScript.

How to Play
Click DECIDE to start a game.

Player is dealt two cards; dealer shows one card.

Choose HIT to draw a card or STAND to end your turn.

Dealer completes their hand automatically.

Outcome is displayed based on hand totals.

Click DECIDE AGAIN to play a new round.

Getting Started
Prerequisites
Node.js v20+ recommended

npm v10+ recommended

Local Installation
bash
Copy code
git clone https://github.com/stephane-brochu/decision-by-cards.git
cd decision-by-cards
npm install
npm run dev
Open your browser at http://localhost:3000

Deployment
Deployed using Vercel

Ensure your repository structure is as follows:

bash
Copy code
/app
/components
/utils
/public
Production build:

bash
Copy code
npm run build
npm start