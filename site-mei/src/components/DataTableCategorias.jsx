import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import servicosMei from '../services/servicosMei';

const columns = [
  { field: 'id_categoria', headerName: 'ID', width: 70 },
  { field: 'categoria', headerName: 'Categoria', width: 250 },
];

export default function DataTable() {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    servicosMei.getAllCategorias().then((res) => {
      setRows(res.data);
    });
  }, []);

  if (!rows) return null;

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          getRowId={(rows) => rows.id_categoria}
          rows={rows}
          columns={columns}
          editMode="row"
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </>
  );
}
