import React from 'react';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';
import './styles.css';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="home-container" role="main" aria-label="Página inicial do restaurante">
      <img src={logo} alt="Logo do Restaurante" className="logo" />
      <h1 tabIndex="0">Bem-vindo ao Restaurante</h1>
      <nav className="botoes" aria-label="Navegação principal">
        <button
          type="button"
          onClick={() => navigate('/cadastro')}
          aria-label="Cadastrar novo prato"
        >
          Cadastrar Prato
        </button>
        <button
          type="button"
          onClick={() => navigate('/cardapio')}
          aria-label="Ver cardápio"
        >
          Ver Cardápio
        </button>
      </nav>
    </main>
  );
}