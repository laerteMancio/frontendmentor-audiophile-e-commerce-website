import React from 'react'
import { Link } from 'react-router-dom'

import { useDados } from '../../hooks/useDados'

import "./Dados.css"

const Dados = () => {
    const {setConta} = useDados()
    return (
        <div>
            <Link onClick={()=>setConta(false)} to={"/"}>Voltar</Link>
            <h1>Dados usuario</h1>
        </div>
    )
}

export default Dados
