import { Typography } from '@mui/material';
import DataTableAgendamentos from '../components/DataTableAgendamentos';

export default function Pedidos() {
  return (
    <div>
      <Typography variant="h4" component="h1" mb={2} mx={1}>
        Agendamentos
      </Typography>
      <DataTableAgendamentos />
    </div>
  );
}
