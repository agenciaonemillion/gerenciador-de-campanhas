import React from 'react';
import { motion } from 'framer-motion';
import Button from '../components/Button';
import Card from '../components/Card';

const Segmentos = () => {
  const segmentos = [
    {
      id: 1,
      nome: 'Todos os clientes',
      descricao: 'Lista completa de todos os clientes cadastrados.',
      contador: 12458,
      criterios: 'Todos os clientes ativos'
    },
    {
      id: 2,
      nome: 'Clientes inativos',
      descricao: 'Clientes que não fizeram compras nos últimos 90 dias.',
      contador: 3421,
      criterios: 'Sem compras > 90 dias'
    },
    {
      id: 3,
      nome: 'Novos clientes',
      descricao: 'Clientes cadastrados nos últimos 30 dias.',
      contador: 842,
      criterios: 'Cadastro < 30 dias'
    },
    {
      id: 4,
      nome: 'Clientes VIP',
      descricao: 'Clientes com compras superiores a R$ 5.000 nos últimos 6 meses.',
      contador: 267,
      criterios: 'Compras > R$ 5.000 em 6 meses'
    },
    {
      id: 5,
      nome: 'Aniversariantes do mês',
      descricao: 'Clientes que fazem aniversário no mês atual.',
      contador: 128,
      criterios: 'Aniversário no mês atual'
    },
    {
      id: 6,
      nome: 'Potenciais abandonadores',
      descricao: 'Clientes que podem abandonar baseado em padrões de compra.',
      contador: 532,
      criterios: 'Redução > 50% em compras'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <h1 className="text-2xl font-bold mb-4 sm:mb-0">Segmentos</h1>
        <Button variant="primary" className="w-full sm:w-auto">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          Novo Segmento
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {segmentos.map((segmento) => (
          <Card key={segmento.id} isHoverable className="h-full">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-900">{segmento.nome}</h3>
              <div className="flex">
                <button className="text-gray-400 hover:text-gray-500 mr-2" title="Editar">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-red-500" title="Excluir">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mb-4">
              {segmento.descricao}
            </p>
            
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <span className="bg-blue-100 text-blue-800 text-xs font-medium rounded-full px-2.5 py-1">
                  {segmento.contador.toLocaleString()} clientes
                </span>
              </div>
              <div className="text-xs text-gray-500">
                {segmento.criterios}
              </div>
            </div>
            
            <div className="mt-4 flex">
              <Button variant="secondary" size="sm" className="w-full mr-2">
                Visualizar
              </Button>
              <Button variant="primary" size="sm" className="w-full">
                Criar Campanha
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </motion.div>
  );
};

export default Segmentos;
