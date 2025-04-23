import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { 
  FiHome, 
  FiUsers, 
  FiSettings, 
  FiLogOut, 
  FiChevronDown, 
  FiChevronUp,
  FiBarChart2,
  FiClock,
  FiUserPlus,
  FiDatabase
} from 'react-icons/fi';

function Sidebar() {
  const navigate = useNavigate();
  const [openMenus, setOpenMenus] = useState({
    campanhas: false,
    clientes: false
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const logout = () => {
    navigate('/login');
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b">
        <img src="/src/assets/logo.svg" alt="Logo" className="h-8 mx-auto" />
      </div>
      
      <nav className="flex-grow p-4 space-y-1">
        <NavLink to="/" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <FiHome size={18} />
          <span>Dashboard</span>
        </NavLink>
        
        {/* Campanhas Dropdown */}
        <div>
          <button 
            onClick={() => toggleMenu('campanhas')} 
            className="sidebar-link w-full flex justify-between"
          >
            <div className="flex items-center gap-3">
              <FiBarChart2 size={18} />
              <span>Campanhas</span>
            </div>
            {openMenus.campanhas ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
          </button>
          
          {openMenus.campanhas && (
            <div className="ml-8 mt-1 space-y-1">
              <NavLink to="/campanhas/criar" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
                <FiUserPlus size={16} />
                <span>Criar Campanha</span>
              </NavLink>
              <NavLink to="/campanhas/historico" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
                <FiClock size={16} />
                <span>Histórico de Campanhas</span>
              </NavLink>
            </div>
          )}
        </div>
        
        {/* Clientes Dropdown */}
        <div>
          <button 
            onClick={() => toggleMenu('clientes')} 
            className="sidebar-link w-full flex justify-between"
          >
            <div className="flex items-center gap-3">
              <FiUsers size={18} />
              <span>Clientes</span>
            </div>
            {openMenus.clientes ? <FiChevronUp size={18} /> : <FiChevronDown size={18} />}
          </button>
          
          {openMenus.clientes && (
            <div className="ml-8 mt-1 space-y-1">
              <NavLink to="/clientes/listar" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
                <FiUsers size={16} />
                <span>Listar Clientes</span>
              </NavLink>
              <NavLink to="/clientes/importacao" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
                <FiDatabase size={16} />
                <span>Controle de Importação</span>
              </NavLink>
            </div>
          )}
        </div>
        
        <NavLink to="/configuracoes" className={({isActive}) => `sidebar-link ${isActive ? 'active' : ''}`}>
          <FiSettings size={18} />
          <span>Configurações</span>
        </NavLink>
      </nav>
      
      <div className="p-4 border-t">
        <button onClick={logout} className="sidebar-link text-red-600 hover:bg-red-100 hover:text-red-700 w-full">
          <FiLogOut size={18} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;
