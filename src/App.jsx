// src/App.jsx
import React from 'react';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import ToolPage from './pages/ToolPage';
import { useToolkit } from './hooks/useToolkit';

const App = () => {
  const { currentTool, setCurrentTool, getCurrentToolComponent, tools } = useToolkit();
  const ToolComponent = getCurrentToolComponent();

  return (
    <Layout>
      {currentTool === 'home' ? (
        <Home tools={tools} onToolSelect={setCurrentTool} />
      ) : (
        <ToolPage>
          {ToolComponent && <ToolComponent />}
        </ToolPage>
      )}
    </Layout>
  );
};

export default App;
