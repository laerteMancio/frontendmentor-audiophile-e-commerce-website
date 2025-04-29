import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import "./PaginaProdutos.css"

//Components
import Produtos from "../../components/produtos/Produtos"
import Categorias from "../../components/produtos/Categorias"

// utils
import { buscarTabelas } from "../../utils/funcoes"


const Speakers = () => {

    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        const carregar = async () => {
            const data = await buscarTabelas("produtos/produtos-categorias", { categoriaId: 2 });

            if (data) {
                setProdutos(data);
            }
        };

        carregar();
    }, [])

    return (
        <main className='container-produtos-pagina'>

            <section className="container-titulo-categorias">
                <h4>SPEAKERS</h4>
            </section>

            {/* Produto Novidade */}
            <article className='produto-pagina'>
                {produtos.length > 0 ? <img className='imagem-produto-pagina' src={produtos[0].imagemPrincipal} alt={produtos.descricao} /> : ""}
                <h1 className='overline'>NEW PRODUCT</h1>
                <h3>{produtos.length > 0 ? produtos[0].descricao : ""} </h3>
                <p>{produtos.length > 0 ? produtos[0].sobre : ""}</p>
                <Link to={produtos.length > 0 ? produtos[0].link : ""} className="default-1">
                    SEE PRODUCT
                </Link>
            </article>


            <section>
                {produtos.slice(1).map((produto, index) => (
                    <Produtos
                        key={produto.id || index}
                        imagem={produto.imagemPrincipal}
                        descricao={produto.descricao}
                        sobre={produto.sobre}
                        link={produto.link}
                    />
                ))}
            </section>


            {/* Categorias */}
            <section className='container-sobre-pagina'>
                <article >
                    <Categorias />
                </article>
            </section>


        </main>

    )
}

export default Speakers
