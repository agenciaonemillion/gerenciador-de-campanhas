import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Resultados = () => {
  const campanhas = [
    {
      id: 1,
      nome: 'Black Friday 2023',
      periodo: '20/11/2023 - 27/11/2023',
      enviados: 12458,
      aberturas: 6895,
      cliques: 3271,
      conversoes: 1542,
      receita: 85420.50,
    },
    {
      id: 2,
      nome: 'Reativação de clientes',
      periodo: '15/10/2023 - 15/11/2023',
      enviados: 3421,
      aberturas: 1245,
      cliques: 687,
      conversoes: 298,
      receita: 12485.75,
    },
    {
      id: 3,
      nome: 'Boas-vindas',
      periodo: '01/09/2023 - 01/10/2023',
      enviados: 842,
      aberturas: 731,
      cliques: 584,
      conversoes: 186,
      receita: 9245.30,
    },
    {
      id: 4,
      nome: 'Fidelidade VIP',
      periodo: '10/08/2023 - 10/09/2023',
      enviados: 267,
      aberturas: 241,
      cliques: 187,
      conversoes: 91,
      receita: 25785.00,
    },
  ];

  // Calcular taxas
  const calcularTaxa = (valor, total) => {
    return ((valor / total) * 100).toFixed(1);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-2xl font-bold mb-6">Resultados das Campanhas</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-2">Total Enviados</h3>
            <p className="text-3xl font-bold">
              {campanhas.reduce((acc, curr) => acc + curr.enviados, 0).toLocaleString()}
            </p>
          </div>
        </Card>
        
        <Card>
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-2">Taxa de Abertura</h3>
            <p className="text-3xl font-bold text-blue-600">
              {calcularTaxa(
                campanhas.reduce((acc, curr) => acc + curr.aberturas, 0),
                campanhas.reduce((acc, curr) => acc + curr.enviados, 0)
              )}%
            </p>
          </div>
        </Card>
        
        <Card>
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-2">Taxa de Conversão</h3>
            <p className="text-3xl font-bold text-green-600">
              {calcularTaxa(
                campanhas.reduce((acc, curr) => acc + curr.conversoes, 0),
                campanhas.reduce((acc, curr) => acc + curr.enviados, 0)
              )}%
            </p>
          </div>
        </Card>
        
        <Card>
          <div className="text-center">
            <h3 className="text-lg font-medium text-gray-500 mb-2">Receita Total</h3>
            <p className="text-3xl font-bold text-green-700">
              R$ {campanhas.reduce((acc, curr) => acc + curr.receita, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
            </p>
          </div>
        </Card>
      </div>
      
      <Card>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Campanha
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Período
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Enviados
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aberturas
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cliques
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Conversões
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Receita
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
                    <div className="text-sm text-gray-500">{campanha.periodo}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    {campanha.enviados.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div>
                      {campanha.aberturas.toLocaleString()}
                      <span className="text-xs ml-1 text-blue-600">
                        ({calcularTaxa(campanha.aberturas, campanha.enviados)}%)
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div>
                      {campanha.cliques.toLocaleString()}
                      <span className="text-xs ml-1 text-blue-600">
                        ({calcularTaxa(campanha.cliques, campanha.enviados)}%)
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div>
                      {campanha.conversoes.toLocaleString()}
                      <span className="text-xs ml-1 text-green-600">
                        ({calcularTaxa(campanha.conversoes, campanha.enviados)}%)
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <div className="font-medium text-green-700">
                      R$ {campanha.receita.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50">
              <tr>
                <td colSpan={2} className="px-6 py-4 font-medium">
                  Total
                </td>
                <td className="px-6 py-4 text-right font-medium">
                  {campanhas.reduce((acc, curr) => acc + curr.enviados, 0).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right font-medium">
                  {campanhas.reduce((acc, curr) => acc + curr.aberturas, 0).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right font-medium">
                  {campanhas.reduce((acc, curr) => acc + curr.cliques, 0).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right font-medium">
                  {campanhas.reduce((acc, curr) => acc + curr.conversoes, 0).toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right font-medium text-green-700">
                  R$ {campanhas.reduce((acc, curr) => acc + curr.receita, 0).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </Card>
    </motion.div>
  );
};

export default Resultados;
