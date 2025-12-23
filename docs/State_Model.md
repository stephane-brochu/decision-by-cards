# State Model — Decision by Cards

## Purpose

This document defines the system states and transitions for **Decision by Cards**.  
It ensures predictable behavior, prevents invalid user actions, and provides a clear blueprint for implementation.

The application is modeled as a **finite state machine** with explicit transitions.

---

## State Overview

The system operates in one of the following states at all times:

1. Idle
2. Dealing
3. PlayerTurn
4. DealerTurn
5. Resolution

Only one state may be active at any given time.

---

## State Definitions

### 1. Idle

**Description**
- Initial state on page load
- No cards are in play

**UI**
- Primary CTA: `DECIDE`

**Permitted Actions**
- Start decision

**Transitions**
- `DECIDE` → Dealing

---

### 2. Dealing

**Description**
- A new deck is created
- Initial cards are dealt

**System Actions**
- Shuffle deck
- Deal 2 cards to player
- Deal 1 visible card to dealer
- Deal 1 hidden card to dealer

**UI**
- Cards appear immediately after dealing

**Transitions**
- Automatic → PlayerTurn

---

### 3. PlayerTurn

**Description**
- User evaluates their hand and chooses an action

**UI**
- Display player cards and total
- Display dealer’s visible card
- CTA buttons:
  - `HIT`
  - `STAND`

**Permitted Actions**
- Hit
- Stand

**Transitions**
- `HIT`:
  - If player total ≤ 21 → PlayerTurn
  - If player total > 21 → Resolution
- `STAND` → DealerTurn

---

### 4. DealerTurn

**Description**
- Dealer plays automatically according to predefined rules

**System Actions**
- Reveal dealer’s hidden card
- Dealer hits until total ≥ 17

**UI**
- Dealer cards and
