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

// src/components/layout/Header.jsx
export const Header = ({ openSidebar }) => (
  <header className="lg:hidden bg-white border-b px-4 py-3 flex items-center justify-between">
    <button
      onClick={openSidebar}
      className="p-2 rounded-md hover:bg-gray-100"
    >
      <Menu className="h-6 w-6" />
    </button>
    <h1 className="font-medium">Boîte à Outils</h1>
  </header>
);

// src/components/layout/Sidebar.jsx
export const Sidebar = ({ isOpen, onClose, tools, currentTool, onToolSelect }) => (
  <>
    <div className={`
      fixed inset-y-0 left-0 z-50 w-64 bg-white border-r transform transition-transform duration-200 ease-in-out
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      lg:translate-x-0 lg:static
    `}>
      <div className="h-full flex flex-col">
        <div className="p-4 border-b flex items-center justify-between">
          <h2 className="font-bold text-xl">Boîte à Outils</h2>
          <button onClick={onClose} className="lg:hidden p-2 rounded-md hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-6">
            {Object.entries(categories).map(([categoryId, category]) => (
              <div key={categoryId}>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
                  {category.name}
                </h3>
                <ul className="space-y-2">
                  {tools
                    .filter(tool => tool.category === categoryId)
                    .map(tool => (
                      <li key={tool.id}>
                        <button
                          onClick={() => {
                            onToolSelect(tool.id);
                            onClose();
                          }}
                          className={`
                            w-full flex items-center px-4 py-2 rounded-md
                            ${currentTool === tool.id 
                              ? 'bg-blue-50 text-blue-700' 
                              : 'text-gray-600 hover:bg-gray-50'}
                          `}
                        >
                          <tool.icon className="h-5 w-5 mr-3" />
                          {tool.name}
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </nav>

        <div className="p-4 border-t">
          <p className="text-sm text-gray-500">Version 1.0.0</p>
        </div>
      </div>
    </div>
    
    {isOpen && (
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />
    )}
  </>
);
