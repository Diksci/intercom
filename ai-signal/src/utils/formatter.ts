import { SignalResult } from "../core/engine";

export function formatSignal(data: SignalResult): string {
  return `
📊 Token: ${data.token}
💧 Liquidity: ${data.liquidity}
📈 Volume: ${data.volume}
⚠️ Risk: ${data.risk}
🎯 Recommendation: ${data.recommendation}
`;
}