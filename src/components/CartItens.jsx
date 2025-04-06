import React from 'react';
import "./CartItens.css";

const CartItens = ({ item, atualizaQuantidade }) => {
    const imagem = item.imagem || '';
    const descricao = item.descricao ? item.descricao.replace(/Headphones|SPEAKER/gi, '').trim() : '';
    const preco = item.valor || 0;
   
    const adicionar = () => {
        atualizaQuantidade(item.id, 'add'); 
    };

    const subtrair = () => {
        if (item.qtd > 1) {
            atualizaQuantidade(item.id, 'subtrair');
        }
    };

    return (
        <div className='cart-itens'>
            <img src={imagem} alt="Imagem produto carrinho" />
            <div className='cart-preco-desc-itens'>
                <span id='descricao-itens'>{descricao}</span>
                <span id='preco-itens'>$ {preco}</span>
            </div>
            <label id='qtd-produtos-itens' htmlFor="quantidade">
                <span className='cart-produto-qtd-itens'>
                    <button onClick={subtrair}>-</button>
                    {item.qtd}
                    <button onClick={adicionar}>+</button>
                </span>
            </label>
        </div>
    );
};

export default CartItens;
