import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import servicosMei from '../services/servicosMei';
import { MenuItem } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';

export default function DialogCadastrarServico({ buttonTitle }) {
  const [open, setOpen] = React.useState(false);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    servicosMei.getAllCategorias().then((res) => {
      setCategorias(res.data);
    });
  }, []);

  if (!categorias) return null;

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
            const user = localStorage.getItem('user');
            const data = new FormData(event.currentTarget);
            const form = {
              nome_servico: data.get('nome_servico'),
              valor: data.get('valor'),
              id_mei: user,
              id_categoria: categoriaSelecionada,
            };

            servicosMei
              .createServico(form)
              .then((res) => {
                if (res.data) {
                  window.location.href = '/servicos';
                }
              })
              .catch(() => alert('Erro ao cadastrar serviço'));

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
          <TextField
            select
            required
            margin="dense"
            id="categoria"
            name="categoria"
            label="Selecione a Categoria"
            fullWidth
          >
            {categorias.map((categoria) => (
              <MenuItem
                key={categoria.id_categoria}
                value={categoria.id_categoria}
                onClick={() => setCategoriaSelecionada(categoria.id_categoria)}
              >
                {categoria.categoria}
              </MenuItem>
            ))}
          </TextField>
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
