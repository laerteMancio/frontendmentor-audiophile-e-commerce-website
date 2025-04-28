import React from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

// Dados Provider
import { useDados } from '../../hooks/useDados';

// components
import CartItens from "./CartItens";

const Cart = () => {
    const { cart, setCart, closeCart, removeAll } = useDados();
    const tamanho = cart.length;

    const atualizaQuantidade = (id, operacao) => {
        setCart((prevCart) =>
            prevCart.map((item) => {
                if (item.id === id) {
                    const novaQtd = operacao === 'add' ? item.qtd + 1 : item.qtd - 1;
                    return { ...item, qtd: novaQtd };
                }
                return item;
            })
        );
    };

    return (
        <div className='container-carrinho'>
            <div className='cart-top'>
                <h6>{`Cart (${tamanho})`}</h6>
                <button onClick={removeAll} >Remove all</button>
            </div>

            <div className="cart-content">

                {tamanho > 0 ? (
                    cart.map((item) => (
                        <CartItens
                            key={item.id}
                            item={item}
                            atualizaQuantidade={atualizaQuantidade}
                        />
                    ))
                ) : (
                    <p>O carrinho está vazio.</p>
                )}

            </div>

            <div className='cart-bottom'>
                <span onClick={closeCart} className="default-1">
                    CONTINUAR COMPRANDO
                </span>
                <Link to="/checkout" onClick={closeCart} className="default-1">
                    FINALIZAR COMPRA
                </Link>
            </div>
        </div>
    );
};

export default Cart;
