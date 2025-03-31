import React from 'react'
import "./Categorias.css"

const Categorias = () => {

    const headphone = "https://www.dropbox.com/scl/fi/xs2kqrinwju2e6qf77oja/image-category-page-preview-removebg-preview.png?rlkey=bluefvgunqhb0afmx73btgzp2&raw=1";
    const speaker = "https://www.dropbox.com/scl/fi/c4pwtuynh34rtq0loc1yb/image-category-page-preview.png?rlkey=iqe6bovi686120efeoinn5rv8&raw=1";
    const earphone = "https://www.dropbox.com/scl/fi/u6tbe8w91fq1qzz2m52am/image-category-page-preview-removebg-preview.png?rlkey=6c91d4fz0kq6febndeweh2av0&raw=1";

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
