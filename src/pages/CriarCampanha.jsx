import { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { FiSave, FiX } from 'react-icons/fi';

function CriarCampanha() {
  const [formData, setFormData] = useState({
    nomeCampanha: '',
    produto: '',
    dataInicio: null,
    dataFim: null,
    valorMinimo: '',
    valorMaximo: '',
    localizacao: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleDateChange = (date, name) => {
    setFormData(prev => ({
      ...prev,
      [name]: date
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would handle form submission in a real implementation
    console.log('Form data submitted:', formData);
    alert('Segmentação gerada com sucesso! (Simulação)');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Criar Nova Campanha</h1>
        <p className="text-gray-600">Configure os parâmetros para segmentar clientes para sua campanha</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Informações Básicas</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="nomeCampanha" className="block text-sm font-medium text-gray-700 mb-1">
                Nome da Campanha
              </label>
              <input
                type="text"
                id="nomeCampanha"
                name="nomeCampanha"
                value={formData.nomeCampanha}
                onChange={handleChange}
                className="input-field"
                placeholder="Ex: Campanha de Verão 2023"
                required
              />
            </div>
            
            <div>
              <label htmlFor="produto" className="block text-sm font-medium text-gray-700 mb-1">
                Selecionar Produto
              </label>
              <select
                id="produto"
                name="produto"
                value={formData.produto}
                onChange={handleChange}
                className="select-field"
                required
              >
                <option value="">Selecione um produto</option>
                <option value="produto1">Cartão de Crédito Premium</option>
                <option value="produto2">Empréstimo Pessoal</option>
                <option value="produto3">Investimento CDB</option>
                <option value="produto4">Seguro Residencial</option>
                <option value="produto5">Previdência Privada</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Critérios de Segmentação</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Período da Compra (Início)
              </label>
              <DatePicker
                selected={formData.dataInicio}
                onChange={(date) => handleDateChange(date, 'dataInicio')}
                className="input-field"
                placeholderText="Selecione a data inicial"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Período da Compra (Fim)
              </label>
              <DatePicker
                selected={formData.dataFim}
                onChange={(date) => handleDateChange(date, 'dataFim')}
                className="input-field"
                placeholderText="Selecione a data final"
                dateFormat="dd/MM/yyyy"
                minDate={formData.dataInicio}
              />
            </div>

            <div>
              <label htmlFor="valorMinimo" className="block text-sm font-medium text-gray-700 mb-1">
                Valor Mínimo da Compra (R$)
              </label>
              <input
                type="number"
                id="valorMinimo"
                name="valorMinimo"
                value={formData.valorMinimo}
                onChange={handleChange}
                className="input-field"
                placeholder="Ex: 100.00"
              />
            </div>
            
            <div>
              <label htmlFor="valorMaximo" className="block text-sm font-medium text-gray-700 mb-1">
                Valor Máximo da Compra (R$)
              </label>
              <input
                type="number"
                id="valorMaximo"
                name="valorMaximo"
                value={formData.valorMaximo}
                onChange={handleChange}
                className="input-field"
                placeholder="Ex: 1000.00"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="localizacao" className="block text-sm font-medium text-gray-700 mb-1">
                Localização do Cliente
              </label>
              <select
                id="localizacao"
                name="localizacao"
                value={formData.localizacao}
                onChange={handleChange}
                className="select-field"
              >
                <option value="">Selecione uma localização</option>
                <option value="SP">São Paulo</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="MG">Minas Gerais</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="BA">Bahia</option>
                <option value="PR">Paraná</option>
                <option value="todos">Todos os Estados</option>
              </select>
            </div>
          </div>
        </div>

        <div className="card">
          <h2 className="text-lg font-semibold mb-4">Critérios Avançados (Opcional)</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Idade do Cliente
              </label>
              <div className="flex space-x-4">
                <input
                  type="number"
                  className="input-field w-1/2"
                  placeholder="Mínima"
                />
                <input
                  type="number"
                  className="input-field w-1/2"
                  placeholder="Máxima"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Perfil de Risco
              </label>
              <select className="select-field">
                <option value="">Selecione uma opção</option>
                <option value="baixo">Baixo</option>
                <option value="medio">Médio</option>
                <option value="alto">Alto</option>
                <option value="todos">Todos</option>
              </select>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="button"
            className="btn-secondary flex items-center"
          >
            <FiX className="mr-2" />
            Cancelar
          </button>
          <button
            type="submit"
            className="btn-primary flex items-center"
          >
            <FiSave className="mr-2" />
            Gerar Segmentação
          </button>
        </div>
      </form>
    </div>
  );
}

export default CriarCampanha;
