import { Typography } from '@mui/material';
import DataTable from '../components/DataTableServicos';
import FormDialog from '../components/FormDialog';

export default function Servicos() {
  return (
    <div>
      <Typography variant="h4" component="h1" mb={2} mx={1}>
        Serviços
      </Typography>
      <DataTable buttonForm={<FormDialog buttonTitle="Cadastrar Serviço" />} />
    </div>
  );
}
