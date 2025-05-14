import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import "./Enderecos.css"

//components
import Enderecos from "../../../components/enderecos/Endereco"

//context
import { useDados } from "../../../hooks/useDados";

const ListaEnderecos = () => {

  const  {listaEnderecos , carregarEnderecos, usuarioId} = useDados();

  useEffect(()=>{
    carregarEnderecos(usuarioId.id)
  },[carregarEnderecos, usuarioId.id])
  
  return (
    <div className='container-usuario-enderecos'>
      <h5>Enderecos</h5>
      <div className='lista-usuario-enderecos'>
        {listaEnderecos.length > 0 ? listaEnderecos.map((endereco) => (
          <Enderecos
            key={endereco.id}
            id={endereco.id}
            logradouro={endereco.logradouro}
            numero={endereco.numero}
            bairro={endereco.bairro}
            cep={endereco.cep}
            cidade={endereco.cidade}
            estado={endereco.estado}
          />
        )): ""}

      </div>
      <Link to="/endereco" className='default-1' >Cadastrar endereço</Link>

    </div>
  )
}

export default ListaEnderecos
