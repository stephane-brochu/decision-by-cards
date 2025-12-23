PRD v1 — Decision by Cards (Working Title)
1. Overview

Decision by Cards is a lightweight web interface designed to help users resolve trivial, low-stakes decisions by playing a single, simplified hand of blackjack. The product externalizes indecision through a familiar probabilistic mechanic and produces a clear directive outcome in under 30 seconds.

This is not a game, gambling product, or entertainment experience. It is a decision aid.

2. Problem Statement

Users frequently experience decision paralysis around low-impact choices (e.g., “Should I go out?”, “Should I start this task now?”). Traditional productivity tools are overkill for these moments, while randomizers feel arbitrary and unengaging.

There is an opportunity to:

Reduce cognitive load

Provide a deterministic outcome

Do so in a playful but bounded way

3. Goals & Success Criteria
Primary Goal

Enable a user to reach a decision outcome quickly and confidently.

Success Metrics (Qualitative / MVP)

User reaches an outcome in < 30 seconds

Flow is understandable without instructions

User can restart and re-decide without friction

4. Non-Goals (Explicitly Out of Scope)

Gambling mechanics (chips, money, betting)

Full blackjack ruleset (splits, double down, insurance)

Animations, sound, or visual card assets

User accounts or persistence

Statistics, history, or optimization

5. Target User

Anyone facing low-stakes, reversible decisions

Users who respond well to externalized decision-making

Not targeted at gamblers or competitive players

6. Core User Flow (MVP)

Landing State

Single primary CTA: DECIDE

Minimal supporting copy (e.g., “Let the cards decide.”)

Initial Deal

User is dealt 2 cards

Dealer is dealt 1 visible card

Card values and hand totals are displayed numerically

Decision Phase

User can choose:

HIT

STAND

Resolution

If user busts → immediate outcome

If user stands → dealer auto-plays to completion

Outcome State

Clear directive message displayed

Reset

CTA: DECIDE AGAIN

7. Decision Framework
Blackjack Result	Decision Outcome
User wins	Proceed with decision
Dealer wins	Do not proceed
Push (tie)	Undecided / Try again

This mapping must be explicit and consistent across the experience.

8. Functional Requirements
Required

Generate a standard 52-card deck (suits optional, values required)

Deal cards randomly without replacement

Calculate hand totals with Ace logic (1 or 11)

Enforce:

User hit/stand rules

Dealer hits until total ≥ 17

Determine win / loss / push

Display outcome clearly

Error Handling

Prevent invalid actions (e.g., hit after stand)

Graceful reset on edge cases

9. UX & UI Principles

Minimal visual hierarchy

Large, obvious primary actions

No unnecessary copy

No animations required for MVP

“Ugly but clear” is acceptable

10. Technical Constraints (MVP)

Client-side only

No backend required

Deterministic, testable game logic

Logic separated from UI components

11. Future Considerations (Explicitly Not in v1)

Decision labeling (user inputs what they’re deciding)

Alternate decision mappings

Accessibility enhancements

Theming or tone variants

Persistence or sharing

12. Open Questions (Post-MVP)

Does ambiguity (push) frustrate or reinforce trust?

Is blackjack the optimal mechanic vs alternatives?

Does minimalism improve or reduce confidence in outcome?