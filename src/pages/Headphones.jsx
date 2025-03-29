import React from 'react'
import "./Headphones.css"

import headphone1 from "../assets/product-xx99-mark-two-headphones/mobile/image-product.jpg";

//Components
import Categorias from "../components/Categorias"


const Headphones = () => {
    return (
        <main className='container-produtos-componente'>

            {/* Produto */}
            <section className='container-produtos-componente'>
                <article className='produto-componente'>
                    <img className='imagem-produto-componente' src={headphone1} alt="Imagem produto" />
                    <h1 className='overline'>NEW PRODUCT</h1>
                    <h3>XX99 MARK II HEADPHONES</h3>
                    <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <button className='default-1'>SEE PRODUCT</button>
                </article>
            </section>

            {/* Categorias */}
            <section className='container-sobre-componente'>
                <article >
                    <Categorias />
                </article>
            </section>


        </main>

    )
}

export default Headphones
