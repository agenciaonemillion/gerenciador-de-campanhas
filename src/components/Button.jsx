import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white',
  secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
  danger: 'bg-red-600 hover:bg-red-700 text-white',
  success: 'bg-green-600 hover:bg-green-700 text-white',
  disabled: 'bg-gray-300 text-gray-500 cursor-not-allowed'
};

const sizes = {
  sm: 'py-1 px-2 text-sm',
  md: 'py-2 px-4 text-base',
  lg: 'py-3 px-6 text-lg'
};

export default function Button({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  disabled = false,
  isLoading = false,
  onClick,
  ...rest 
}) {
  const variantClass = disabled ? variants.disabled : variants[variant];
  const sizeClass = sizes[size];
  
  return (
    <motion.button
      type={type}
      className={`rounded-md font-medium transition-all flex items-center justify-center ${variantClass} ${sizeClass} ${className}`}
      disabled={disabled || isLoading}
      onClick={onClick}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      {...rest}
    >
      {isLoading ? (
        <span className="mr-2">
          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
            <circle 
              className="opacity-25" 
              cx="12" 
              cy="12" 
              r="10" 
              stroke="currentColor" 
              strokeWidth="4"
              fill="none"
            />
            <path 
              className="opacity-75" 
              fill="currentColor" 
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </span>
      ) : null}
      {children}
    </motion.button>
  );
}
