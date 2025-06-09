import CadastroPrato from '../../components/CadastroPrato'
import './styles.css'


// Recebe o prato que está sendo editado e a função para limpar a edição
export default function CadastroPage() {
  const [pratoEditando, setPratoEditando] = useState(null);

  return (
    <div>
      <CadastroPrato
        pratoEditando={pratoEditando}
        aoLimparEdicao={() => setPratoEditando(null)}
      />
      <Cardapio aoSelecionarPrato={(prato) => setPratoEditando(prato)} />
    </div>
  );
}