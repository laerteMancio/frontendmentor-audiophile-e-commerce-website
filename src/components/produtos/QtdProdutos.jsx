import React, { useState, useEffect } from 'react'

// DataProvider
import { useDados } from "../../hooks/useDados"

import "./QtdProdutos.css"

const QtdProdutos = ({ produto }) => {
    const { cart, setCart } = useDados();

    const [qtdProduto, setQtdProduto] = useState(0); 

    useEffect(() => {
        const itemNoCarrinho = cart.find(item => item.id === produto.id);
        if (itemNoCarrinho) {
            setQtdProduto(itemNoCarrinho.qtd);  
        }
    }, [cart, produto.id]);

    const adicionar = () => {
        setQtdProduto(prev => prev + 1);
    }

    const subtrair = () => {
        if (qtdProduto > 0) {
            setQtdProduto(prev => prev - 1);
        }
    }

    const addToCart = () => {
        if (qtdProduto <= 0) {
            alert("A quantidade não pode ser 0 para adicionar ao carrinho!");
            return;
        }
        
        const itemNoCarrinho = cart.find(item => item.id === produto.id);
        
        if (itemNoCarrinho) {            
            setCart(prevCart => 
                prevCart.map(item => 
                    item.id === produto.id ? { ...item, qtd: qtdProduto } : item
                )
            );
        } else {            
            setCart(prevCart => [
                ...prevCart,
                {
                    id: produto.id,
                    descricao: produto.descricao,
                    valor: parseFloat(parseFloat(produto.preco).toFixed(3)),
                    qtd: qtdProduto,
                    imagem: produto.imagemPrincipal
                }
            ]);
        }
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

export default QtdProdutos;
