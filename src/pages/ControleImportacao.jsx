import { FiUpload, FiDownload, FiCheckCircle, FiAlertCircle, FiClock } from 'react-icons/fi';

function ControleImportacao() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Controle de Importação</h1>
        <p className="text-gray-600">Importe e gerencie seus arquivos de clientes para campanhas</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="card flex items-center">
          <div className="mr-4 p-3 rounded-full bg-blue-100 text-primary">
            <FiUpload size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Total de Importações</p>
            <h3 className="text-2xl font-bold">28</h3>
            <p className="text-xs text-gray-500">Último mês</p>
          </div>
        </div>
        
        <div className="card flex items-center">
          <div className="mr-4 p-3 rounded-full bg-green-100 text-green-600">
            <FiCheckCircle size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Importações Concluídas</p>
            <h3 className="text-2xl font-bold">24</h3>
            <p className="text-xs text-green-500">85.7% de sucesso</p>
          </div>
        </div>
        
        <div className="card flex items-center">
          <div className="mr-4 p-3 rounded-full bg-red-100 text-red-600">
            <FiAlertCircle size={24} />
          </div>
          <div>
            <p className="text-sm text-gray-500">Importações com Erro</p>
            <h3 className="text-2xl font-bold">4</h3>
            <p className="text-xs text-red-500">14.3% de falha</p>
          </div>
        </div>
      </div>
      
      <div className="card mb-8">
        <h2 className="text-lg font-semibold mb-4">Nova Importação</h2>
        
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <FiUpload size={36} className="mx-auto text-gray-400 mb-3" />
          <p className="text-gray-600 mb-2">Arraste e solte seu arquivo CSV ou Excel aqui</p>
          <p className="text-gray-500 text-sm mb-4">ou</p>
          <button className="btn-primary inline-flex items-center">
            <FiUpload className="mr-2" />
            Selecionar Arquivo
          </button>
          <p className="text-gray-500 text-xs mt-4">Formatos suportados: .CSV, .XLS, .XLSX (máx. 10MB)</p>
        </div>
        
        <div className="mt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">Opções de Importação</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                <span className="text-gray-700">Atualizar registros existentes</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                <span className="text-gray-700">Ignorar linhas com erro</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                <span className="text-gray-700">Enviar relatório por email</span>
              </label>
            </div>
            <div>
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-primary focus:ring-primary mr-2" />
                <span className="text-gray-700">Validar CEP</span>
              </label>
            </div>
          </div>
        </div>
      </div>
      
      <div className="card">
        <h2 className="text-lg font-semibold mb-4">Histórico de Importações</h2>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arquivo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Registros</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Usuário</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ações</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FiDownload className="text-gray-500 mr-2" />
                    <span>clientes_agosto_2023.csv</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">10/08/2023 15:32</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,245</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">maria.silva</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Concluído
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-primary hover:text-primary-dark">Detalhes</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FiDownload className="text-gray-500 mr-2" />
                    <span>novos_prospects_jul.xlsx</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">28/07/2023 10:15</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">875</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">joao.santos</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Concluído
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-primary hover:text-primary-dark">Detalhes</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FiDownload className="text-gray-500 mr-2" />
                    <span>segmento_premium_2023.csv</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15/07/2023 09:28</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,312</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">ana.oliveira</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                    Erro
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-primary hover:text-primary-dark">Detalhes</button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <FiDownload className="text-gray-500 mr-2" />
                    <span>base_clientes_sp.xlsx</span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">05/07/2023 16:42</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3,456</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">carlos.lima</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                    Processando
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button className="text-primary hover:text-primary-dark">Detalhes</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ControleImportacao;
