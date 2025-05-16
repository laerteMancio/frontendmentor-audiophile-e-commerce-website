import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import "./Enderecos.css";

// components
import Enderecos from "../../../components/enderecos/Endereco";

// context
import { useDados } from "../../../hooks/useDados";

const ListaEnderecos = () => {
  const { listaEnderecos, carregarEnderecos, usuarioId } = useDados();
  const [enderecoPrincipalId, setEnderecoPrincipalId] = useState(null);

  useEffect(() => {
    carregarEnderecos(usuarioId.id);
  }, [carregarEnderecos, usuarioId.id]);

  // Atualiza estado com o endereço principal
  useEffect(() => {
    const principal = listaEnderecos.find(e => e.principal === true); // ou e.eh_principal
    if (principal) {
      setEnderecoPrincipalId(principal.id);
    }
  }, [listaEnderecos]);

  return (
    <div className='container-usuario-enderecos'>
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
