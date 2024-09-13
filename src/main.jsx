import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'; // Importação do componente principal
import './index.css'; // Importação dos estilos globais
import { BrowserRouter } from 'react-router-dom'; // Importação do BrowserRouter para habilitar o roteamento
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)