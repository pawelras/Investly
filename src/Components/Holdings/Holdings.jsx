import { useState } from "react";
import Top10HoldingsChart from "./TopTenHoldingsChart"; // make sure file name matches!
import StockChart from "./StockChart";

export default function Holdings() {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  return (
    <div className="bg-light mb-10 px-5 lg:px-50 space-y-6">
      <h2 className="text-4xl font-bold mb-4 text-gray-600">Holdings</h2>
      {/* Pass the callback into Top10HoldingsChart */}
      <Top10HoldingsChart onSelectSecurity={setSelectedSymbol} />

      {/* Pass the selected symbol into StockChart */}
      <StockChart symbol={selectedSymbol} />
    </div>
  );
}
