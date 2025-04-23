import { useState } from 'react';
import { FiSave, FiUser, FiMail, FiBell, FiLock, FiGlobe, FiDatabase } from 'react-icons/fi';

function Configuracoes() {
  const [activeTab, setActiveTab] = useState('profile');
  const stripeKey = import.meta.env.VITE_STRIPE_KEY;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Configurações</h1>
        <p className="text-gray-600">Gerencie suas preferências e configurações do sistema</p>
      </div>
      
      <div className="bg-white rounded-lg shadow">
        <div className="sm:hidden">
          <select
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-primary focus:outline-none focus:ring-primary sm:text-sm"
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
          >
            <option value="profile">Perfil</option>
            <option value="notifications">Notificações</option>
            <option value="security">Segurança</option>
            <option value="api">API & Integrações</option>
          </select>
        </div>
        
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8" aria-label="Tabs">
              <button
                onClick={() => setActiveTab('profile')}
                className={`${
                  activeTab === 'profile'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <FiUser className="mr-2" />
                Perfil
              </button>
              <button
                onClick={() => setActiveTab('notifications')}
                className={`${
                  activeTab === 'notifications'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <FiBell className="mr-2" />
                Notificações
              </button>
              <button
                onClick={() => setActiveTab('security')}
                className={`${
                  activeTab === 'security'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <FiLock className="mr-2" />
                Segurança
              </button>
              <button
                onClick={() => setActiveTab('api')}
                className={`${
                  activeTab === 'api'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center`}
              >
                <FiGlobe className="mr-2" />
                API & Integrações
              </button>
            </nav>
          </div>
        </div>
        
        <div className="p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Informações de Perfil</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Estas informações serão exibidas publicamente, então tenha cuidado com o que você compartilha.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Nome
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="first-name"
                      id="first-name"
                      defaultValue="Usuário"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Sobrenome
                  </label>
                  <div className="mt-1">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      defaultValue="Exemplo"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="sm:col-span-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      defaultValue="usuario@exemplo.com"
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                    País / Região
                  </label>
                  <div className="mt-1">
                    <select
                      id="country"
                      name="country"
                      className="select-field"
                      defaultValue="BR"
                    >
                      <option value="BR">Brasil</option>
                      <option value="US">Estados Unidos</option>
                      <option value="CA">Canadá</option>
                      <option value="MX">México</option>
                      <option value="PT">Portugal</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-6">
                  <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                    Foto
                  </label>
                  <div className="mt-2 flex items-center">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white">
                      <FiUser size={24} />
                    </div>
                    <button
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Alterar
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="ml-3 btn-primary"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Preferências de Notificação</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Escolha como e quando deseja receber notificações do sistema.
                </p>
              </div>
              
              <div className="space-y-6">
                <fieldset>
                  <legend className="text-base font-medium text-gray-900">Por Email</legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="comments" className="font-medium text-gray-700">Relatórios de campanhas</label>
                        <p className="text-gray-500">Receba relatórios e resumos de campanhas por email.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="candidates"
                          name="candidates"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="candidates" className="font-medium text-gray-700">Importações concluídas</label>
                        <p className="text-gray-500">Notificações sobre arquivos importados com sucesso ou erros.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="offers"
                          name="offers"
                          type="checkbox"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="offers" className="font-medium text-gray-700">Atualizações do sistema</label>
                        <p className="text-gray-500">Receba emails sobre novidades e atualizações da plataforma.</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
                
                <fieldset>
                  <legend className="text-base font-medium text-gray-900">Notificações no Sistema</legend>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                          defaultChecked
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="push-everything" className="font-medium text-gray-700">Todas as atividades</label>
                        <p className="text-gray-500">Receba notificações para qualquer atividade no sistema.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="push-email" className="font-medium text-gray-700">Somente atividades importantes</label>
                        <p className="text-gray-500">Receba notificações apenas para atividades críticas.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="h-4 w-4 text-primary focus:ring-primary border-gray-300"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="push-nothing" className="font-medium text-gray-700">Nenhuma notificação</label>
                        <p className="text-gray-500">Não exibir notificações do sistema.</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
              
              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="ml-3 btn-primary"
                  >
                    Salvar
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">Segurança da Conta</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Altere sua senha e configure as opções de segurança.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-gray-900">Alterar Senha</h4>
                  <div className="mt-2 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                      <label htmlFor="current-password" className="block text-sm font-medium text-gray-700">
                        Senha Atual
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          name="current-password"
                          id="current-password"
                          className="input-field"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-4">
                      <label htmlFor="new-password" className="block text-sm font-medium text-gray-700">
                        Nova Senha
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          name="new-password"
                          id="new-password"
                          className="input-field"
                        />
                      </div>
                    </div>
                    
                    <div className="sm:col-span-4">
                      <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                        Confirmar Nova Senha
                      </label>
                      <div className="mt-1">
                        <input
                          type="password"
                          name="confirm-password"
                          id="confirm-password"
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-gray-900">Autenticação de Dois Fatores</h4>
                  <div className="mt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Ative a autenticação de dois fatores para aumentar a segurança da sua conta.</p>
                      </div>
                      <div className="ml-4 flex-shrink-0">
                        <button
                          type="button"
                          className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                        >
                          Ativar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-gray-900">Sessões Ativas</h4>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Se necessário, você pode encerrar todas as outras sessões ativas em seus dispositivos.</p>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-red-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                      >
                        Encerrar Outras Sessões
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="ml-3 btn-primary"
                  >
                    Salvar Alterações
                  </button>
                </div>
              </div>
            </div>
          )}
          
          {/* API Tab */}
          {activeTab === 'api' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium leading-6 text-gray-900">API & Integrações</h3>
                <p className="mt-1 text-sm text-gray-500">
                  Gerencie chaves de API e configure integrações com outros sistemas.
                </p>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-base font-medium text-gray-900">Chaves de API</h4>
                  <div className="mt-2">
                    <div className="bg-gray-50 p-4 rounded-md">
                      <div className="flex items-center justify-between">
                        <div>
                          <h5 className="text-sm font-medium text-gray-900">Chave de API Primária</h5>
                          <p className="text-sm text-gray-500">Criada em 10/06/2023</p>
                        </div>
                        <div className="ml-4">
                          <input
                            type="password"
                            readOnly
                            value={stripeKey}
                            className="input-field w-64 bg-gray-100 text-sm"
                          />
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <button
                            type="button"
                            className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                          >
                            Mostrar
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <button
                        type="button"
                        className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-primary hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                      >
                        Gerar Nova Chave
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-gray-900">Webhooks</h4>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">Configure URLs para receber notificações de eventos.</p>
                    
                    <div className="mt-4">
                      <label htmlFor="webhook-url" className="block text-sm font-medium text-gray-700">
                        URL do Webhook
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="text"
                          name="webhook-url"
                          id="webhook-url"
                          className="input-field flex-1 rounded-none rounded-l-md"
                          placeholder="https://exemplo.com/webhook"
                        />
                        <button
                          type="button"
                          className="relative inline-flex items-center px-4 py-2 border border-l-0 border-gray-300 rounded-r-md bg-gray-50 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        >
                          Adicionar
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <h5 className="text-sm font-medium text-gray-900">Webhooks Ativos</h5>
                      <div className="mt-2 border rounded-md divide-y divide-gray-200">
                        <div className="py-3 px-4 flex items-center justify-between">
                          <p className="text-sm font-medium text-gray-900">https://api.empresa.com/webhook</p>
                          <button
                            type="button"
                            className="ml-4 text-sm text-red-600 hover:text-red-900"
                          >
                            Remover
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-base font-medium text-gray-900">Integrações</h4>
                  <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="mr-4 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <FiDatabase size={20} className="text-gray-500" />
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-900">CRM Externo</h5>
                            <p className="text-xs text-gray-500">Integre com seu sistema de CRM</p>
                          </div>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="bg-white py-1 px-3 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 hover:bg-gray-50"
                          >
                            Configurar
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div className="border rounded-md p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="mr-4 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center">
                            <FiMail size={20} className="text-gray-500" />
                          </div>
                          <div>
                            <h5 className="text-sm font-medium text-gray-900">Plataforma de Email</h5>
                            <p className="text-xs text-gray-500">Integre com serviços de email marketing</p>
                          </div>
                        </div>
                        <div>
                          <button
                            type="button"
                            className="bg-white py-1 px-3 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 hover:bg-gray-50"
                          >
                            Configurar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-5">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="ml-3 btn-primary"
                  >
                    Salvar Configurações
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Configuracoes;
