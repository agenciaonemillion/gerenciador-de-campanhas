import { FiBell, FiUser } from 'react-icons/fi';

function Header() {
  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 flex items-center justify-between">
      <div>
        <h1 className="text-xl font-semibold text-gray-800">Sistema de Gestão de Campanhas</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 relative">
          <FiBell size={20} />
          <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 text-xs flex items-center justify-center">
            3
          </span>
        </button>
        
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
            <FiUser size={16} />
          </div>
          <span className="text-sm font-medium">Usuário Exemplo</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
