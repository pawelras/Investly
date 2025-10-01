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

    // ✅ Use historical API (instead of chart)
    const result = await yahooFinance.historical(symbol, {
      period1: "2024-01-01", // start date
      interval: "1d",        // daily candles
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ quotes: result }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
