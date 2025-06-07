import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

export default function Cardapio() {
  const [pratos, setPratos] = useState([]);
  const [mensagem, setMensagem] = useState('');


  useEffect(() => {
  const fetchPratos = async () => {
    try {
      const response = await axios.get('https://prova2-29-05-2025.onrender.com/cardapio');
      setPratos(response.data);
    } catch (error) {
      console.error('Erro ao buscar os pratos:', error);
      setMensagem('Erro ao carregar o cardápio. Tente novamente mais tarde.');
    }
  };

  fetchPratos();
}, []);


 /* useEffect(() => {
    const fetchPratos = async () => {
      try {
        const response = await axios.get('https://prova2-29-05-2025.onrender.com/cardapio');
        setPratos(response.data);
      } catch (error) {
        console.error('Erro ao buscar os pratos:', error);
        setMensagem('Erro ao carregar o cardápio. Tente novamente mais tarde.');
      }
    };

    fetchPratos();
  }, []);*/

  return (
    <div className="cardapio-container">
      <h2>Cardápio</h2>
      {mensagem && <p className="mensagem-erro">{mensagem}</p>}
      <ul className="lista-pratos">
        {pratos.map((prato) => (
          <li key={prato.id} className="item-prato">
            <h3>{prato.nome}</h3>
            <p>{prato.descricao}</p>
            <p>Preço: R$ {prato.preco}</p>
            <p>Categoria: {prato.categoria}</p>
            <p>Disponibilidade: {prato.disponibilidade}</p>
            {prato.urlImagem && <img src={prato.urlImagem} alt={prato.nome} />}
          </li>
        ))}
      </ul>
    </div>
  );
}
