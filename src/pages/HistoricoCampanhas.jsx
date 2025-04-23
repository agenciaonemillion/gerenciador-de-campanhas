import { FiSearch, FiDownload, FiEye } from 'react-icons/fi';

function HistoricoCampanhas() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Histórico de Campanhas</h1>
        <p className="text-gray-600">Visualize e analise todas as campanhas realizadas anteriormente</p>
      </div>
      
      <div className="card mb-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input 
              type="text" 
              className="input-field pl-10 pr-4 py-2 w-full md:w-80" 
              placeholder="Buscar campanhas..." 
            />
          </div>
          
          <div className="flex space-x-4">
            <select className="select-field py-2 w-40">
              <option value="">Status</option>
              <option value="ativa">Ativa</option>
              <option value="concluida">Concluída</option>
              <option value="cancelada">Cancelada</option>
            </select>
            
            <select className="select-field py-2 w-40">
              <option value="">Período</option>
              <option value="7d">Últimos 7 dias</option>
              <option value="30d">Últimos 30 dias</option>
              <option value="90d">Últimos 90 dias</option>
              <option value="1a">Este ano</option>
            </select>
          </div>
        </div>
      </div>
      
      <div className="card overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome da Campanha</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Produto</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Início</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data de Término</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clientes</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversão</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Campanha Black Friday 2022</td>
              <td className="px-6 py-4 whitespace-nowrap">Cartão de Crédito</td>
              <td className="px-6 py-4 whitespace-nowrap">20/11/2022</td>
              <td className="px-6 py-4 whitespace-nowrap">30/11/2022</td>
              <td className="px-6 py-4 whitespace-nowrap">3,245</td>
              <td className="px-6 py-4 whitespace-nowrap">38.7%</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Concluída
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <FiDownload size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Campanha Natal 2022</td>
              <td className="px-6 py-4 whitespace-nowrap">Empréstimo Pessoal</td>
              <td className="px-6 py-4 whitespace-nowrap">01/12/2022</td>
              <td className="px-6 py-4 whitespace-nowrap">25/12/2022</td>
              <td className="px-6 py-4 whitespace-nowrap">2,831</td>
              <td className="px-6 py-4 whitespace-nowrap">42.3%</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Concluída
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <FiDownload size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Campanha Ano Novo 2023</td>
              <td className="px-6 py-4 whitespace-nowrap">Investimento CDB</td>
              <td className="px-6 py-4 whitespace-nowrap">26/12/2022</td>
              <td className="px-6 py-4 whitespace-nowrap">15/01/2023</td>
              <td className="px-6 py-4 whitespace-nowrap">1,756</td>
              <td className="px-6 py-4 whitespace-nowrap">29.5%</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Concluída
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <FiDownload size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Campanha Dia das Mães 2023</td>
              <td className="px-6 py-4 whitespace-nowrap">Seguro Residencial</td>
              <td className="px-6 py-4 whitespace-nowrap">20/04/2023</td>
              <td className="px-6 py-4 whitespace-nowrap">14/05/2023</td>
              <td className="px-6 py-4 whitespace-nowrap">2,453</td>
              <td className="px-6 py-4 whitespace-nowrap">31.2%</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Concluída
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <FiDownload size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">Campanha Dia dos Pais 2023</td>
              <td className="px-6 py-4 whitespace-nowrap">Previdência Privada</td>
              <td className="px-6 py-4 whitespace-nowrap">20/07/2023</td>
              <td className="px-6 py-4 whitespace-nowrap">13/08/2023</td>
              <td className="px-6 py-4 whitespace-nowrap">1,987</td>
              <td className="px-6 py-4 whitespace-nowrap">26.8%</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                  Em andamento
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-gray-600 hover:text-gray-900">
                  <FiDownload size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
          <div className="flex flex-1 justify-between sm:hidden">
            <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Anterior</a>
            <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Próximo</a>
          </div>
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Mostrando <span className="font-medium">1</span> a <span className="font-medium">5</span> de <span className="font-medium">12</span> resultados
              </p>
            </div>
            <div>
              <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a href="#" className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Anterior</span>
                  &laquo;
                </a>
                <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-primary px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
                <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
                <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span className="sr-only">Próximo</span>
                  &raquo;
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoricoCampanhas;
