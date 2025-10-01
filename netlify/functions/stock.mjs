import yahooFinance from "yahoo-finance2";

export async function handler(event) {
  try {
    const { symbol } = event.queryStringParameters;
    if (!symbol) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Missing symbol parameter" }),
      };
    }

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
