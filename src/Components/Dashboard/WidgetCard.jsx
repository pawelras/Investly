import PortfolioPieChart from "./PortfolioPieChart";


export default function WidgetCard() {
  return (
    <div className="border rounded-lg p-4">
      <div className="h-16 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        <PortfolioPieChart />
      </div>
    </div>
  );
}
