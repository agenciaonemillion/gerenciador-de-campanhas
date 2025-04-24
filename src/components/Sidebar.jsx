import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Menu items for the sidebar
const menuItems = [
  { path: '/', label: 'Dashboard', icon: 'chart-bar' },
  { path: '/campanhas', label: 'Campanhas', icon: 'megaphone' },
  { path: '/segmentos', label: 'Segmentos', icon: 'user-group' },
  { path: '/resultados', label: 'Resultados', icon: 'chart-pie' },
  { path: '/configuracoes', label: 'Configurações', icon: 'cog' },
];

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isOpen, setIsOpen] = useState(!isMobile);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsOpen(!mobile);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Animation variants
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: isMobile ? -280 : 0, opacity: isMobile ? 0 : 1 }
  };

  return (
    <>
      {/* Mobile Hamburger Menu */}
      {isMobile && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="fixed top-4 left-4 z-30 p-2 rounded-md bg-blue-600 text-white"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      )}

      {/* Backdrop for mobile */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-20"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        variants={sidebarVariants}
        initial={isMobile ? "closed" : "open"}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, type: "tween" }}
        className={`fixed left-0 top-0 h-full bg-gray-800 text-white w-64 z-20 
                   shadow-lg overflow-y-auto ${isMobile ? 'top-0' : 'pt-4'}`}
      >
        <div className="px-4 py-5 flex items-center justify-between">
          <h1 className="text-xl font-bold">Campaign Manager</h1>
          {isMobile && (
            <button
              onClick={() => setIsOpen(false)}
              className="text-white p-1"
              aria-label="Close menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          )}
        </div>

        <nav className="mt-8">
          <ul className="space-y-2 px-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors duration-200
                             ${location.pathname === item.path
                      ? 'bg-blue-700 text-white'
                      : 'text-gray-300 hover:bg-gray-700'
                    }`}
                  onClick={() => isMobile && setIsOpen(false)}
                >
                  <span className="mr-3">
                    <i className={`fas fa-${item.icon}`}></i>
                  </span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </motion.aside>

      {/* Main content wrapper with margin for sidebar */}
      <div
        className={`transition-all duration-300 ${isOpen && !isMobile ? 'ml-64' : 'ml-0'}`}
      >
        {/* This div works as a spacer for the main content */}
        <div className={`${isMobile ? 'py-16' : ''}`}></div>
      </div>
    </>
  );
}
