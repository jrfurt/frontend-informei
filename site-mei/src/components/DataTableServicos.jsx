import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import servicosMei from '../services/servicosMei';
import { Box } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

const columns = [
  { field: 'id_servico', headerName: 'ID', width: 70 },
  { field: 'nome_servico', headerName: 'Nome', editable: true, width: 130 },
  {
    field: 'valor',
    headerName: 'Valor (R$)',
    type: 'number',
    editable: true,
    width: 90,
  },
];

export default function DataTable({ buttonForm }) {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    servicosMei.getAll().then((res) => {
      setRows(res.data);
    });
  }, []);

  if (!rows) return null;

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          getRowId={(rows) => rows.id_servico}
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
