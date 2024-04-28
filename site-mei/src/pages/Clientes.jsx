import { Typography } from '@mui/material';
import DataTable from '../components/DataTableClientes';

export default function Clientes() {
  return (
    <div>
      <Typography variant="h4" component="h1" mb={2} mx={1}>
        Clientes
      </Typography>
      <DataTable />
    </div>
  );
}
