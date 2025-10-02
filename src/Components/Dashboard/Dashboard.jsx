import StatCard from "./StatCard";
import ChartCard from "./ChartCard";
import NewsCard from "./NewsCard";
import WidgetCard from "./WidgetCard"; // donut chart
import Kpis from "./Kpis";
import RecentTransactions from "./RecentTransactions";

const Dashboard = () => {
  return (
    <div className='bg-light mb-10 px-5 lg:px-50'>
      <h2 className="text-4xl font-bold mb-4 text-gray-600">Dashboard</h2>

      {/* KPI row stays outside grid */}
      <Kpis />

      {/* 2x2 grid for charts and widgets */}
      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-full mt-4">
        {/* Row 1 left: Chart */}
        <div className="md:col-span-3 row-span-1 bg-white rounded-lg p-4 shadow">
          <ChartCard />
        </div>

        {/* Row 1 right: News */}
        <div className="row-span-1 bg-white rounded-lg p-4 shadow">
          <NewsCard />
        </div>

        {/* Row 2 left: Transactions */}
        <div className="md:col-span-3 row-span-1 bg-white rounded-lg p-4 shadow">
          
          <RecentTransactions />
        </div>

        {/* Row 2 right: Donut / Widget */}
        <div className="bg-white pb-10 px-4 pb-5 md:pb-4 rounded-lg row-span-1 shadow">
          <WidgetCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
