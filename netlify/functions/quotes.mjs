import yahooFinance from "yahoo-finance2";

export async function handler() {
  const symbols = [
    "^GSPC", "^DJI", "^IXIC", "^RUT",
    "AAPL", "MSFT", "GOOG", "AMZN", "TSLA",
    "META", "NVDA", "NFLX", "AMD", "INTC",
    "DIS", "JPM"
  ];

  try {
    const results = await yahooFinance.quote(symbols);

    // Always return an array
    const quotes = Array.isArray(results) ? results : [results];

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(quotes),
    };
  } catch (error) {
    console.error("YahooFinance2 error:", error);
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: error.message }),
    };
  }
}
