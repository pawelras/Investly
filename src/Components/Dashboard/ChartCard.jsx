import MarketValueChart from "./MarketValueChart";
import TileTitle from "../Shared/TileTitle";

export default function ChartCard() {
  return (
    <div className=" rounded-lg h-full flex flex-col">
      <TileTitle hidden={true} title="Portfolio Valuation" redirectUrl="/" buttonLabel="View Details" />
      <div className="flex-1  flex items-center justify-center text-gray-400 text-sm">
        <MarketValueChart />
      </div>
    </div>
  );
}
