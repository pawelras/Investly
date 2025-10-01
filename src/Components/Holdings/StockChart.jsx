import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StockChart({ symbol }) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!symbol) return; // don’t fetch until we have one
    setData([]);
    setError(null);

    fetch(`/.netlify/functions/stock?symbol=${symbol}`)
      .then((res) => res.json())
      .then((json) => {
        console.log("Raw stock data:", json);

        if (Array.isArray(json.quotes)) {
          const formatted = json.quotes.map((q) => ({
            date: new Date(q.date).toLocaleDateString(),
            price: q.close,
          }));
          setData(formatted);
        } else {
          setError("Unexpected response format");
        }
      })
      .catch((err) => setError(err.message));
  }, [symbol]);

  if (!symbol) {
    return (
      <div className="w-full h-40 flex items-center justify-center text-gray-500 bg-white rounded shadow">
        Please select a security to see Market Data
      </div>
    );
  }

  if (error) return <div>Error: {error}</div>;
  if (!data.length) return <div>Loading chart for {symbol}...</div>;

  return (
    <div className="w-full h-96 p-4 pb-15 border rounded bg-white shadow">
      <h2 className="text-lg font-bold mb-6">Stock: {symbol}</h2>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis domain={["auto", "auto"]} tick={{ fontSize: 12 }} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#4F77A3"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
