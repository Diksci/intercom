import axios from "axios";
import readline from "readline";

async function findCoinId(input: string): Promise<string | null> {
  try {
    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/search",
      {
        params: { query: input }
      }
    );

    if (!data.coins || data.coins.length === 0) {
      return null;
    }

    // Ambil hasil pertama paling relevan
    return data.coins[0].id;
  } catch {
    return null;
  }
}

async function analyzeToken(input: string) {
  try {
    const coinId = await findCoinId(input);

    if (!coinId) {
      console.log("❌ Token tidak ditemukan");
      return;
    }

    const { data } = await axios.get(
      "https://api.coingecko.com/api/v3/simple/price",
      {
        params: {
          ids: coinId,
          vs_currencies: "usd",
          include_24hr_change: true
        }
      }
    );

    if (!data[coinId]) {
      console.log("❌ Data harga tidak ditemukan");
      return;
    }

    const price = data[coinId].usd;
    const change = data[coinId].usd_24h_change;

    let aiSignal = "HOLD";
    if (change > 2) aiSignal = "BUY";
    if (change < -2) aiSignal = "SELL";

    let riskScore = "Low";
    if (Math.abs(change) > 3) riskScore = "Medium";
    if (Math.abs(change) > 8) riskScore = "High";

    console.log("\n📊 ===== TOKEN ANALYSIS =====");
    console.log("Token:", coinId.toUpperCase());
    console.log("Price: $", price);
    console.log("24h Change:", change.toFixed(2) + "%");
    console.log("AI Signal:", aiSignal);
    console.log("Risk Score:", riskScore);
    console.log("=============================\n");
  } catch (error: any) {
    console.log("❌ Gagal fetch data:", error.message);
  }
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askToken() {
  rl.question("Masukkan token (contoh: BTC, Ethereum, Solana): ", async (answer) => {
    await analyzeToken(answer);
    askToken();
  });
}

console.log("🚀 Intercom AI Signal Assistant (Full Token Support)");
askToken();
