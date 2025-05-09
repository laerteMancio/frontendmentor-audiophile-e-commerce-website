import React from 'react'
import { Link } from 'react-router-dom'

import { useDados } from '../../hooks/useDados'

import "./Dados.css"

import Pedidos from '../dados-usuarios/pedidos/Pedidos';
import Trocas from '../dados-usuarios/trocas/Trocas';
import Vales from '../dados-usuarios/vales/Vales';
import SeusDados from '../dados-usuarios/seus-dados/SeusDados';
import Enderecos from '../dados-usuarios/enderecos/Enderecos';

const Dados = () => {
    const { setConta, componenteState } = useDados()
    return (
        <div className='container-conta-usuario'>
            <Link onClick={() => setConta(false)} to={"/"}>Voltar</Link>
            <div className='conta-lista-componentes'>
                {componenteState.componenteAtivo === "Pedidos" && <Pedidos />}
                {componenteState.componenteAtivo === "Trocas" && <Trocas />}
                {componenteState.componenteAtivo === "Vales" && <Vales />}
                {componenteState.componenteAtivo === "SeusDados" && <SeusDados />}
                {componenteState.componenteAtivo === "Enderecos" && <Enderecos />}
            </div>
        </div>
    )
}

export default Dados
