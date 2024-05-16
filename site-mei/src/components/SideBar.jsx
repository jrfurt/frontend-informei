import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { ListItemButton, ListItemIcon } from '@mui/material';
import {
  EmojiObjectsOutlined,
  HomeRepairServiceOutlined,
  ListAltOutlined,
  PeopleAltOutlined,
  CategoryOutlined,
} from '@mui/icons-material';
import { Link, Outlet } from 'react-router-dom';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <ListItemIcon>
            <EmojiObjectsOutlined sx={{ color: 'white' }} />
          </ListItemIcon>
          <Typography variant="h6" noWrap component="div">
            GarerShop
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Link style={{ textDecoration: 'none', color: '#333' }} to={'/'}>
              <ListItemButton>
                <ListItemIcon>
                  <ListAltOutlined />
                </ListItemIcon>
                Agendamentos
              </ListItemButton>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: '#333' }}
              to={'/clientes'}
            >
              <ListItemButton>
                <ListItemIcon>
                  <PeopleAltOutlined />
                </ListItemIcon>
                Clientes
              </ListItemButton>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: '#333' }}
              to={'/servicos'}
            >
              <ListItemButton>
                <ListItemIcon>
                  <HomeRepairServiceOutlined />
                </ListItemIcon>
                Serviços
              </ListItemButton>
            </Link>
            <Link
              style={{ textDecoration: 'none', color: '#333' }}
              to={'/categorias'}
            >
              <ListItemButton>
                <ListItemIcon>
                  <CategoryOutlined />
                </ListItemIcon>
                Categorias
              </ListItemButton>
            </Link>
          </List>
          <Divider />
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}
