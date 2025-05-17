import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./Enderecos.css";

// components
import Enderecos from "../../../components/enderecos/Endereco";

// context
import { useDados } from "../../../hooks/useDados";

const ListaEnderecos = () => {
  const { listaEnderecos, carregarEnderecos, usuarioId, exibirVoltar, setExibirVoltar } = useDados();
  const [enderecoPrincipalId, setEnderecoPrincipalId] = useState(null);

  const navigate = useNavigate()

  const handleVoltar = ()=>{
    setExibirVoltar(false)
    navigate("/finalizar-compra")
  }

  useEffect(() => {
    if (usuarioId && usuarioId.id) {
      carregarEnderecos(usuarioId.id);
    }
  }, [carregarEnderecos, usuarioId]);


  // Atualiza estado com o endereço principal
  useEffect(() => {
    const principal = listaEnderecos.find(e => e.principal === true); // ou e.eh_principal
    if (principal) {
      setEnderecoPrincipalId(principal.id);
    }
  }, [listaEnderecos]);

  return (
    <div className='container-usuario-enderecos'>
      {exibirVoltar ? <button onClick={handleVoltar} className='voltar-finalizar-compra'>
        Finalizar compra
      </button> : ""}

      <h5>Endereços</h5>
      <div className='lista-usuario-enderecos'>
        {listaEnderecos.length > 0 ? (
          listaEnderecos.map((endereco) => (
            <Enderecos
              key={endereco.id}
              id={endereco.id}
              logradouro={endereco.logradouro}
              numero={endereco.numero}
              bairro={endereco.bairro}
              cep={endereco.cep}
              cidade={endereco.cidade}
              estado={endereco.estado}
              isPrincipal={endereco.id === enderecoPrincipalId}
              onSelecionarComoPrincipal={setEnderecoPrincipalId}
            />
          ))
        ) : (
          <p>Nenhum endereço cadastrado.</p>
        )}
      </div>
      <Link to="/endereco" className='default-1'>Cadastrar endereço</Link>
    </div>
  );
};

export default ListaEnderecos;
