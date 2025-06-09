import Cardapio from '../../components/Cardapio'
import './styles.css'

// Recebe a função que será usada para definir o prato que será editado
export default function CardapioPage({ onEditar }) {
  return (
    <div>
      <Cardapio onEditar={onEditar} />
    </div>
  );
}