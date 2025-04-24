import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { showSuccess, showError } from '../utils/toast';

// Import custom components
import Button from '../components/Button';
import Input from '../components/Input';
import Select from '../components/Select';
import Card from '../components/Card';

const CriarCampanha = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: '',
    segmento: '',
    dataInicio: '',
    dataFim: '',
    canal: '',
    mensagem: '',
    orcamento: '',
  });
  
  const [errors, setErrors] = useState({});
  
  const canaisOptions = [
    { value: 'email', label: 'E-mail' },
    { value: 'sms', label: 'SMS' },
    { value: 'push', label: 'Notificação Push' },
    { value: 'whatsapp', label: 'WhatsApp' },
  ];
  
  const segmentosOptions = [
    { value: 'todos', label: 'Todos os clientes' },
    { value: 'inativos', label: 'Clientes inativos' },
    { value: 'novos', label: 'Novos clientes' },
    { value: 'vip', label: 'Clientes VIP' },
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user corrects field
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.segmento) {
      newErrors.segmento = 'Selecione um segmento';
    }
    
    if (!formData.dataInicio) {
      newErrors.dataInicio = 'Data de início é obrigatória';
    }
    
    if (!formData.dataFim) {
      newErrors.dataFim = 'Data de término é obrigatória';
    } else if (formData.dataInicio && new Date(formData.dataFim) <= new Date(formData.dataInicio)) {
      newErrors.dataFim = 'Data de término deve ser posterior à data de início';
    }
    
    if (!formData.canal) {
      newErrors.canal = 'Selecione um canal de comunicação';
    }
    
    if (!formData.mensagem.trim()) {
      newErrors.mensagem = 'Mensagem é obrigatória';
    } else if (formData.mensagem.length < 10) {
      newErrors.mensagem = 'Mensagem muito curta (mínimo 10 caracteres)';
    }
    
    if (!formData.orcamento) {
      newErrors.orcamento = 'Orçamento é obrigatório';
    } else if (isNaN(Number(formData.orcamento)) || Number(formData.orcamento) <= 0) {
      newErrors.orcamento = 'Informe um valor válido maior que zero';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        showSuccess('Campanha criada com sucesso!');
        navigate('/campanhas');
      }, 1500);
    } else {
      showError('Por favor, corrija os erros no formulário.');
    }
  };
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="container mx-auto px-4 py-8"
    >
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Criar Nova Campanha</h1>
        <Button 
          variant="secondary" 
          onClick={() => navigate('/campanhas')}
          className="flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" clipRule="evenodd" />
          </svg>
          Voltar
        </Button>
      </div>
      
      <Card className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Nome da Campanha"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              error={errors.nome}
              required
              placeholder="Ex: Campanha Black Friday"
            />
            
            <Select
              label="Segmento"
              name="segmento"
              value={formData.segmento}
              onChange={handleChange}
              options={segmentosOptions}
              error={errors.segmento}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Data de Início"
              type="date"
              name="dataInicio"
              value={formData.dataInicio}
              onChange={handleChange}
              error={errors.dataInicio}
              required
            />
            
            <Input
              label="Data de Término"
              type="date"
              name="dataFim"
              value={formData.dataFim}
              onChange={handleChange}
              error={errors.dataFim}
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Select
              label="Canal de Comunicação"
              name="canal"
              value={formData.canal}
              onChange={handleChange}
              options={canaisOptions}
              error={errors.canal}
              required
            />
            
            <Input
              label="Orçamento (R$)"
              name="orcamento"
              value={formData.orcamento}
              onChange={handleChange}
              error={errors.orcamento}
              required
              placeholder="0,00"
              type="number"
              min="0"
              step="0.01"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Mensagem <span className="text-red-500">*</span>
            </label>
            <textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              rows="4"
              className={`w-full px-3 py-2 border ${errors.mensagem ? 'border-red-500' : 'border-gray-300'} 
                rounded-md shadow-sm focus:outline-none focus:ring-blue-500 
                focus:border-blue-500 transition-all duration-200`}
              placeholder="Digite a mensagem da campanha..."
            />
            {errors.mensagem && (
              <p className="mt-1 text-sm text-red-600">
                {errors.mensagem}
              </p>
            )}
          </div>
          
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <Button
              type="button"
              variant="secondary"
              className="mr-3"
              onClick={() => navigate('/campanhas')}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              variant="primary"
              isLoading={loading}
            >
              Criar Campanha
            </Button>
          </div>
        </form>
      </Card>
    </motion.div>
  );
};

export default CriarCampanha;
