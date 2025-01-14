// src/config/tools.js
import { FileText, File, Image } from 'lucide-react';
import DOCXToPDFConverter from '../components/tools/docx-to-pdf/DOCXToPDFConverter';

export const tools = [
  {
    id: 'docx-to-pdf',
    name: 'DOCX vers PDF',
    description: 'Convertissez vos documents Word en PDF avec page de garde et sommaire',
    icon: FileText,
    component: DOCXToPDFConverter,
    category: 'conversion'
  },
  // Exemple de structure pour futurs outils
  /* {
    id: 'pdf-merger',
    name: 'Fusion PDF',
    description: 'Fusionnez plusieurs fichiers PDF en un seul document',
    icon: File,
    component: PDFMerger,
    category: 'pdf'
  },
  {
    id: 'image-converter',
    name: 'Convertisseur d\'images',
    description: 'Convertissez vos images dans différents formats',
    icon: Image,
    component: ImageConverter,
    category: 'images'
  } */
];

export const categories = {
  conversion: {
    name: 'Conversion',
    description: 'Outils de conversion de fichiers'
  },
  pdf: {
    name: 'PDF',
    description: 'Manipulation de fichiers PDF'
  },
  images: {
    name: 'Images',
    description: 'Traitement d\'images'
  }
};
