// src/components/CadastroPrato/index.js
/*
import { useState } from "react";
import './styles.css';
import useMensagem from '../../hooks/useMensagem';
import logo from '../../assets/images/logo.png';
import axios from 'axios';*/

import React, { useState } from 'react';
import './styles.css';

function CadastroPrato() {
  const [formData, setFormData] = useState({
    nome: '',
    descricao: '',
    preco: '',
    categoria: '',
    disponibilidade: '',
    urlImagem: ''
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://prova2-29-05-2025.onrender.com/cardapio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    const data = await response.json();
    console.log('Prato cadastrado com sucesso:', data);
    // Limpar o formulário se necessário
    setFormData({
      nome: '',
      descricao: '',
      preco: '',
      categoria: '',
      disponibilidade: '',
      urlImagem: ''
    });
  } catch (error) {
    console.error('Erro ao cadastrar o prato:', error);
    alert('Erro ao cadastrar o prato. Verifique a conexão ou tente novamente.');
  }
};

  /*const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://prova2-29-05-2025.onrender.com/cardapio', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setMensagem('Prato cadastrado com sucesso!');
        setFormData({
          nome: '',
          descricao: '',
          preco: '',
          categoria: '',
          disponibilidade: '',
          urlImagem: ''
        });
      } else {
        const data = await response.json();
        setMensagem(data.message || 'Erro ao cadastrar prato.');
      }
    } catch (error) {
      setMensagem('Erro na requisição: ' + error.message);
    }
  };*/

  return (
    <div className="cadastro-container">
      <h2>Cadastrar Prato</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="nome" placeholder="Nome do prato" value={formData.nome} onChange={handleChange} required />
        <input type="text" name="descricao" placeholder="Descrição" value={formData.descricao} onChange={handleChange} required />
        <input type="number" step="0.01" name="preco" placeholder="Preço" value={formData.preco} onChange={handleChange} required />
        <input type="text" name="categoria" placeholder="Categoria" value={formData.categoria} onChange={handleChange} required />
        <input type="text" name="disponibilidade" placeholder="Disponibilidade" value={formData.disponibilidade} onChange={handleChange} required />
        <input type="text" name="urlImagem" placeholder="URL da Imagem" value={formData.urlImagem} onChange={handleChange} required />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
}






/*function CadastroPrato() {
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
}*/

export default CadastroPrato;
