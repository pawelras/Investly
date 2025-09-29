import React, { useEffect, useState } from 'react';
import InvestmentDataGrid from '../Shared/InvestmentDataGrid';

// Adjust the path to your transactions.json as needed
const DATA_URL = '../../data/transactions.json';

const TransactionsGrid = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((fetchedData) => setData(fetchedData))
      .catch((error) => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div style={{ height: 500, width: '100%' }}>
      <InvestmentDataGrid
        data={data}
        pageSize={10}
        rowCount={data.length}
      />
    </div>
  );
};

export default TransactionsGrid;