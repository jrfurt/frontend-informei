import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react';
import { useEffect } from 'react';
import agendamentos from '../services/agendamentos';

const columns = [
  { field: 'data', headerName: 'Data', width: 130 },
  { field: 'nome', headerName: 'Nome', width: 250 },
  { field: 'nome_servico', headerName: 'Serviço', width: 130 },
];

export default function DataTable() {
  const [rows, setRows] = useState(null);

  useEffect(() => {
    agendamentos.getAll().then((res) => {
      setRows(res.data);
    });
  }, []);

  if (!rows) return null;

  return (
    <>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          getRowId={(rows) => rows.id_agendamento}
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
