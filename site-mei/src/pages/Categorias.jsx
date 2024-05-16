import { Typography } from '@mui/material';
import DataTableCategorias from '../components/DataTableCategorias';

export default function Clientes() {
  return (
    <div>
      <Typography variant="h4" component="h1" mb={2} mx={1}>
        Categorias
      </Typography>
      <DataTableCategorias />
    </div>
  );
}