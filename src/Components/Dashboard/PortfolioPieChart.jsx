import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function PortfolioPieChart() {
  // Sample portfolio breakdown in %
  const data = [
    { name: "Stocks", value: 45 },
    { name: "Bonds", value: 25 },
    { name: "Real Estate", value: 20 },
    { name: "Cash", value: 10 },
  ];

  // Custom colors for each slice
  const COLORS = ["#2563eb", "#16a34a", "#f59e0b", "#ef4444"];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          {/* Tooltip on hover */}
          <Tooltip formatter={(val) => `${val}%`} />

          {/* Legend at bottom */}
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
