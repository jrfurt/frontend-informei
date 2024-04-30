import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import clienteService from '../services/clientes';
import { useState } from 'react';
import { useEffect } from 'react';

const columns = [
  { field: 'id_cliente', headerName: 'ID', width: 70 },
  {
    field: 'fullName',
    headerName: 'Nome',
    width: 200,
    valueGetter: (value, row) => `${row.nome || ''} ${row.sobrenome || ''}`,
  },
  { field: 'email', headerName: 'Email', width: 250 },
  { field: 'telefone', headerName: 'Telefone', width: 130 },
];

export default function DataTable() {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    clienteService.getAll().then((res) => {
      setRows(res.data);
    });
  }, []);

  if (!rows) return null;

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          getRowId={(rows) => rows.id_cliente}
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
