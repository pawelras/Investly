import { useState } from "react";
import Top10HoldingsChart from "./TopTenHoldingsChart"; // make sure file name matches!
import StockChart from "./StockChart";

export default function Holdings() {
  const [selectedSymbol, setSelectedSymbol] = useState(null);

  return (
    <div className="bg-light my-10 px-5 lg:px-50 space-y-6">
      {/* Pass the callback into Top10HoldingsChart */}
      <Top10HoldingsChart onSelectSecurity={setSelectedSymbol} />

      {/* Pass the selected symbol into StockChart */}
      <StockChart symbol={selectedSymbol} />
    </div>
  );
}
