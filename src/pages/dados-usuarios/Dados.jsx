import React from 'react'
import { Link } from 'react-router-dom'

import { useDados } from '../../hooks/useDados'

import "./Dados.css"

import Pedidos from './Pedidos';
import Trocas from './Trocas';
import Vales from './Vales';
import SeusDados from './SeusDados';
import Enderecos from './Enderecos';

const Dados = () => {
    const { setConta, componenteState } = useDados()
    return (
        <div className='container-conta-usuario'>
            <Link onClick={() => setConta(false)} to={"/"}>Voltar</Link>
            <div>
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
