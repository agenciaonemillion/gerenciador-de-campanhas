### v1.1.0-01

### Componente: Button.jsx
📦 Props: children, type, variant, size, className, disabled, isLoading, onClick, ...rest
📄 Estados: N/A (componente stateless)
⚙️ Funções: N/A
📌 Decisões técnicas:
- Utilização de Framer Motion para microinterações
- Sistema de variantes para estilos (primary, secondary, danger)
- Suporte a diferentes tamanhos (sm, md, lg)
- Estado de carregamento com spinner animado

### Componente: Input.jsx
📦 Props: label, error, type, className, required, helperText, id, ...props
📄 Estados: N/A (componente stateless)
⚙️ Funções: N/A
📌 Decisões técnicas:
- Criação de ID aleatório se não fornecido
- Suporte a mensagens de erro e ajuda
- Indicador visual de campos obrigatórios
- Transições suaves nos estados de erro/foco

### Componente: Card.jsx
📦 Props: children, title, variant, className, isHoverable, ...rest
📄 Estados: N/A (componente stateless)
⚙️ Funções: N/A
📌 Decisões técnicas:
- Sistema de variantes para contextos diferentes
- Opção de hover animation com Framer Motion
- Suporte a cabeçalho opcional

### Componente: Select.jsx
📦 Props: label, options, error, className, required, placeholder, id, ...props
📄 Estados: N/A (componente stateless)
⚙️ Funções: N/A
📌 Decisões técnicas:
- Interface similar ao componente Input para consistência
- Suporte a placeholder e opções desabilitadas
- Manipulação de erros visualmente consistente

### Componente: Sidebar.jsx
📦 Props: N/A
📄 Estados: isMobile, isOpen
⚙️ Funções: handleResize
📌 Decisões técnicas:
- Detecção automática de tamanho de tela
- Menu hambúrguer em telas pequenas
- Animações de transição com Framer Motion
- Backdrop para fechamento em dispositivos móveis

### Componente: CriarCampanha.jsx
📦 Props: nenhuma por enquanto
📄 Estados: formData, errors, loading
⚙️ Funções: handleSubmit, validateForm, handleChange
📌 Decisões técnicas:
- react-toastify para feedback
- Layout dividido em seções com responsividade por breakpoint
- Validação completa com mensagens de erro contextuais
- Simulação de carregamento para melhor UX

### Componente: Campanhas.jsx
📦 Props: N/A
📄 Estados: loading, campanhas
⚙️ Funções: renderStatus
📌 Decisões técnicas:
- Skeleton loader durante carregamento
- Tabela responsiva com scroll horizontal
- Status badges com sistema de cores semânticas
- Estado vazio com call-to-action
- Tooltips nos botões de ação

### Componente: NotFound.jsx
📦 Props: N/A
📄 Estados: N/A
⚙️ Funções: N/A
📌 Decisões técnicas:
- Animações com Framer Motion para melhor experiência
- Call-to-action claro para retorno à página principal
- Design minimalista e amigável

Resumo técnico reaproveitável
O aprimoramento visual e de UX do sistema de campanhas segmentadas foi concluído com sucesso. Foram implementados componentes reutilizáveis seguindo uma abordagem modular e consistente. A interface agora é totalmente responsiva, com sidebar adaptável e tabelas otimizadas para todos os dispositivos.

Adicionamos microinterações e transições suaves entre as páginas usando Framer Motion, bem como um sistema de feedback com react-toastify para melhorar a comunicação com o usuário. Os formulários agora contam com validações amigáveis e mensagens de erro contextuais.

A estrutura de pastas e nomeação de arquivos foi mantida conforme solicitado, garantindo a compatibilidade com o projeto existente. A solução está pronta para integração futura com backend, mantendo a separação de responsabilidades.

