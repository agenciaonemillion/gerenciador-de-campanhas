import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import pages - these are placeholder imports that match the expected structure
// They'll be replaced by your actual components
import Dashboard from './pages/Dashboard';
import Campanhas from './pages/Campanhas';
import CriarCampanha from './pages/CriarCampanha';
import Segmentos from './pages/Segmentos';
import Resultados from './pages/Resultados';
import Configuracoes from './pages/Configuracoes';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/campanhas" element={<Campanhas />} />
        <Route path="/campanhas/criar" element={<CriarCampanha />} />
        <Route path="/segmentos" element={<Segmentos />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="/configuracoes" element={<Configuracoes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRoutes;
