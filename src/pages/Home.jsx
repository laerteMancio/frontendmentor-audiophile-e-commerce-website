import React from 'react'
import "./Home.css"

import headphone from "../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview-removebg-preview.png"
import speaker from "../assets/product-zx9-speaker/mobile/image-category-page-preview.png"
import earphone from "../assets/product-yx1-earphones/mobile/image-category-page-preview-removebg-preview.png"

const Home = () => {
  return (
    <div className='container-produtos'>



      <div className='produto-categorias'>
        <img className='headphone-categoria' src={headphone} alt="Imagem categoria Headphone" />
        <div className='home-container-titulo'>
          <span className='home-titulo-categoria'>HEADPHONES</span>
          <button className='default-3'>SHOP</button>
        </div>
      </div>

      <div className='produto-categorias'>
        <img className='headphone-categoria' src={speaker} alt="Imagem categoria Speakers" />
        <div className='home-container-titulo'>
          <span className='home-titulo-categoria'>SPEAKERS</span>
          <button className='default-3'>SHOP</button>
        </div>
      </div>

      <div className='produto-categorias'>
        <img className='headphone-categoria' src={earphone} alt="Imagem categoria Earphones" />
        <div className='home-container-titulo'>
          <span className='home-titulo-categoria'>EARPHONES</span>
          <button className='default-3'>SHOP</button>
        </div>
      </div>


    </div>

  )
}

export default Home
