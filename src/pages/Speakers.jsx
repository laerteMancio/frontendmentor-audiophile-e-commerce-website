import React from 'react'
import { Link } from "react-router-dom";
import "./PaginaProdutos.css"

//Components
import Produtos from "../components//produtos/Produtos"
import Categorias from "../components/produtos/Categorias"

import { SpeakerNew, listaSpeakers } from "../data/dataProdutos";

const Speakers = () => {

    return (
        <main className='container-produtos-pagina'>

            <section className="container-titulo-categorias">
                <h4>SPEAKERS</h4>
            </section>

            {/* Produto Novidade */}
            <article className='produto-pagina'>
                <img className='imagem-produto-pagina' src={SpeakerNew} alt="ZX9 speaker" />
                <h1 className='overline'>NEW PRODUCT</h1>
                <h3>ZX9 speaker</h3>
                <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                <Link to="/" className="default-1">SEE PRODUCT</Link>
            </article>


            <section>
                {listaSpeakers.map((produto, index) => (
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
