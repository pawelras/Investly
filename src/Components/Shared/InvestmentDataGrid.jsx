import React, { useMemo, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const InvestmentDataGrid = ({ data = [], pageSize = 10, ...otherProps }) => {
  // Use controlled pagination model with state
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize });

  // Update pagination model if the passed pageSize prop changes
  useEffect(() => {
    setPaginationModel((prev) => ({ ...prev, pageSize }));
  }, [pageSize]);

  const columns = useMemo(() => {
    if (data.length > 0) {
      return Object.keys(data[0])
        .filter((key) => key !== 'id')
        .map((key) => ({
          field: key,
          headerName: key.charAt(0).toUpperCase() + key.slice(1),
          flex: 1,
        }));
    }
    return [];
  }, [data]);

  // Ensure the current pageSize is included in the rowsPerPageOptions
  const defaultOptions = [10, 25, 50];
  const pageSizeOptions = defaultOptions.includes(paginationModel.pageSize)
    ? defaultOptions
    : [paginationModel.pageSize, ...defaultOptions].sort((a, b) => a - b);

  return (
    <div style={{ maxheight: 800, width: '100%', height: 'auto' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        pagination
        paginationModel={paginationModel}
        onPaginationModelChange={setPaginationModel}
        rowsPerPageOptions={pageSizeOptions}
        rowCount={data.length}
        {...otherProps}
      />
    </div>
  );
};

export default InvestmentDataGrid;
