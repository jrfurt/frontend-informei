import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import cadastrarMei from '../services/cadastrarMei';

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {'Copyright © '}
      <Link color="inherit" href="http://localhost:3000/">
        InforMei
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function CadastrarMei() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form = {
      nome: data.get('nome'),
      cnpj: data.get('cnpj'),
      rua: data.get('rua'),
      numero: data.get('numero'),
      bairro: data.get('bairro'),
      cidade: data.get('cidade'),
      uf: data.get('uf'),
      telefone: data.get('telefone'),
      email: data.get('email'),
      senha: data.get('senha'),
    };

    cadastrarMei
      .cadastrar(form)
      .then((res) => {
        console.log(res.data);
        if (res.data.login) {
          localStorage.setItem('user', res.data.user);
          window.location.href = '/';
        }
      })
      .catch(() => alert('Erro ao registrar!'));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Cadastre-se
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="nome"
                  required
                  fullWidth
                  id="nome"
                  label="Nome MEI"
                  size="small"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="cnpj"
                  label="CNPJ"
                  size="small"
                  name="cnpj"
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  required
                  fullWidth
                  id="rua"
                  label="Rua"
                  name="rua"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  id="numero"
                  label="Nº"
                  name="numero"
                  type="number"
                  size="small"
                  autoComplete="numero"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="bairro"
                  label="Bairro"
                  name="bairro"
                  size="small"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  id="cidade"
                  label="Cidade"
                  name="cidade"
                  size="small"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  fullWidth
                  id="uf"
                  label="UF"
                  name="uf"
                  size="small"
                />
              </Grid>
              <Grid item xs={9}>
                <TextField
                  required
                  fullWidth
                  id="telefone"
                  label="Telefone"
                  name="telefone"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="E-mail"
                  name="email"
                  size="small"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="senha"
                  label="Senha"
                  type="password"
                  id="senha"
                  size="small"
                  autoComplete="senha"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Cadastrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Já tem conta? Faça seu Login
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
