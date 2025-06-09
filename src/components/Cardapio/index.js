import { useEffect, useState } from "react";
import './styles.css';
import useMensagem from '../../hooks/useMensagem';
import logo from '../../assets/images/logo.png';
import axios from 'axios';

function CadastroPrato({ pratoEditando, limparEdicao }) {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState('');
  const [categoria, setCategoria] = useState('');
  const [disponibilidade, setDisponibilidade] = useState('');
  const [urlImagem, setUrlImagem] = useState('');

  const { exibirMensagem } = useMensagem();

  // Carrega os dados do prato quando estiver em modo de edição
  useEffect(() => {
    if (pratoEditando) {
      setNome(pratoEditando.nome);
      setDescricao(pratoEditando.descricao);
      setPreco(pratoEditando.preco.toString());
      setCategoria(pratoEditando.categoria);
      setDisponibilidade(pratoEditando.disponibilidade);
      setUrlImagem(pratoEditando.urlImagem);
    }
  }, [pratoEditando]);

  const limparCampos = () => {
    setNome('');
    setDescricao('');
    setPreco('');
    setCategoria('');
    setDisponibilidade('');
    setUrlImagem('');
    if (limparEdicao) limparEdicao(); // para resetar o estado no App
  };

  const cadastrarOuAtualizar = async () => {
    const dadosPrato = {
      nome,
      descricao,
      preco: parseFloat(preco),
      categoria,
      disponibilidade,
      urlImagem
    };

    try {
      if (pratoEditando) {
        // Atualizar prato
        await axios.put(`${process.env.REACT_APP_API_URL}/cardapio`, {
          id: pratoEditando.id,
          ...dadosPrato
        });
        exibirMensagem('Prato atualizado com sucesso!', 'sucesso');
      } else {
        // Cadastrar novo prato
        await axios.post(`${process.env.REACT_APP_API_URL}/cardapio`, dadosPrato);
        exibirMensagem('Prato cadastrado com sucesso!', 'sucesso');
      }

      limparCampos();
    } catch (error) {
      let erroMsg = 'Erro ao conectar ao servidor.';
      if (error.response && error.response.data) {
        erroMsg = error.response.data.mensagem || 'Erro ao processar requisição.';
      }
      exibirMensagem(erroMsg, 'erro');
    }
  };

  return (
    <div className="container">
      <img src={logo} alt="Logo" />
      <h2>{pratoEditando ? 'Editar Prato' : 'Cadastro de Prato'}</h2>

      <form onSubmit={(e) => { e.preventDefault(); cadastrarOuAtualizar(); }}>
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

        <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
          <button type="submit">{pratoEditando ? 'ATUALIZAR' : 'CADASTRAR'} PRATO</button>
          {pratoEditando && (
            <button type="button" onClick={limparCampos} style={{ backgroundColor: '#999' }}>
              Cancelar
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default CadastroPrato;