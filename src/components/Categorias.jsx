import React from 'react'
import "./Categorias.css"

import headphone from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg-preview.png";
import speaker from "../assets/product-zx9-speaker/mobile/image-category-page-preview.png";
import earphone from "../assets/product-yx1-earphones/mobile/image-category-page-preview-removebg-preview.png";

const Categorias = () => {
    return (
        <>
            {/* Categorias */}
            <section className='container-categorias-componente'>
                <article className='produto-categorias-componente'>
                    <img className='imagens-categoria-componente' src={headphone} alt="Categoria Headphone" />
                    <div className='home-container-titulo-componente'>
                        <h3 className='home-titulo-categoria-componente'>HEADPHONES</h3>
                        <a href="/categoria/headphones" className='default-3'>SHOP</a>
                    </div>
                </article>

                <article className='produto-categorias-componente'>
                    <img className='imagens-categoria-componente' src={speaker} alt="Categoria Speakers" />
                    <div className='home-container-titulo-componente'>
                        <h3 className='home-titulo-categoria-componente'>SPEAKERS</h3>
                        <a href="/categoria/speakers" className='default-3'>SHOP</a>
                    </div>
                </article>

                <article className='produto-categorias-componente'>
                    <img className='imagens-categoria-componente' src={earphone} alt="Categoria Earphones" />
                    <div className='home-container-titulo-componente'>
                        <h3 className='home-titulo-categoria-componente'>EARPHONES</h3>
                        <a href="/categoria/earphones" className='default-3'>SHOP</a>
                    </div>
                </article>
            </section>

            {/* Sobre */}
            <section className='home-sobre-componente'>
                <div className='home-sobre-fundo-componente'></div>
                <h2>Bringing you the <strong className='home-sobre-cor-componente'>best</strong> audio gear</h2>
                <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
            </section>


        </>
    )
}

export default Categorias
