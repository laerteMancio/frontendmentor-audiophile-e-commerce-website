import React from 'react';
import "./Endereco.css";

// utils
import { enviarDados } from "../../utils/funcoes";

// hooks
import { useDados } from '../../hooks/useDados';

const Endereco = ({ 
  id, 
  logradouro, 
  numero, 
  bairro, 
  cep, 
  cidade, 
  estado,
  isPrincipal, // Novo prop
  onSelecionarComoPrincipal // Novo prop
}) => {

  const { carregarEnderecos, usuarioId } = useDados();

  const deletarEndereco = async (id) => {
    try {
      const resposta = await enviarDados(`enderecos/${id}`, {}, false, "DELETE");
      console.log("Endereço deletado com sucesso:", resposta);
      carregarEnderecos(usuarioId.id);
    } catch (error) {
      console.error("Erro ao deletar endereço:", error);
    }
  };

  const marcarComoPrincipal = async () => {    
  try {
    const resposta = await enviarDados(
      `enderecos/principal/${id}`, // ID na rota
      {},                          // Sem body
      false,                       // Sem headers extras
      "PATCH"
    );    
    onSelecionarComoPrincipal(id); // Atualiza o componente pai
    carregarEnderecos(usuarioId.id);
  } catch (error) {
    console.error("Erro ao marcar como principal:", error);
  }
};


  return (
    <div className='container-componente-endereco'>    
      <div className='container-remover'>
        <button className='default' onClick={() => deletarEndereco(id)}>Remover</button>                
      </div>
      <h6>{logradouro + ' ' + numero}</h6>
      <span>{bairro + '-' + 'CEP' + ' ' + cep + '-' + cidade + '-' + estado}</span>
      <div>
        <label>
          <input 
            type="checkbox" 
            checked={isPrincipal}
            onChange={marcarComoPrincipal}
          /> Endereço Principal
        </label>
      </div>
    </div>
  );
};

export default Endereco;
