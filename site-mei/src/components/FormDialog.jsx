import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog({ buttonTitle }) {
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
        aria-labelledby='novo-cadastro'
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
            id="name"
            name="email"
            label="Nome do Serviço"
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="valor"
            name="email"
            label="Valor"
            type="number"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='error'>Cancelar</Button>
          <Button type="submit">Cadastrar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}