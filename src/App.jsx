import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import CriarCampanha from './pages/CriarCampanha';
import ListarClientes from './pages/ListarClientes';
import HistoricoCampanhas from './pages/HistoricoCampanhas';
import ControleImportacao from './pages/ControleImportacao';
import Configuracoes from './pages/Configuracoes';
import Layout from './components/Layout';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="campanhas">
          <Route path="criar" element={<CriarCampanha />} />
          <Route path="historico" element={<HistoricoCampanhas />} />
        </Route>
        <Route path="clientes">
          <Route path="listar" element={<ListarClientes />} />
          <Route path="importacao" element={<ControleImportacao />} />
        </Route>
        <Route path="configuracoes" element={<Configuracoes />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
