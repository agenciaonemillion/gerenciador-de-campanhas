import { FiSearch, FiDownload, FiEdit, FiTrash2, FiEye, FiUserPlus } from 'react-icons/fi';

function ListarClientes() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Listagem de Clientes</h1>
        <p className="text-gray-600">Visualize e gerencie todos os clientes cadastrados no sistema</p>
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
              placeholder="Buscar clientes..." 
            />
          </div>
          
          <div className="flex space-x-4">
            <select className="select-field py-2 w-40">
              <option value="">Segmento</option>
              <option value="varejo">Varejo</option>
              <option value="premium">Premium</option>
              <option value="private">Private</option>
            </select>
            
            <select className="select-field py-2 w-40">
              <option value="">Estado</option>
              <option value="sp">São Paulo</option>
              <option value="rj">Rio de Janeiro</option>
              <option value="mg">Minas Gerais</option>
              <option value="outros">Outros</option>
            </select>
            
            <button className="btn-primary flex items-center">
              <FiUserPlus className="mr-2" />
              Novo Cliente
            </button>
          </div>
        </div>
      </div>
      
      <div className="card overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nome</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Telefone</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Segmento</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Localização</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Última Compra</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-medium">JD</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">João da Silva</div>
                    <div className="text-sm text-gray-500">ID: 45321</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">joao.silva@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(11) 98765-4321</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  Premium
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">São Paulo, SP</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15/07/2023</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-medium">MO</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Maria Oliveira</div>
                    <div className="text-sm text-gray-500">ID: 45322</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">maria.oliveira@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(21) 99876-5432</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                  Private
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rio de Janeiro, RJ</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22/06/2023</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-medium">CS</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Carlos Santos</div>
                    <div className="text-sm text-gray-500">ID: 45323</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">carlos.santos@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(31) 98765-1234</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Varejo
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Belo Horizonte, MG</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05/08/2023</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-medium">AF</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Ana Ferreira</div>
                    <div className="text-sm text-gray-500">ID: 45324</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ana.ferreira@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(11) 97654-3210</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  Premium
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Campinas, SP</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">18/07/2023</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                    <span className="text-gray-500 font-medium">RL</span>
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">Roberto Lima</div>
                    <div className="text-sm text-gray-500">ID: 45325</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">roberto.lima@email.com</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">(51) 98765-4321</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  Varejo
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Porto Alegre, RS</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">12/07/2023</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 space-x-2">
                <button className="text-primary hover:text-primary-dark">
                  <FiEye size={18} />
                </button>
                <button className="text-blue-600 hover:text-blue-800">
                  <FiEdit size={18} />
                </button>
                <button className="text-red-600 hover:text-red-800">
                  <FiTrash2 size={18} />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        
        <div className="flex items-center justify-between border-t border-gray-200 px-4 py-3 sm:px-6">
          <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Mostrando <span className="font-medium">1</span> a <span className="font-medium">5</span> de <span className="font-medium">25</span> resultados
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
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
                <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
                <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>
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

export default ListarClientes;
