import './styles.css'
import React, { useState } from 'react';
import CadastroPrato from '../../components/CadastroPrato';
import Cardapio from '../../components/Cardapio';



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