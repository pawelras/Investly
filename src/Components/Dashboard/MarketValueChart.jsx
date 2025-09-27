import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
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
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
          </linearGradient>
        </defs>

        <CartesianGrid stroke="#8b8b8bff" strokeOpacity={0.4} vertical={false} />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip formatter={(val) => `£${val.toLocaleString()}`} />

        {/* Filled area */}
        <Area
          type="monotone"
          dataKey="value"
          stroke="none"
          fill="#DCEDF0"
        />

        {/* Line on top for crisp outline */}
        <Line
          type="monotone"
          dataKey="value"
          stroke="#002E4D"
          strokeWidth={2}
          dot={false}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
