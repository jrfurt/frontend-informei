import { Typography } from '@mui/material';
import DataTable from '../components/DataTableServicos';

export default function Pedidos() {
  return (
    <div>
      <Typography variant="h4" component="h1" mb={2} mx={1}>
        Pedidos
      </Typography>
      <DataTable buttonTitle='Cadastrar cliente' />
    </div>
  );
}
