import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import Agendamentos from './pages/Agendamentos';
import Clientes from './pages/Clientes';
import Servicos from './pages/Servicos';
import Login from './pages/Login';
import CadastrarMei from './pages/CadastrarMei';
import Categorias from './pages/Categorias'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Agendamentos />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="servicos" element={<Servicos />} />
          <Route path="categorias" element={<Categorias />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<CadastrarMei />} />
      </Routes>
    </BrowserRouter>
  );
}
