import React from 'react'
import "./PaginaProdutos.css"

//Components
import Produtos from "../components/Produtos"
import Categorias from "../components/Categorias"


const Speakers = () => {

    const SpeakerNew = "https://www.dropbox.com/scl/fi/76nyytrnqxm22ks28b5qu/image-product.jpg?rlkey=fad6cduy1o4njxtqr6x8rp6vs&raw=1"

    const listaProdutos = [
        {   
            imagem: "https://www.dropbox.com/scl/fi/x832vwrxcuwr82kxy312f/image-product.jpg?rlkey=9p21b9xa17grf6eiyer6gj0s2&raw=1",
            descricao: "ZX7 SPEAKER",
            sobre: "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use."
        }
    ]


    return (
        <main className='container-produtos-pagina'>

            {/* Produto Novidade */}
            <section>
                <article className='produto-pagina'>
                    <img className='imagem-produto-pagina' src={SpeakerNew} alt="Imagem produto" />
                    <h1 className='overline'>NEW PRODUCT</h1>
                    <h3>ZX9 speaker</h3>
                    <p>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                    <button className='default-1'>SEE PRODUCT</button>
                </article>
            </section>

            <section>
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
