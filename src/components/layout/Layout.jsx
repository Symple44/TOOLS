// src/components/layout/Layout.jsx
import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header openSidebar={() => setIsSidebarOpen(true)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <main className={`lg:ml-64 min-h-screen ${isSidebarOpen ? 'blur-sm' : ''} lg:blur-none`}>
        {children}
      </main>
    </div>
  );
};
