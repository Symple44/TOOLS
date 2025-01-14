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

// src/components/tools/docx-to-pdf/hooks/useFileConversion.js
export const useFileConversion = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);
  
  const handleFileSelect = useCallback((selectedFile) => {
    if (selectedFile?.name.endsWith('.docx')) {
      setFile(selectedFile);
      setStatus('fileSelected');
      setError(null);
    } else {
      setError("Veuillez sélectionner un fichier DOCX valide.");
    }
  }, []);
  
  const convertFile = useCallback(async (formData) => {
    setStatus('processing');
    try {
      // Logique de conversion à implémenter
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
    } catch (err) {
      setError("Une erreur est survenue lors de la conversion.");
      setStatus('error');
    }
  }, []);
  
  return {
    file,
    status,
    error,
    handleFileSelect,
    convertFile
  };
};
