---

## 🚀 Custom Skill: AI Signal Analyzer Module

This fork introduces a modular AI Signal Assistant located in `/ai-signal`.

### New Capability
Analyze token liquidity, trading volume, assign risk score, and provide trading recommendation.

### Endpoint
GET /api/analyze/:token

### Agent Instructions

1. Accept token symbol input.
2. Run signal generation engine.
3. Evaluate liquidity and volume.
4. Assign risk level (LOW / MEDIUM / HIGH).
5. Return trading recommendation (BUY / WAIT / AVOID).

### Example Usage

Input:
ETH

Output:
- Liquidity score
- Volume score
- Risk level
- Recommendation