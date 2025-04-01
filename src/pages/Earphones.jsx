import React from 'react'
import { Link } from "react-router-dom";
import "./PaginaProdutos.css"

//Components
import Produtos from "../components/produtos/Produtos"
import Categorias from "../components/produtos/Categorias"

import { EarPhoneNew, listaEarPhones } from "../data/dataProdutos";


const Speakers = () => {

    return (
        <main className='container-produtos-pagina'>

            <section className="container-titulo-categorias">
                <h4>EARPHONES</h4>
            </section>
            {/* Produto Novidade */}
            <article className='produto-pagina'>
                <img className='imagem-produto-pagina' src={EarPhoneNew} alt="YX1 WIRELESS EARPHONES" />
                <h1 className='overline'>NEW PRODUCT</h1>
                <h3>YX1 WIRELESS EARPHONES</h3>
                <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                <Link to="/earphones" className="default-3">SEE PRODUCT</Link>                
            </article>


            <section className='lista-produtos'>
                {listaEarPhones.map((produto, index) => (
                    <Produtos
                        key={produto.id || index}
                        imagem={produto.imagem}
                        descricao={produto.descricao}
                        sobre={produto.sobre}
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
