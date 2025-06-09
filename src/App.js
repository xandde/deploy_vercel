
// App.js

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CadastroPage from './pages/CadastroPage';
import CardapioPage from './pages/CardapioPage';
import { useState } from 'react';

export default function AppRoutes() {
  const [pratoEditando, setPratoEditando] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route 
          path="/cadastro" 
          element={<CadastroPage pratoEditando={pratoEditando} limparEdicao={() => setPratoEditando(null)} />} 
        />
        <Route 
          path="/cardapio" 
          element={<CardapioPage onEditar={setPratoEditando} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}