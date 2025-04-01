import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {

  const headphone = "https://www.dropbox.com/scl/fi/xs2kqrinwju2e6qf77oja/image-category-page-preview-removebg-preview.png?rlkey=bluefvgunqhb0afmx73btgzp2&raw=1"
  const speaker = "https://www.dropbox.com/scl/fi/c4pwtuynh34rtq0loc1yb/image-category-page-preview.png?rlkey=iqe6bovi686120efeoinn5rv8&raw=1"
  const speakerHome = "https://www.dropbox.com/scl/fi/i8jdx53jxng004lirrkn9/image-speaker-zx9.png?rlkey=1godayaaowzbn7il63w19lcrr&raw=1"
  const earphone = "https://www.dropbox.com/scl/fi/u6tbe8w91fq1qzz2m52am/image-category-page-preview-removebg-preview.png?rlkey=6c91d4fz0kq6febndeweh2av0&raw=1"

  return (
    <main className='container-produtos'>

      {/* Categorias */}
      <section className='container-categorias'>
        <article className='produto-categorias'>
          <img className='imagens-categoria' src={headphone} alt="Categoria Headphone" />
          <div className='home-container-titulo'>
            <h3 className='home-titulo-categoria'>HEADPHONES</h3>
            <Link to="/headphones" className="default-3">SHOP</Link>
          </div>
        </article>

        <article className='produto-categorias'>
          <img className='imagens-categoria' src={speaker} alt="Categoria Speakers" />
          <div className='home-container-titulo'>
            <h3 className='home-titulo-categoria'>SPEAKERS</h3>
            <Link to="/speakers" className="default-3">SHOP</Link>
          </div>
        </article>

        <article className='produto-categorias'>
          <img className='imagens-categoria' src={earphone} alt="Categoria Earphones" />
          <div className='home-container-titulo'>
            <h3 className='home-titulo-categoria'>EARPHONES</h3>
            <Link to="/earphones" className="default-3">SHOP</Link>
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
        <h2>Bringing you the <strong className='home-sobre-cor'>best</strong> audio gear</h2>
        <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
      </section>

    </main>
  );
};

export default Home;
