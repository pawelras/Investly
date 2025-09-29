import React, { useState, useEffect } from "react";
import InvestmentDataGrid from "../Shared/InvestmentDataGrid";
import TileTitle from "../Shared/TileTitle";

// Adjust the path to your transactions.json as needed
const DATA_URL = "../../data/transactions.json";

const RecentTransactions = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(DATA_URL)
      .then((response) => response.json())
      .then((transactions) => {
        // Sort transactions by date in descending order
        const sorted = transactions.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        // Take the first 5 transactions
        const recent = sorted.slice(0, 5);
        setData(recent);
      })
      .catch((error) => console.error("Error fetching transactions:", error));
  }, []);

  return (
    <>
      {/* <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Recent Transactions</h3>
      </div> */}

      <div >
        <TileTitle hidden={false} title="Recent Transactions" redirectUrl="/transactions" buttonLabel="View All" />
        <InvestmentDataGrid data={data} pageSize={data.length} hideFooter />
      </div>
    </>
  );
};

export default RecentTransactions;
