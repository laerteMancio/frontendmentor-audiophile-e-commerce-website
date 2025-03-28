import React from 'react';
import "./Home.css";

import headphone from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg-preview.png";
import speaker from "../assets/product-zx9-speaker/mobile/image-category-page-preview.png";
import speakerHome from "../assets/home/mobile/image-speaker-zx9.png";
import earphone from "../assets/product-yx1-earphones/mobile/image-category-page-preview-removebg-preview.png";

const Home = () => {
  return (
    <main className='container-produtos'>

      {/* Categorias */}
      <section className='container-categorias'>
        <article className='produto-categorias'>
          <img className='imagens-categoria' src={headphone} alt="Categoria Headphone" />
          <div className='home-container-titulo'>
            <h3 className='home-titulo-categoria'>HEADPHONES</h3>
            <a href="/categoria/headphones" className='default-3'>SHOP</a>
          </div>
        </article>

        <article className='produto-categorias'>
          <img className='imagens-categoria' src={speaker} alt="Categoria Speakers" />
          <div className='home-container-titulo'>
            <h3 className='home-titulo-categoria'>SPEAKERS</h3>
            <a href="/categoria/speakers" className='default-3'>SHOP</a>
          </div>
        </article>

        <article className='produto-categorias'>
          <img className='imagens-categoria' src={earphone} alt="Categoria Earphones" />
          <div className='home-container-titulo'>
            <h3 className='home-titulo-categoria'>EARPHONES</h3>
            <a href="/categoria/earphones" className='default-3'>SHOP</a>
          </div>
        </article>
      </section>

      {/* Destaques */}
      <section className='container-destaques'>

        <article className='destaques-produtos-1'>
          <figure className='container-efeito'>
            <img className='imagens-destaques' src={speakerHome} alt="ZX9 Speaker" />
            <div className='circulo-1'></div>
            <div className='circulo-2'></div>
            <div className='circulo-3'></div>
            <figcaption>
              <h2>ZX9 SPEAKER</h2>
            </figcaption>
          </figure>
          <div className='container-info'>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <a href="/produto/zx9-speaker" className='default-destaque-1'>SEE PRODUCT</a>
          </div>
        </article>

        <article className='destaques-produtos-2'>
          <h3>ZX7 SPEAKER</h3>
          <a href="/produto/zx7-speaker" className='default-4'>SEE PRODUCT</a>
        </article>

        <article className='destaques-produtos-3'>
          <div className='destaques-3-cima'></div>
          <div className='destaques-3-baixo'>
            <h3>YX1 EARPHONES</h3>
            <a href="/produto/yx1-earphones" className='default-4'>SEE PRODUCT</a>
          </div>
        </article>
      </section>

      {/* Sobre */}
      <section className='home-sobre'>
        <div className='home-sobre-fundo'></div>
        <h2>Bringing you the <strong>best</strong> audio gear</h2>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </section>

    </main>
  );
};

export default Home;
