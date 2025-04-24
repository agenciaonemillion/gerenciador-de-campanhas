import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
      <div className="flex min-h-screen bg-gray-50">
        <Sidebar />
        <main className="flex-1">
          <AppRoutes />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
