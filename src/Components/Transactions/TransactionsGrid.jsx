import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';

// Adjust the path to your transactions.json as needed
const DATA_URL = '../../data/transactions.json';

const TransactionsGrid = () => {
    const [rows, setRows] = useState([]);
    const [columns, setColumns] = useState([]);

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
                        }));
                    setColumns(cols);
                    // DataGrid requires an 'id' field for each row
                    setRows(data);
                }
            });
    }, []);

    return (
        <div style={{ height: 500, width: '100%' }}>
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