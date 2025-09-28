import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";

export default function RecentTransactions() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("../data/transactions.json")
      .then((res) => res.json())
      .then((json) => {
        // ✅ sort by date descending & keep only last 5
        const sorted = json
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 5);
        setRows(sorted);
      })
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  const columns = [
    { field: "date", headerName: "Date", minWidth: 120, flex: 1 },
    { field: "asset", headerName: "Asset", minWidth: 100, flex: 1 },
    { field: "type", headerName: "Type", minWidth: 80, flex: 1 },
    {
      field: "quantity",
      headerName: "Quantity",
      type: "number",
      minWidth: 100,
      flex: 1,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "price",
      headerName: "Price (£)",
      type: "number",
      minWidth: 120,
      flex: 1,
      align: "right",
      headerAlign: "right",
    },
    {
      field: "amount",
      headerName: "Amount (£)",
      type: "number",
      minWidth: 140,
      flex: 1,
      align: "right",
      headerAlign: "right",
    },
    { field: "account", headerName: "Account", minWidth: 150, flex: 1.5 },
  ];

  return (
    <>
      <div className="mb-4">
        <h3 className="text-sm font-semibold mb-2">Recent Transactions</h3>
      </div>

      <Box sx={{ width: "100%", overflowX: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          hideFooter // ✅ remove pager & footer
          disableSelectionOnClick
          getRowId={(row) => row.id}
          sx={{
            minWidth: 600,
            border: "1px solid #e0e0e0",
            borderRadius: 2,
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: "1px solid #e0e0e0",
              backgroundColor: "#f9fafb",
              fontWeight: 600,
            },
          }}
        />
      </Box>
    </>
  );
}
