import React from 'react';
import ReactDOM from 'react-dom/client';
import { GitExpertApp } from './GitExpertApp';

// agregar los estilos globales
import './styles.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GitExpertApp />
  </React.StrictMode>,
)
