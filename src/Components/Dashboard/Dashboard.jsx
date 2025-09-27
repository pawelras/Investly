import StatCard from "./StatCard";
import ChartCard from "./ChartCard";
import NewsCard from "./NewsCard";
import WidgetCard from "./WidgetCard";
import Kpis from "./Kpis";

const Dashboard = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-4 text-gray-600">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-full">
        {/* Left side (3/4 width) */}
        <div className="md:col-span-3 flex flex-col h-full gap-4">
          <Kpis />
          <div className="flex-1">
            <ChartCard />
          </div>
        </div>

        {/* Right side (1/4 width) */}
        <div className="flex flex-col gap-4 h-full">
          <NewsCard className="flex-1" />
          <WidgetCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
