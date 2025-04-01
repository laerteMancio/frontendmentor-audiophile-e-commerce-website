import React from 'react'
import "./Produtos.css"

const Produtos = ({ imagem, descricao, sobre }) => {


    return (
        <>
            {/* Produto */}

            <article className='produto-componente'>
                <img className='imagem-produto-componente' src={imagem} alt="Imagem produto" />
                <h3>{descricao}</h3>
                <p>{sobre}</p>
                <button className='default-1'>SEE PRODUCT</button>
            </article>

        </>
    )
}

export default Produtos
