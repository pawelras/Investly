import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

export default function Top10HoldingsChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("../data/holdings.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading holdings:", err));
  }, []);

  const COLORS = [
    "#1E3A8A",
    "#355C87",
    "#4F77A3",
    "#24A39E",
    "#6B7280",
    "#8FBDD6",
    "#FF6A4D",
    "#FF8566",
    "#FF9E80",
    "#FFD6CC",
  ];

  // detect screen width for responsive tweaks
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-white rounded-lg p-4 shadow">
      <h2 className="text-xl font-bold mb-4 text-gray-700">Top 10 Holdings</h2>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Chart area */}
        <div className="w-full md:w-[60%]">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 20, left: 20, bottom: 40 }}
            >
              <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
              <XAxis
                dataKey="name"
                angle={-30}
                textAnchor="end"
                interval={0}
                height={isDesktop ? 100 : 60} // 👈 more space on desktop
                tick={{ fontSize: isDesktop ? 13 : 11 }}
              />
              <YAxis />
              <Tooltip
                formatter={(val, name) =>
                  name === "value"
                    ? `£${val.toLocaleString()}`
                    : `${val}%`
                }
              />
              <Bar dataKey="value" barSize={40} barCategoryGap="30%">
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend area */}
        <div className="w-full md:w-[40%] flex flex-col justify-center">
          <h3 className="text-md font-semibold mb-2 text-gray-600">Holdings</h3>
          <ul className="space-y-2 text-sm">
            {data.map((item, index) => (
              <li
                key={item.id}
                className="grid grid-cols-[1fr_auto_auto] items-center gap-4"
              >
                {/* Color + Name */}
                <span className="flex items-center">
                  <span
                    className="inline-block w-3 h-3 mr-2 rounded"
                    style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  ></span>
                  {item.name}
                </span>

                {/* Percentage */}
                <span className="text-gray-600 text-right w-12">
                  {item.percentage}%
                </span>

                {/* Value */}
                <span className="font-medium text-right">
                  £{item.value.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
