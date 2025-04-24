import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Card from '../components/Card';
import Input from '../components/Input';
import Button from '../components/Button';
import { showSuccess } from '../utils/toast';

const Configuracoes = () => {
  const [activeTab, setActiveTab] = useState('geral');
  
  const [configuracoes, setConfiguracoes] = useState({
    nomeEmpresa: 'Minha Empresa',
    email: 'contato@minhaempresa.com',
    limiteEnvios: '10000',
    intervaloEnvios: '5',
    replyTo: 'naoresponda@minhaempresa.com',
    assinatura: 'Enviado por Minha Empresa | Rua Exemplo, 123',
    apiKey: 'sk_test_51M9hdKa0qz****************************',
    webhookUrl: 'https://minhaempresa.com/api/webhooks/campanhas',
    senhaAtual: '',
    novaSenha: '',
    confirmarSenha: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setConfiguracoes({ ...configuracoes, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    showSuccess('Configurações salvas com sucesso!');
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-2xl font-bold mb-6">Configurações</h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <Card className="sticky top-20">
            <ul className="space-y-1">
              <li>
                <button
                  className={`w-full px-4 py-2 text-left rounded-md ${activeTab === 'geral' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('geral')}
                >
                  Geral
                </button>
              </li>
              <li>
                <button
                  className={`w-full px-4 py-2 text-left rounded-md ${activeTab === 'envio' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('envio')}
                >
                  Envio
                </button>
              </li>
              <li>
                <button
                  className={`w-full px-4 py-2 text-left rounded-md ${activeTab === 'integracao' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('integracao')}
                >
                  Integração
                </button>
              </li>
              <li>
                <button
                  className={`w-full px-4 py-2 text-left rounded-md ${activeTab === 'seguranca' ? 'bg-blue-50 text-blue-700 font-medium' : 'text-gray-700 hover:bg-gray-50'}`}
                  onClick={() => setActiveTab('seguranca')}
                >
                  Segurança
                </button>
              </li>
            </ul>
          </Card>
        </div>
        
        <div className="md:w-3/4">
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6">
              {activeTab === 'geral' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-medium border-b pb-2">Configurações Gerais</h2>
                  
                  <Input
                    label="Nome da Empresa"
                    name="nomeEmpresa"
                    value={configuracoes.nomeEmpresa}
                    onChange={handleChange}
                    required
                  />
                  
                  <Input
                    label="E-mail de Contato"
                    type="email"
                    name="email"
                    value={configuracoes.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              
              {activeTab === 'envio' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-medium border-b pb-2">Configurações de Envio</h2>
                  
                  <Input
                    label="Limite diário de envios"
                    type="number"
                    name="limiteEnvios"
                    value={configuracoes.limiteEnvios}
                    onChange={handleChange}
                    required
                    helperText="Número máximo de mensagens enviadas por dia"
                  />
                  
                  <Input
                    label="Intervalo entre envios (segundos)"
                    type="number"
                    name="intervaloEnvios"
                    value={configuracoes.intervaloEnvios}
                    onChange={handleChange}
                    required
                    helperText="Pausa entre cada lote de envios"
                  />
                  
                  <Input
                    label="E-mail de resposta (Reply-To)"
                    type="email"
                    name="replyTo"
                    value={configuracoes.replyTo}
                    onChange={handleChange}
                    required
                  />
                  
                  <div className="mb-4">
                    <label 
                      htmlFor="assinatura" 
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Assinatura das mensagens <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="assinatura"
                      name="assinatura"
                      value={configuracoes.assinatura}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              )}
              
              {activeTab === 'integracao' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-medium border-b pb-2">Integrações API</h2>
                  
                  <Input
                    label="API Key"
                    name="apiKey"
                    value={configuracoes.apiKey}
                    onChange={handleChange}
                    required
                    type="password"
                  />
                  
                  <Input
                    label="Webhook URL"
                    name="webhookUrl"
                    value={configuracoes.webhookUrl}
                    onChange={handleChange}
                    helperText="URL para receber notificações de eventos"
                  />
                </div>
              )}
              
              {activeTab === 'seguranca' && (
                <div className="space-y-6">
                  <h2 className="text-lg font-medium border-b pb-2">Configurações de Segurança</h2>
                  
                  <Input
                    label="Senha Atual"
                    type="password"
                    name="senhaAtual"
                    value={configuracoes.senhaAtual}
                    onChange={handleChange}
                    required
                  />
                  
                  <Input
                    label="Nova Senha"
                    type="password"
                    name="novaSenha"
                    value={configuracoes.novaSenha}
                    onChange={handleChange}
                    required
                    helperText="Mínimo de 8 caracteres com letras e números"
                  />
                  
                  <Input
                    label="Confirmar Nova Senha"
                    type="password"
                    name="confirmarSenha"
                    value={configuracoes.confirmarSenha}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}
              
              <div className="pt-4 border-t border-gray-200">
                <Button type="submit" variant="primary">
                  Salvar Alterações
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </div>
    </motion.div>
  );
};

export default Configuracoes;
