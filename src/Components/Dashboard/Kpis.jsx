import { useEffect, useState } from "react";
import StatCard from "./StatCard";

export default function Kpis() {
  const [kpis, setKpis] = useState([]);

  useEffect(() => {
    fetch("../data/kpis.json")
      .then((res) => res.json())
      .then((data) => setKpis(data))
      .catch((err) => console.error("Error fetching KPIs:", err));

    console.log(kpis);
  }, []);

  if (!kpis.length) return <div>Loading...</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      {kpis.map((kpi) => {
        // decide style based on growth
        const growthClass =
          kpi.growth < 0
            ? "text-red-500"
            : kpi.growth > 0
              ? "text-green-500"
              : "text-gray-500";

        return (
          <StatCard
            key={kpi.id}
            label={kpi.label}
            value={`$${kpi.value.toLocaleString()}`}
            subtext={`${kpi.growth > 0 ? "+" : ""}${kpi.growth}%`}
            valueClass={growthClass}
          />
        );
      })}
    </div>
  );
}
