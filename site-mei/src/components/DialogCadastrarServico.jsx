import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DialogCadastrarServico({ buttonTitle }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        {buttonTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const form = new FormData(event.currentTarget);
            console.log({
              nome_servico: form.get('nome_servico'),
              valor: form.get('valor'),
            });
            handleClose();
          },
        }}
      >
        <DialogTitle>Cadastrar Novo Serviço</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Digite o nome e o valor do serviço a ser cadastrado
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="nome_servico"
            name="nome_servico"
            label="Nome do Serviço"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="valor"
            name="valor"
            label="Valor"
            type="number"
            inputProps={{
              step: '0.01',
            }}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancelar
          </Button>
          <Button type="submit">Cadastrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
