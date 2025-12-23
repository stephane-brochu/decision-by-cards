# Decision Framework — Blackjack-Based Resolution

## Purpose

This document defines the decision logic used by **Decision by Cards**.  
The goal is to provide a deterministic, understandable mechanism that converts a trivial decision into a clear directive outcome.

This framework intentionally favors simplicity and predictability over realism or completeness.

---

## Core Principle

The system uses a **single simplified hand of blackjack** to determine whether a user should proceed with a decision.

The user is not attempting to “win a game” — they are engaging with a probabilistic process to externalize choice.

---

## Decision Mapping

| Blackjack Result | Decision Outcome |
|------------------|------------------|
| User wins        | Do it |
| Dealer wins      | Don't do it |
| Push (tie)       | Undecided / Try again |

This mapping is fixed and non-configurable in MVP.

---

## Deck Rules

- A standard 52-card deck is used
- Suits are irrelevant
- Card values:
  - 2–10 = face value
  - J, Q, K = 10
  - Ace = 1 or 11 (see Hand Evaluation)

- Cards are drawn **without replacement**
- A new deck is generated for each decision attempt

---

## Initial Deal Rules

- User is dealt 2 cards
- Dealer is dealt 1 visible card
- Dealer’s second card is hidden until resolution

---

## User Actions

The user may take one of the following actions while their hand total is ≤ 21:

- **Hit**
  - Draw one additional card
  - Recalculate hand total
  - If total exceeds 21 → immediate loss

- **Stand**
  - User turn ends
  - Dealer plays automatically

No other actions are permitted (e.g., double down, split).

---

## Dealer Logic

Once the user stands:

- Dealer reveals hidden card
- Dealer must:
  - Hit until hand total ≥ 17
  - Stand on all totals ≥ 17 (including soft 17)

Dealer behavior is deterministic and non-intera
