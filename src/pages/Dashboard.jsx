import React from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-blue-100">Total de Campanhas</p>
              <h3 className="text-3xl font-bold mt-1">24</h3>
            </div>
            <div className="text-white p-3 rounded-full bg-blue-400 bg-opacity-30">
              <i className="fas fa-megaphone text-xl"></i>
            </div>
          </div>
          <p className="mt-4 text-sm text-blue-100">
            <span className="text-green-300">
              <i className="fas fa-arrow-up mr-1"></i>14%
            </span> desde o último mês
          </p>
        </Card>
        
        <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-green-100">Taxa de Conversão</p>
              <h3 className="text-3xl font-bold mt-1">8.5%</h3>
            </div>
            <div className="text-white p-3 rounded-full bg-green-400 bg-opacity-30">
              <i className="fas fa-chart-line text-xl"></i>
            </div>
          </div>
          <p className="mt-4 text-sm text-green-100">
            <span className="text-green-300">
              <i className="fas fa-arrow-up mr-1"></i>2.1%
            </span> desde o último mês
          </p>
        </Card>
        
        <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-purple-100">Segmentos Ativos</p>
              <h3 className="text-3xl font-bold mt-1">6</h3>
            </div>
            <div className="text-white p-3 rounded-full bg-purple-400 bg-opacity-30">
              <i className="fas fa-user-group text-xl"></i>
            </div>
          </div>
          <p className="mt-4 text-sm text-purple-100">
            <span className="text-green-300">
              <i className="fas fa-arrow-up mr-1"></i>1
            </span> novo segmento
          </p>
        </Card>
        
        <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium text-orange-100">ROI Total</p>
              <h3 className="text-3xl font-bold mt-1">240%</h3>
            </div>
            <div className="text-white p-3 rounded-full bg-orange-400 bg-opacity-30">
              <i className="fas fa-sack-dollar text-xl"></i>
            </div>
          </div>
          <p className="mt-4 text-sm text-orange-100">
            <span className="text-green-300">
              <i className="fas fa-arrow-up mr-1"></i>24%
            </span> desde o último mês
          </p>
        </Card>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2" title="Desempenho das Campanhas (Últimos 30 dias)">
          <div className="h-80 flex items-center justify-center">
            <p className="text-gray-500">Gráfico de desempenho (mockado)</p>
          </div>
        </Card>
        
        <Card title="Campanhas Recentes">
          <div className="space-y-4">
            {[
              { name: 'Black Friday 2023', status: 'ativa', date: '20/11/2023', conversion: '12.4%' },
              { name: 'Reativação de Clientes', status: 'ativa', date: '15/10/2023', conversion: '8.7%' },
              { name: 'Boas-vindas', status: 'ativa', date: '01/09/2023', conversion: '22.1%' },
              { name: 'Fidelidade VIP', status: 'encerrada', date: '10/08/2023', conversion: '15.3%' },
            ].map((campaign, index) => (
              <div key={index} className="flex items-center p-3 border rounded-lg">
                <div className="flex-shrink-0 mr-3">
                  <div className={`h-10 w-10 rounded-full flex items-center justify-center 
                    ${campaign.status === 'ativa' ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-600'}`}>
                    <i className="fas fa-megaphone"></i>
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {campaign.name}
                  </p>
                  <p className="text-sm text-gray-500">
                    {campaign.date} · {campaign.conversion}
                  </p>
                </div>
                <div>
                  <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                    ${campaign.status === 'ativa' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'}`}>
                    {campaign.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </motion.div>
  );
};

export default Dashboard;
