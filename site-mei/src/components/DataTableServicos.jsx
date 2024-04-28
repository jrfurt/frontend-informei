import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import clienteService from '../services/clientes';
import { Box } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'Nome', editable: true, width: 130 },
  { field: 'lastName', headerName: 'Sobrenome', editable: true, width: 130 },
  {
    field: 'age',
    headerName: 'Idade',
    type: 'number',
    editable: true,
    width: 90,
  },
];

const rows = clienteService.getAll();

export default function DataTable({ buttonForm }) {
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
      <Box sx={{ display: 'flex', justifyContent: 'end' }} mt={3}>
        {buttonForm}
      </Box>
    </>
  );
}
