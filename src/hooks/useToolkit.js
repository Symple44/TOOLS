// src/hooks/useToolkit.js
import { useState, useCallback } from 'react';
import { tools } from '../config/tools';

export const useToolkit = () => {
  const [currentTool, setCurrentTool] = useState('home');
  
  const getCurrentToolComponent = useCallback(() => {
    if (currentTool === 'home') {
      return null;
    }
    const tool = tools.find(t => t.id === currentTool);
    return tool ? tool.component : null;
  }, [currentTool]);
  
  return {
    currentTool,
    setCurrentTool,
    getCurrentToolComponent,
    tools
  };
};
