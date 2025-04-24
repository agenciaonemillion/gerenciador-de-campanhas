import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';

const TableSkeleton = () => (
  <div className="animate-pulse">
    <div className="h-10 bg-gray-200 rounded mb-4"></div>
    {[...Array(5)].map((_, index) => (
      <div key={index} className="h-16 bg-gray-100 rounded mb-2"></div>
    ))}
  </div>
);

const Campanhas = () => {
  const [loading, setLoading] = useState(true);
  const [campanhas, setCampanhas] = useState([]);
  
  // Simulate API fetch
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCampanhas([
        {
          id: 1,
          nome: 'Black Friday 2023',
          segmento: 'Todos os clientes',
          dataInicio: '2023-11-20',
          dataFim: '2023-11-27',
          status: 'ativa',
          canal: 'email',
        },
        {
          id: 2,
          nome: 'Reativação de clientes',
          segmento: 'Clientes inativos',
          dataInicio: '2023-10-15',
          dataFim: '2023-11-15',
          status: 'ativa',
          canal: 'sms',
        },
        {
          id: 3,
          nome: 'Boas-vindas',
          segmento: 'Novos clientes',
          dataInicio: '2023-09-01',
          dataFim: '2024-09-01',
          status: 'ativa',
          canal: 'email',
        },
        {
          id: 4,
          nome: 'Fidelidade VIP',
          segmento: 'Clientes VIP',
          dataInicio: '2023-08-10',
          dataFim: '2023-09-10',
          status: 'encerrada',
          canal: 'whatsapp',
        },
      ]);
      setLoading(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Function to render status badge
  const renderStatus = (status) => {
    const statusStyles = {
      ativa: 'bg-green-100 text-green-800 border-green-200',
      encerrada: 'bg-gray-100 text-gray-800 border-gray-200',
      pendente: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      cancelada: 'bg-red-100 text-red-800 border-red-200',
    };
    
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full border ${statusStyles[status] || ''}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Campanhas</h1>
        <Link to="/campanhas/criar">
          <Button variant="primary" className="w-full sm:w-auto">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Nova Campanha
          </Button>
        </Link>
      </div>
      
      <Card>
        {loading ? (
          <TableSkeleton />
        ) : campanhas.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Nome
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Segmento
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Período
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Canal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ações
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {campanhas.map((campanha) => (
                  <tr key={campanha.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="font-medium text-gray-900">{campanha.nome}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">{campanha.segmento}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {new Date(campanha.dataInicio).toLocaleDateString()} - {new Date(campanha.dataFim).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500 capitalize">{campanha.canal}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {renderStatus(campanha.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex justify-end space-x-2">
                        <button
                          className="text-blue-600 hover:text-blue-900"
                          title="Visualizar"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                          </svg>
                        </button>
                        <button
                          className="text-yellow-600 hover:text-yellow-900"
                          title="Editar"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                        <button
                          className="text-red-600 hover:text-red-900"
                          title="Excluir"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-12">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">Nenhuma campanha encontrada</h3>
            <p className="mt-1 text-sm text-gray-500">
              Crie sua primeira campanha para começar a enviar mensagens para seus clientes.
            </p>
            <div className="mt-6">
              <Link to="/campanhas/criar">
                <Button variant="primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  Nova Campanha
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default Campanhas;
