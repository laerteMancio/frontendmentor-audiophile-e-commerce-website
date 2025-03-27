import React from 'react'
import "./Home.css"

import headphone from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg-preview.png"
import speaker from "../assets/product-zx9-speaker/mobile/image-category-page-preview.png"
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
        <div className='destaques-produtos'>
          <div className='container-efeito'>
            <img className='imagens-destaques' src={speaker} alt="Imagem categoria Headphone" />
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
      </div>


    </div>

  )
}

export default Home
