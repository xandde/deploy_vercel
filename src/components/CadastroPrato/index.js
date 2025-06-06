// src/components/CadastroPrato/index.js

import { useState } from "react";
import './styles.css';
import useMensagem from '../../hooks/useMensagem';
import logo from '../../assets/images/logo.png';
import axios from 'axios';


function CadastroPrato() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [urlImagem, setUrlImagem] = useState('');

  const { exibirMensagem } = useMensagem();
  
  console.log('https://prova2-29-05-2025.onrender.com', process.env.REACT_APP_API_URL);

  const cadastrarPrato = async () => {
    try {
      
  
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/cardapio`, {
        nome,
        descricao,
        preco: parseFloat(preco),
        categoria,
        disponibilidade,
        urlImagem
      });
      exibirMensagem(response.data.mensagem || 'Prato cadastrado com sucesso!', 'sucesso');

      // Limpa os campos
      setNome('');
      setDescricao('');
      setPreco('');
      setCategoria('');
      setDisponibilidade('');
      setUrlImagem('');
    } catch (error) {
      let erroMsg = 'Erro ao conectar ao servidor.';
      if (error.response && error.response.data) {
        erroMsg = error.response.data.mensagem || 'Erro ao cadastrar prato.';
      }
      exibirMensagem(erroMsg, 'erro');
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <h2>Cadastro de Prato</h2>

      <form onSubmit={(e) => { e.preventDefault(); cadastrarPrato(); }}>
        <input type="text" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} required />
        <textarea placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
        <input type="number" step="0.01" placeholder="Preço" value={preco} onChange={(e) => setPreco(e.target.value)} required />
        <select value={categoria} onChange={(e) => setCategoria(e.target.value)} required>
          <option value="">Selecione a Categoria</option>
          <option value="ENTRADA">Entrada</option>
          <option value="PRATO_PRINCIPAL">Prato Principal</option>
          <option value="SOBREMESA">Sobremesa</option>
          <option value="BEBIDA">Bebida</option>
        </select>
        <select value={disponibilidade} onChange={(e) => setDisponibilidade(e.target.value)} required>
          <option value="">Disponibilidade</option>
          <option value="EM_ESTOQUE">Em estoque</option>
          <option value="ESGOTADO">Esgotado</option>
        </select>
        <input type="text" placeholder="URL da Imagem" value={urlImagem} onChange={(e) => setUrlImagem(e.target.value)} required />

        {urlImagem && (
          <img 
            src={urlImagem} 
            alt="Prévia da imagem" 
            style={{ width: '200px', marginTop: '10px', borderRadius: '8px' }} 
          />
        )}

        <button type="submit">CADASTRAR PRATO</button>
      </form>

     
    </div>
  );
}

export default CadastroPrato;
