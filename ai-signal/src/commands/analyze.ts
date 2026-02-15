import { generateSignal } from "../core/engine";
import { formatSignal } from "../utils/formatter";

export function analyzeCommand(token: string): string {
  if (!token) return "Please provide a token symbol.";

  const result = generateSignal(token.toUpperCase());
  return formatSignal(result);
}