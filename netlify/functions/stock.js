import yahooFinance from "yahoo-finance2";

export async function handler(event) {
  const { symbol = "AAPL" } = event.queryStringParameters;

  try {
    // Use a valid range/interval combo
    const result = await yahooFinance.chart(symbol, {
      period1: "2023-01-01",  // start date (or omit for default)
      interval: "1d",         // valid: "1d", "1wk", "1mo"
      range: "1mo"            // valid: "1d", "5d", "1mo", "3mo", "6mo", "1y", "5y", "max"
    });

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (err) {
    console.error("Yahoo error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
