import React, { useMemo, useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const InvestmentDataGrid = ({ data = [], pageSize = 10, ...otherProps }) => {
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize });

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
          minWidth: 120, // ✅ ensures readability on mobile
        }));
    }
    return [];
  }, [data]);

  const defaultOptions = [10, 25, 50];
  const pageSizeOptions = defaultOptions.includes(paginationModel.pageSize)
    ? defaultOptions
    : [paginationModel.pageSize, ...defaultOptions].sort((a, b) => a - b);

  return (
    <div className="w-full max-h-[800px] h-auto overflow-x-auto">
      <div className="min-w-[600px]"> {/* ✅ gives grid breathing room on mobile */}
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.id}
          pagination
          paginationModel={paginationModel}
          onPaginationModelChange={setPaginationModel}
          rowsPerPageOptions={pageSizeOptions}
          rowCount={data.length}
          autoHeight
          {...otherProps}
        />
      </div>
    </div>
  );
};

export default InvestmentDataGrid;
