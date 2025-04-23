import { FiUsers, FiBarChart2, FiClock, FiTrendingUp } from 'react-icons/fi';

function DashboardCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="card flex items-center">
        <div className="mr-4 p-3 rounded-full bg-blue-100 text-primary">
          <FiUsers size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Clientes Cadastrados</p>
          <h3 className="text-2xl font-bold">3,428</h3>
          <p className="text-xs text-green-500 flex items-center">
            <FiTrendingUp className="mr-1" />
            +12% este mês
          </p>
        </div>
      </div>
      
      <div className="card flex items-center">
        <div className="mr-4 p-3 rounded-full bg-green-100 text-green-600">
          <FiBarChart2 size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Campanhas Ativas</p>
          <h3 className="text-2xl font-bold">16</h3>
          <p className="text-xs text-green-500 flex items-center">
            <FiTrendingUp className="mr-1" />
            +3 esta semana
          </p>
        </div>
      </div>
      
      <div className="card flex items-center">
        <div className="mr-4 p-3 rounded-full bg-purple-100 text-purple-600">
          <FiClock size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Campanhas Concluídas</p>
          <h3 className="text-2xl font-bold">42</h3>
          <p className="text-xs text-gray-500 flex items-center">
            Total acumulado
          </p>
        </div>
      </div>
      
      <div className="card flex items-center">
        <div className="mr-4 p-3 rounded-full bg-orange-100 text-orange-600">
          <FiBarChart2 size={24} />
        </div>
        <div>
          <p className="text-sm text-gray-500">Taxa de Conversão</p>
          <h3 className="text-2xl font-bold">24.8%</h3>
          <p className="text-xs text-green-500 flex items-center">
            <FiTrendingUp className="mr-1" />
            +2.3% de aumento
          </p>
        </div>
      </div>
    </div>
  );
}

export default DashboardCards;
