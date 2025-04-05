import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Cart.css";

// Dados Provider
import { useDados } from '../hooks/useDados';

const Cart = () => {
    const { cart, closeCart } = useDados();
    

    const [qtdProduto, setQtdProduto] = useState(0);
    
    const tamanho = cart.length;
    const imagem = cart.length > 0 ? cart[0].imagem : '';
    const descricao = cart.length > 0 ? cart[0].descricao.replace(/Headphones|SPEAKER/gi, '').trim() : '';
    const preco = cart.length > 0 ? cart[0].valor : 0;

    useEffect(() => {
        if (cart.length > 0) {
            setQtdProduto(cart.length); // ou outro critério para definir a quantidade inicial
        }
    }, [cart]);

    const adicionar = () => {
        setQtdProduto(prev => prev + 1);
    };

    const subtrair = () => {
        if (qtdProduto > 0) {
            setQtdProduto(prev => prev - 1);
        }
    };

    return (
        <div className='container-carrinho'>
            <div className='cart-top'>
                <h6>{`Cart (${tamanho})`}</h6>
                <button>Remove all</button>
            </div>
            <div className='cart-content'>                
                {cart.length > 0 ? (
                    <div className='cart-itens'>
                        <img src={imagem} alt="Imagem produto carrinho" />
                        <div className='cart-preco-desc'>
                            <span id='descricao'>{descricao}</span>
                            <span id='preco'>$ {preco}</span>
                        </div>
                        <label id='qtd-produtos' htmlFor="quantidade">
                            <span className='cart-produto-qtd'>
                                <button onClick={subtrair}>-</button>
                                {qtdProduto}
                                <button onClick={adicionar}>+</button>
                            </span>
                        </label>
                    </div>
                ) : (
                    <p>O carrinho está vazio. Adicione produtos para começar.</p>
                )}
            </div>
            <div className='cart-bottom'>
                <Link to="/checkout" onClick={closeCart} className="default-1">CHECKOUT</Link>                
            </div>
        </div>
    );
};

export default Cart;
