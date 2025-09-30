import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useLocation, useNavigate } from 'react-router-dom';
import FilterListIcon from '@mui/icons-material/FilterList';
import CloseIcon from '@mui/icons-material/Close';
import { Box, IconButton } from '@mui/material';

// Adjust the path to your transactions.json as needed
const DATA_URL = '../../data/transactions.json';

// Helper hook to parse query params
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const TransactionsGrid = () => {
  const [rows, setRows] = useState([]);
  const [columns, setColumns] = useState([]);
  const query = useQuery();
  const accountName = query.get("account");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(DATA_URL)
      .then((res) => res.json())
      .then((data) => {
        if (data.length > 0) {
          // Exclude 'id' from columns
          const cols = Object.keys(data[0])
            .filter((key) => key !== 'id')
            .map((key) => ({
              field: key,
              headerName: key.charAt(0).toUpperCase() + key.slice(1),
              flex: 1,
              minWidth: 120,
            }));
          setColumns(cols);

          // Filter by account if query param exists
          const filteredData = accountName
            ? data.filter((row) => row.account === accountName)
            : data;

          // 🔹 Always sort by date descending
          const sortedData = [...filteredData].sort(
            (a, b) => new Date(b.date) - new Date(a.date)
          );

          setRows(sortedData);
        }
      });
  }, [accountName]);

  return (
    <div style={{ height: 600, width: '100%' }}>
      {accountName && (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            backgroundColor: '#f1f5f9',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            padding: '6px 12px',
            marginBottom: '8px',
          }}
        >
          <Box display="flex" alignItems="center" gap={1}>
            <FilterListIcon fontSize="small" color="action" />
            <span style={{ fontSize: '14px', color: '#333' }}>
              Showing transactions for <strong>{accountName}</strong>
            </span>
          </Box>
          <IconButton size="small" onClick={() => navigate('/transactions')}>
            <CloseIcon fontSize="small" />
          </IconButton>
        </Box>
      )}

      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={10}
        rowsPerPageOptions={[10, 25, 50]}
      />
    </div>
  );
};

export default TransactionsGrid;
