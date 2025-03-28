import React from 'react'
import "./Footer.css"

import logo from "../assets/shared/desktop/logo.svg"
import iconFaceBook from "../assets/shared/desktop/icon-facebook.svg"
import iconTwitter from "../assets/shared/desktop/icon-twitter.svg"
import iconInstagram from "../assets/shared/desktop/icon-instagram.svg"

const Footer = () => {
  return (
    <nav className='footer-pagina'>
      <div className='footer-container'>
        <img src={logo} alt="Logo" />
        <ul>
          <li><a href="/home">HOME</a></li>
          <li><a href="/headphones">HEADPHONES</a></li>
          <li><a href="/speakers">SPEAKERS</a></li>
          <li><a href="/earphones">EARPHONES</a></li>
        </ul>
        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</p>
        &copy; Copyright 2024. All Rights Reserved.
        <div className='icones-compartilhar'>
          <img src={iconFaceBook} alt="Icone compartilhar Facebook" />
          <img src={iconTwitter} alt="Icone compartilhar Twitter" />
          <img src={iconInstagram} alt="Icone compartilhar Instagram" />
        </div>
      </div>
    </nav>

  )
}

export default Footer
