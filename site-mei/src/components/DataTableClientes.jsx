import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import clienteService from '../services/clientes';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nome', width: 130 },
  { field: 'lastName', headerName: 'Sobrenome', width: 130 },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    width: 90,
  },
];

const rows = clienteService.getAll();

export default function DataTable() {
  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
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
