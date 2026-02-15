export interface SignalResult {
  token: string;
  liquidity: number;
  volume: number;
  risk: string;
  recommendation: string;
}

export function generateSignal(token: string): SignalResult {
  const liquidity = Math.floor(Math.random() * 100000);
  const volume = Math.floor(Math.random() * 50000);

  let risk = "HIGH";
  if (liquidity > 70000) risk = "LOW";
  else if (liquidity > 30000) risk = "MEDIUM";

  let recommendation = "AVOID";
  if (risk === "LOW") recommendation = "BUY";
  if (risk === "MEDIUM") recommendation = "WAIT";

  return {
    token,
    liquidity,
    volume,
    risk,
    recommendation,
  };
}