# Product Requirements Document – Decision by Cards

**Version:** 1.1 (Post V1 deployment)
**Owner:** Stephane Brochu
**Last Updated:** 2025-12-23

## 1. Purpose

Provide a simple, interactive web app where users can play a “decision by cards” game. Users draw cards for themselves and a dealer to get guidance on a decision (Proceed / Do not proceed / Try again).


---

## 2. Functional Requirements

| Feature            | Description                                                      | Status      |
| ------------------ | ---------------------------------------------------------------- | ----------- |
| Start Game         | “DECIDE” button initializes deck and hands                       | ✅ Completed |
| Player Actions     | HIT / STAND buttons allow drawing cards or ending turn           | ✅ Completed |
| Dealer Actions     | Dealer draws automatically until ≥17                             | ✅ Completed |
| Outcome Evaluation | Compare player and dealer totals to show guidance                | ✅ Completed |
| Restart Game       | “DECIDE AGAIN” button resets the game                            | ✅ Completed |
| Responsive Layout  | Dealer hand above player hand on mobile, side-by-side on desktop | ✅ Completed |
| Card Flip          | Dealer’s second card initially hidden, flips on resolution       | ✅ Completed |

---

## 3. Components

**Home Page (`page.tsx`)**

* Handles main game logic, state management, and layout.
* Uses `HandsLayout` subcomponent for displaying hands.

**CardBox (`components/CardBox.tsx`)**

* Props: `name`, `suit`, `hidden`, `reveal`.
* Displays card front or back with flip animation.
* Used for both player and dealer hands.

**Utils**

* `deck.ts` – Create and shuffle deck, define Card type.
* `handEvaluator.ts` – Evaluate hand totals, handle Ace adjustments.

---

## 4. Gameplay Flow

```
Idle -> Player Turn -> Resolution -> Idle
```

1. **Idle:** User clicks DECIDE → new deck + hands are created.
2. **Player Turn:** User HITs or STANDs. Dealer card partially hidden.
3. **Resolution:** Dealer completes turn, outcome displayed, hidden cards revealed.
4. **Restart:** User clicks DECIDE AGAIN → resets game.

---

## 5. Responsive Layout Diagram

```
Mobile Layout (flex-col):
[Dealer Hand]
[Player Hand]

Desktop Layout (flex-row):
[Dealer Hand]  [Player Hand]
```

---

## 6. Deployment

* Hosted via Vercel, branch `main`.
* Dependencies: Next.js 16.1.1, TypeScript.
* To run locally: `npm install` → `npm run dev`

---

## 7. Future Enhancements (Backlog)

* Add **sound effects** and card flip animation sounds.
* Option for **multiple cards decisions** (e.g., 3-card spread).
* Track **user decision history**.
* Improve accessibility (ARIA labels for cards, keyboard controls).
