import React, { useState } from 'react'

// DataProvider
import { useDados } from "../hooks/useDados"

import "./QtdProdutos.css"

const QtdProdutos = ({ produto }) => {

    const [qtdProduto, setQtdProduto] = useState(0)
    const { setCart } = useDados()

    const adicionar = () => {
        setQtdProduto(prev => prev + 1);
    }

    const subtrair = () => {
        if (qtdProduto > 0) {
            setQtdProduto(prev => prev - 1);
        }
    }

    const addToCart = () => {
        setCart(prev => [
            ...prev,
            {
                id: produto.id,
                descricao: produto.descricao,
                valor: parseFloat(parseFloat(produto.preco).toFixed(3)),
                qtd: qtdProduto,
                imagem: produto.imagemPrincipal
            }
        ]);
    }


    return (
        <>
            <label className='compra-detalhes-produto' htmlFor="quantidade">
                <span className='detalhes-produto-qtd'>
                    <button onClick={subtrair}>-</button>
                    {qtdProduto}
                    <button onClick={adicionar}>+</button>
                </span>
                <button onClick={addToCart} className="default-1">ADD TO CART</button>
            </label>
        </>
    )
}

export default QtdProdutos
