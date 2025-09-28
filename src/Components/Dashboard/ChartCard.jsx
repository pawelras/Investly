import MarketValueChart from "./MarketValueChart";

export default function ChartCard() {
  return (
    <div className=" rounded-lg p-4 h-full flex flex-col">
      <h3 className="text-sm font-semibold mb-2">Portfolio Valuation</h3>
      <div className="flex-1  flex items-center justify-center text-gray-400 text-sm">
        <MarketValueChart />
      </div>
    </div>
  );
}
