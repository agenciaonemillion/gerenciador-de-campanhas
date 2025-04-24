# 🌟 Gerenciador de Campanhas Segmentadas – Frontend

> Interface web para gerenciamento visual de campanhas de marketing com segmentação de leads. Criado com foco em modularidade, UX avançada e escalabilidade futura com backend.

---

## 🥪 Stack Utilizada

- [ReactJS](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)

---

## 📂 Estrutura de Diretórios

```
src/
├── App.jsx
├── main.jsx
├── routes.jsx                  # Arquivo com rotas animadas
├── utils/
│   └── toast.js               # Utilitário para mensagens (toasts)
├── components/
│   ├── Button.jsx             # Botão reutilizável com variantes
│   ├── Input.jsx              # Input com validação e acessibilidade
│   ├── Select.jsx             # Dropdown genérico reutilizável
│   ├── Card.jsx               # Componente de card com hover/estilo
│   └── Sidebar.jsx            # Sidebar responsiva com menu hamburguer
├── pages/
│   ├── Dashboard.jsx
│   ├── Campanhas.jsx          # Listagem de campanhas com status e ações
│   ├── CriarCampanha.jsx      # Formulário validado de criação de campanha
│   ├── Segmentos.jsx          # (Placeholder futuro)
│   ├── Resultados.jsx         # (Placeholder futuro)
│   ├── Configuracoes.jsx
│   └── NotFound.jsx           # Página 404 animada
```

---

## ⚙️ Como Rodar Localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/sua-empresa/gerenciador-campanhas.git
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Execute o projeto:

   ```bash
   npm run dev
   ```

4. Acesse: [http://localhost:5173](http://localhost:5173)

---

## 📌 Versão Atual

**v1.1.0-01** – Aperfeiçoamento visual e de UX:
- Sidebar responsiva com animações
- Componentes reutilizáveis (Button, Input, Select, Card)
- Formulário validado com feedback visual
- Sistema de toasts com `react-toastify`
- Página 404 personalizada
- Tabela de campanhas com status, ações e loader
- Transições animadas com Framer Motion

📌 Checkpoint: `[CHECKPOINT: cod.frontend-ui-01]`

---

## 📄 Documentação Técnica e Changelog

Toda documentação detalhada, changelog e decisões de arquitetura estão no diretório `/docs/` ou disponíveis no manual do projeto com IA.

---

## 📢 Contato

Desenvolvido por [Agência One Million](https://agenciaonemillion.com.br) com apoio de IA e supervisão humana de qualidade.

---

> Este projeto faz parte de um ciclo de desenvolvimento orientado por IA com versionamento semântico, documentação viva e separação rigorosa de responsabilidades.

