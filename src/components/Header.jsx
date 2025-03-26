import React from 'react'

//styles
import "./Header.css"

// Imagens
import cart from "../assets/shared/desktop/icon-cart.svg"
import logo from "../assets/shared/desktop/logo.svg"

const Header = () => {

  return (

    <header className='menu-navegacao'>
      <div className="hamburguer">
        <div></div>
        <div></div>
        <div></div>
      </div>
      <img src={logo} alt="Logo" />

      <nav className='menu-pagina'>
        <ul>
          <li><a href="/home">HOME</a></li>
          <li><a href="/headphones">HEADPHONES</a></li>
          <li><a href="/speakers">SPEAKERS</a></li>
          <li><a href="/earphones">EARPHONES</a></li>
        </ul>
      </nav>

      <img src={cart} alt="Ícone do carrinho de compras" />

      <div className='container-produto-header'>
        <div className='produto-header-1'>
          <span className='overline'>New product</span>
          <h2>XX99 Mark II Headphones</h2>
          <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
          <button className='default-1'>SEE PRODUCT</button>
        </div>
      </div>


    </header>


  )
}

export default Header

