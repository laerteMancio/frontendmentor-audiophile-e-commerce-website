import React, { useState } from 'react';
import "../../detalhes-produtos/DetalhesProdutos.css";

// Components
import Categorias from "../../../components/produtos/Categorias";
import CategoriasDetalhes from '../../../components/produtos/CategoriasDetalhes';

// Data
import { listaDetalhesHeadPhones } from "../../../data/dataProdutos";

// DataProvider
import { useDados } from "../../../hooks/useDados"

const Xx99MarkHeadphones = () => {
    const produto = listaDetalhesHeadPhones[1];
    const [qtdProduto, setQtdProduto] = useState(0)
    const {setCart } = useDados()

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
        <main className='container-detalhes-pagina'>
            {/* Produto Novidade */}
            <section>
                <article className='detalhes-pagina'>
                    <img className='imagem-detalhes-pagina' src={produto.imagemPrincipal} alt={produto.descricao} />
                    <h1 className='overline'>NEW PRODUCT</h1>
                    <h3>{produto.descricao}</h3>
                    <p>{produto.sobre}</p>
                    <strong>$ {produto.preco}</strong>

                    <label className='compra-detalhes-produto' htmlFor="quantidade">
                        <span className='detalhes-produto-qtd'>
                            <button onClick={subtrair}>-</button>
                            {qtdProduto}
                            <button onClick={adicionar}>+</button>
                        </span>
                        <button onClick={addToCart} className="default-1">ADD TO CART</button>
                    </label>


                    <h4>FEATURES</h4>
                    <p>{produto.features}</p>

                    <h4>IN THE BOX</h4>
                    <ul>
                        {produto.inTheBox.map((item, index) => (
                            <li key={index}>
                                <strong className='detalhes-span-qtd'>{item.quantidade}</strong> <span>{item.descricao}</span>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className='container-categorias-2-detalhes'>
                <article>
                <CategoriasDetalhes imgGaleria1={produto.img1} imgGaleria2={produto.img2} imgGaleria3={produto.img3} />
                </article>
            </section>

            {/* Categorias */}
            <section className='container-sobre-detalhes'>
                <article>
                    <Categorias />
                </article>
            </section>
        </main>
    );
}

export default Xx99MarkHeadphones;
