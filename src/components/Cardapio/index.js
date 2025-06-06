import { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css'

export default function Cardapio() {
  const [pratos, setPratos] = useState([])
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    async function carregarPratos() {
      try {
        const resposta = await axios.get(`${process.env.REACT_APP_API_URL}/cardapio`)
        setPratos(resposta.data)
      } catch (error) {
        alert('Erro ao carregar os pratos')
      }
    }

    carregarPratos()
  }, [])

  const pratosFiltrados = filtro ? pratos.filter(p => p.categoria === filtro) : pratos

  return (
    <div className="cardapio-container">
      <div className="filtro">
        <label>Filtrar por categoria:</label>
       <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
  <option value="">Todos</option>
  <option value="ENTRADA">Entrada</option>
  <option value="PRATO_PRINCIPAL">Prato Principal</option>
  <option value="SOBREMESA">Sobremesa</option>
  <option value="BEBIDA">Bebida</option>
</select>

      </div>

      <div className="grid-cardapio">
        {pratosFiltrados.map(prato => (
          <div key={prato.id} className="card-prato">
            <img src={prato.urlImagem} alt={prato.nome} />
            <h3>{prato.nome}</h3>
            <p>R$ {parseFloat(prato.preco).toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
