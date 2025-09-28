import * as React from "react";
import { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Typography } from "@mui/material";

export default function Transactions() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetch("../data/transactions.json")
      .then((res) => res.json())
      .then((json) => setRows(json))
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
      valueFormatter: (params) =>
        params.value !== undefined && params.value !== null
          ? `£${params.value.toFixed(2)}`
          : "—",
    },
    {
      field: "amount",
      headerName: "Amount (£)",
      type: "number",
      minWidth: 140,
      flex: 1,
      align: "right",
      headerAlign: "right",
      valueFormatter: (params) =>
        params.value !== undefined && params.value !== null
          ? `£${params.value.toLocaleString()}`
          : "—",
    },
    { field: "account", headerName: "Account", minWidth: 150, flex: 1.5 },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "white",
        borderRadius: 2,
        p: 2,
        boxShadow: 1, // light shadow like other cards
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ fontWeight: 600, color: "text.secondary" }}
      >
        Recent Transactions
      </Typography>

      {/* Scrollable container for small screens */}
      <Box sx={{ width: "100%", overflowX: "auto" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          autoHeight
          pageSize={5}
          rowsPerPageOptions={[5]}
          disableSelectionOnClick
          getRowId={(row) => row.id}
          sx={{
            minWidth: 600, // 👈 ensures table won't shrink too much
          }}
        />
      </Box>
    </Box>
  );
}
