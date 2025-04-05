import React from "react";
import { useLocation } from "react-router-dom";

// Styles
import "./Header.css";

// Imagens
import cart from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";

// Components
import ProdutoHeader from "./produtos/ProdutoHeader";

//context
import { useDados } from "../hooks/useDados";


const Header = () => {
  const local = useLocation()
  const { openCart } = useDados()
  

  return (
    <header className={`container-header ${local.pathname === "/" ? "" : "background-header"}`}>      
      <div className="menu-navegacao">
        <div className="hamburguer">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img  src={logo} alt="Logo" />

        <nav  className="menu-pagina">
          <ul>
            <li>
              <a href="/home">HOME</a>
            </li>
            <li>
              <a href="/headphones">HEADPHONES</a>
            </li>
            <li>
              <a href="/speakers">SPEAKERS</a>
            </li>
            <li>
              <a href="/earphones">EARPHONES</a>
            </li>
          </ul>
        </nav>

        <img onClick={openCart} src={cart} alt="Ícone do carrinho de compras" />
      </div>

      <div  className="container-produto-header">{local.pathname === "/" ? <ProdutoHeader /> : ""}</div>

    </header>
  );
};

export default Header;
