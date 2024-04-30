import { BrowserRouter, Route, Routes } from "react-router-dom";
import SideBar from './components/SideBar';
import Dashboard from "./pages/Dashboard";
import Agendamentos from "./pages/Agendamentos";
import Clientes from "./pages/Clientes";
import Servicos from "./pages/Servicos";
import Login from "./pages/Login";
import CadastrarMei from "./pages/CadastrarMei";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SideBar />}>
          <Route index element={<Dashboard />} />
          <Route path="agendamentos" element={<Agendamentos />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="servicos" element={<Servicos />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="cadastrar" element={<CadastrarMei />} />
      </Routes>
    </BrowserRouter>
  );
}