import React, { useMemo } from 'react';
import { DataGrid } from '@mui/x-data-grid';

const InvestmentDataGrid = ({ data = [], pageSize = 10, ...otherProps }) => {
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

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={data}
        columns={columns}
        getRowId={(row) => row.id}
        pageSize={pageSize}
        rowsPerPageOptions={[pageSize, 25, 50]}
        {...otherProps}
      />
    </div>
  );
};

export default InvestmentDataGrid;
