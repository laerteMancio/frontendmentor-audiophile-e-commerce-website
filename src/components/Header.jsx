import React from 'react'

//styles
import "./Header.css"

// Imagens
import cart from "../assets/shared/desktop/icon-cart.svg"
import logo from "../assets/shared/desktop/logo.svg"

const Header = () => {
  return (
    <header className='header-conteudo'>
      <div className='menu-navegacao'>
        <img src={logo} alt="Logo" />

        <nav>
          <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/headphones">HEADPHONES</a></li>
            <li><a href="/speakers">SPEAKERS</a></li>
            <li><a href="/earphones">EARPHONES</a></li>
          </ul>
        </nav>

        <img src={cart} alt="Ícone do carrinho de compras" />
      </div>


      <div className='conteudo-produtos'>
        <span className='overline'>New product</span>
        <h1>XX99 Mark II Headphones</h1>
        <p>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <button className='default-1'>SEE PRODUCT</button>
      </div>

      


    </header>


  )
}

export default Header

