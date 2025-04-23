import DashboardCards from '../components/DashboardCards';
import { FiBarChart2, FiCalendar, FiTrendingUp } from 'react-icons/fi';

function Dashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Bem-vindo ao Painel de Campanhas</h1>
        <p className="text-gray-600">Visualize e gerencie suas campanhas de marketing</p>
      </div>
      
      <DashboardCards />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="card col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Desempenho das Campanhas</h3>
            <select className="text-sm border border-gray-300 rounded p-2">
              <option>Últimos 30 dias</option>
              <option>Últimos 90 dias</option>
              <option>Este ano</option>
            </select>
          </div>
          <div className="h-64 bg-gray-100 rounded flex items-center justify-center">
            <div className="text-center">
              <FiBarChart2 size={48} className="mx-auto text-gray-400" />
              <p className="text-gray-500 mt-2">Gráfico de Desempenho</p>
            </div>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-lg font-semibold mb-4">Próximas Campanhas</h3>
          <div className="space-y-4">
            <div className="p-3 border rounded-lg flex items-center">
              <div className="p-2 bg-blue-100 rounded-full mr-3">
                <FiCalendar className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium">Campanha de Verão</h4>
                <p className="text-sm text-gray-500">Inicia em 15/12/2023</p>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg flex items-center">
              <div className="p-2 bg-green-100 rounded-full mr-3">
                <FiCalendar className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-medium">Black Friday</h4>
                <p className="text-sm text-gray-500">Inicia em 20/11/2023</p>
              </div>
            </div>
            
            <div className="p-3 border rounded-lg flex items-center">
              <div className="p-2 bg-purple-100 rounded-full mr-3">
                <FiCalendar className="text-purple-600" size={20} />
              </div>
              <div>
                <h4 className="font-medium">Natal Especial</h4>
                <p className="text-sm text-gray-500">Inicia em 01/12/2023</p>
              </div>
            </div>
          </div>
          
          <button className="mt-4 text-primary font-medium flex items-center">
            Ver todas <FiTrendingUp className="ml-1" />
          </button>
        </div>
      </div>
      
      <div className="card">
        <h3 className="text-lg font-semibold mb-4">Últimas Campanhas Realizadas</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clientes</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversão</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Campanha de Inverno</td>
                <td className="px-6 py-4 whitespace-nowrap">10/06/2023</td>
                <td className="px-6 py-4 whitespace-nowrap">1,245</td>
                <td className="px-6 py-4 whitespace-nowrap">32.5%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Concluída
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Dia das Mães</td>
                <td className="px-6 py-4 whitespace-nowrap">28/04/2023</td>
                <td className="px-6 py-4 whitespace-nowrap">2,831</td>
                <td className="px-6 py-4 whitespace-nowrap">41.3%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Concluída
                  </span>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">Páscoa</td>
                <td className="px-6 py-4 whitespace-nowrap">15/03/2023</td>
                <td className="px-6 py-4 whitespace-nowrap">1,756</td>
                <td className="px-6 py-4 whitespace-nowrap">28.7%</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Concluída
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
