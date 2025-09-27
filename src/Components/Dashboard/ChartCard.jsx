import MarketValueChart from "./MarketValueChart";

export default function ChartCard() {
  return (
    <div className="border bg-light-gray rounded-lg p-4 h-full flex flex-col">
      <h3 className="text-sm font-semibold mb-2">Performance</h3>
      <div className="flex-1 bg-gray-100 flex items-center justify-center text-gray-400 text-sm">
        <MarketValueChart />
      </div>
    </div>
  );
}
git