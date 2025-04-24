import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Button from '../components/Button';

const NotFound = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen px-4 text-center"
    >
      <div className="w-full max-w-md">
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring", 
            stiffness: 100, 
            duration: 0.8 
          }}
        >
          <h1 className="text-9xl font-bold text-blue-600">404</h1>
        </motion.div>
        
        <h2 className="mt-6 text-3xl font-bold text-gray-800">Página não encontrada</h2>
        
        <p className="mt-4 text-gray-600">
          A página que você está procurando não existe ou foi movida.
        </p>
        
        <div className="mt-10">
          <Link to="/">
            <Button variant="primary" size="lg" className="w-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 mr-2" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path 
                  fillRule="evenodd" 
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z" 
                  clipRule="evenodd" 
                />
              </svg>
              Voltar para o dashboard
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default NotFound;
