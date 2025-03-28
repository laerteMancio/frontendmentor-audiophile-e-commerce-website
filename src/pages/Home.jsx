import React from 'react'
import "./Home.css"

import headphone from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg-preview.png"
import speaker from "../assets/product-zx9-speaker/mobile/image-category-page-preview.png"
import speakerHome from "../assets/home/mobile/image-speaker-zx9.png"
import earphone from "../assets/product-yx1-earphones/mobile/image-category-page-preview-removebg-preview.png"


const Home = () => {
  return (
    <div className='container-produtos'>

      {/* Categorias */}

      <div className='container-categorias'>
        <div className='produto-categorias'>
          <img className='imagens-categoria' src={headphone} alt="Imagem categoria Headphone" />
          <div className='home-container-titulo'>
            <span className='home-titulo-categoria'>HEADPHONES</span>
            <button className='default-3'>SHOP</button>
          </div>
        </div>

        <div className='produto-categorias'>
          <img className='imagens-categoria' src={speaker} alt="Imagem categoria Speakers" />
          <div className='home-container-titulo'>
            <span className='home-titulo-categoria'>SPEAKERS</span>
            <button className='default-3'>SHOP</button>
          </div>
        </div>

        <div className='produto-categorias'>
          <img className='imagens-categoria' src={earphone} alt="Imagem categoria Earphones" />
          <div className='home-container-titulo'>
            <span className='home-titulo-categoria'>EARPHONES</span>
            <button className='default-3'>SHOP</button>
          </div>
        </div>
      </div>

      {/* Destaques */}

      <div className='container-destaques'>

        <div className='destaques-produtos-1'>
          <div className='container-efeito'>
            <img className='imagens-destaques' src={speakerHome} alt="Imagem categoria Headphone" />
            <div className='circulo-1'></div>
            <div className='circulo-2'></div>
            <div className='circulo-3'></div>
            <h2>ZX9 SPEAKER</h2>
          </div>
          <div className='container-info'>
            <p>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</p>
            <button className='default-destaque-1'>SEE PRODUCT</button>
          </div>
        </div>

        <div className='destaques-produtos-2'>
          <h4>ZX7 SPEAKER</h4>
          <button className='default-4'>SEE PRODUCT</button>
        </div>

        <div className='destaques-produtos-3'>
          <div className='destaques-3-cima'></div>
          <div className='destaques-3-baixo'>
            <h4>YX1 EARPHONES</h4>
            <button className='default-4'>SEE PRODUCT</button>
          </div>
        </div>

        <div className='home-sobre'>
          <div className='home-sobre-fundo'></div>
          <h4>Bringing you the <span className='home-sobre-cor'>best</span> audio gear</h4>
          <p>Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>

        </div>

      </div>


    </div>

  )
}

export default Home
