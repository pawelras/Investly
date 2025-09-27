import { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function MarketValueChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../data/marketValue.json")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid
            stroke="#8b8b8bff"
            strokeOpacity={0.4}
            vertical={false}
          />

          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip formatter={(val) => `£${val.toLocaleString()}`} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#2563eb"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
