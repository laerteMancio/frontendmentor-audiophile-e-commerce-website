import React from 'react'
import "./PaginaProdutos.css"

//Components
import Produtos from "../components/Produtos"
import Categorias from "../components/Categorias"


const Speakers = () => {

    const SpeakerNew = "https://www.dropbox.com/scl/fi/4tfcerwxb60mf4d8l7zwc/image-product.jpg?rlkey=toi5wc8hdww7yespono39rc5g&raw=1"

    const listaProdutos = []


    return (
        <main className='container-produtos-pagina'>

            {/* Produto Novidade */}
            <section>
                <article className='produto-pagina'>
                    <img className='imagem-produto-pagina' src={SpeakerNew} alt="Imagem produto" />
                    <h1 className='overline'>NEW PRODUCT</h1>
                    <h3>YX1 WIRELESS EARPHONES</h3>
                    <p>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                    <button className='default-1'>SEE PRODUCT</button>
                </article>
            </section>

            <section className='lista-produtos'>
                {listaProdutos.map((produto, index) => (
                    <Produtos
                        key={index}
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
