import { Typography } from '@mui/material';
import DataTableServicos from '../components/DataTableServicos';
import DialogCadastrarServico from '../components/DialogCadastrarServico';

export default function Servicos() {
  return (
    <div>
      <Typography variant="h4" component="h1" mb={2} mx={1}>
        Serviços
      </Typography>
      <DataTableServicos buttonForm={<DialogCadastrarServico buttonTitle="Cadastrar Serviço" />} />
    </div>
  );
}
