import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: 'bg-white border-gray-200',
  primary: 'bg-blue-50 border-blue-200',
  warning: 'bg-yellow-50 border-yellow-200',
  danger: 'bg-red-50 border-red-200',
  success: 'bg-green-50 border-green-200'
};

export default function Card({ 
  children, 
  title, 
  variant = 'default', 
  className = '',
  isHoverable = false,
  ...rest 
}) {
  const cardVariant = variants[variant];
  
  return (
    <motion.div 
      className={`border rounded-lg shadow-sm overflow-hidden ${cardVariant} ${className} 
        ${isHoverable ? 'hover:shadow-md transition-shadow duration-200' : ''}`}
      whileHover={isHoverable ? { y: -3 } : {}}
      transition={{ duration: 0.2 }}
      {...rest}
    >
      {title && (
        <div className="px-4 py-3 border-b border-gray-200 font-medium">
          {title}
        </div>
      )}
      <div className="p-4">
        {children}
      </div>
    </motion.div>
  );
}
