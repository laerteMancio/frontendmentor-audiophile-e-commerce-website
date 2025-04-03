import React from 'react'
import { Link } from 'react-router-dom'
import "./Produtos.css"

const Produtos = ({ imagem, descricao, sobre, link }) => {


    return (
        <>
            {/* Produto */}

            <article className='produto-componente'>
                <img className='imagem-produto-componente' src={imagem} alt="Imagem produto" />
                <h3>{descricao}</h3>
                <p>{sobre}</p>
                <Link to={link} className="default-1">
                    SEE PRODUCT
                </Link>
            </article>

        </>
    )
}

export default Produtos
