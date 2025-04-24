import React, { forwardRef } from 'react';

const Select = forwardRef(({ 
  label, 
  options = [], 
  error,
  className = '', 
  required = false, 
  placeholder = 'Selecionar...',
  id,
  ...props 
}, ref) => {
  const selectId = id || `select-${Math.random().toString(36).substr(2, 9)}`;
  
  return (
    <div className="mb-4">
      {label && (
        <label 
          htmlFor={selectId} 
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      
      <select
        ref={ref}
        id={selectId}
        className={`w-full px-3 py-2 border ${error ? 'border-red-500' : 'border-gray-300'} 
          rounded-md shadow-sm focus:outline-none focus:ring-blue-500 
          focus:border-blue-500 transition-all duration-200 ${className}`}
        {...props}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      
      {error && (
        <p className="mt-1 text-sm text-red-600">
          {error}
        </p>
      )}
    </div>
  );
});

Select.displayName = 'Select';

export default Select;
