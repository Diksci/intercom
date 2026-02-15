# AI Signal Analyzer Skill

This fork extends Intercom with a real-time crypto signal engine.

---

## Skill Name
ai_signal_analyzer

## Description
Fetch real-time token data and generate structured trading signal.

---

## Input Format (Agent Request)

{
  "type": "signal",
  "token": "ETH"
}

---

## Output Format (Agent Response)

{
  "type": "signal_result",
  "token": "ETH",
  "price_usd": number,
  "change_24h": number,
  "risk": "LOW | MEDIUM | HIGH",
  "recommendation": "BUY | WAIT | AVOID"
}

---

## Agent Instructions

1. Accept token symbol or name.
2. Resolve CoinGecko ID via search API.
3. Fetch price + 24h change.
4. Calculate:
   - Risk level (volatility based)
   - Trading recommendation
5. Return structured JSON.
6. Never execute trades.
7. Read-only analysis only.

---

## Execution Modes

- CLI Mode (VSCode)
- REST API Mode
- SC-Bridge Agent Mode

TTY not allowed in agent mode.
