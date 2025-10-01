// netlify/functions/stock.js

export async function handler(event) {
  try {
    const { symbol } = event.queryStringParameters;

    if (!symbol) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing symbol parameter" }),
      };
    }

    // ✅ Dynamic import works in CJS + ESM
    const yahooFinance = (await import("yahoo-finance2")).default;

    // Fetch historical quotes
    const quotes = await yahooFinance.historical(symbol, {
      period1: "2024-01-01",
      interval: "1d",
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ quotes }),
    };
  } catch (err) {
    console.error("Stock function error:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
