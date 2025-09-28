import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function PortfolioPieChart() {
  // Sample portfolio breakdown in %
  const data = [
    { name: "Stocks", value: 45 },
    { name: "Bonds", value: 25 },
    { name: "Real Estate", value: 20 },
    { name: "Cash", value: 10 },
  ];

  // Custom colors for each slice
  const COLORS = ["#6B7B8C", "#4F77A3", "#8FD6C8", "#F28B82"];

  return (
    <div className="w-full h-80">
      <h3 className="text-sm font-semibold mb-2">Portfolio Mix</h3>
      <ResponsiveContainer>
        <PieChart margin={{ top: 20, bottom: 10 }}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60} // 👈 donut style
            outerRadius={100}
            labelLine={false} // 👈 no label lines
            label={({ percent }) => `${(percent * 100).toFixed(0)}%`} // 👈 only % inside
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
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
