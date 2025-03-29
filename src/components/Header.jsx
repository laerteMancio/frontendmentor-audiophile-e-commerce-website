import React, { useReducer, useState } from "react";

// Styles
import "./Header.css";

// Imagens
import cart from "../assets/shared/desktop/icon-cart.svg";
import logo from "../assets/shared/desktop/logo.svg";

// Hooks
import { useDados } from "../hooks/useDados";

// Components
import ProdutoHeader from "./ProdutoHeader";
import TituloHeadPhones from "./TituloHeadPhones";
import TituloEarphones from "./TituloEarphones";
import TituloSpeakers from "./TituloSpeakers";

const componentsMap = {
  home: <ProdutoHeader />,
  headphones: <TituloHeadPhones />,
  earphones: <TituloEarphones />,
  speakers: <TituloSpeakers />,
};

const reducer = (_, action) => componentsMap[action] || <ProdutoHeader />;

const Header = () => {
  const { local } = useDados();
  
  const [componenteAtual, dispatch] = useReducer(reducer, componentsMap[local] || <ProdutoHeader />);
  const [backGroundHeader, setBackGroundHeader] = useState("background-header")

  // Atualiza o componente quando `local` muda
  React.useEffect(() => {
    dispatch(local);
  }, [local]);
  
  return (
    <header className={`container-header ${local !== "home" ? backGroundHeader : ""}`}>
      <div className="menu-navegacao">
        <div className="hamburguer">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img src={logo} alt="Logo" />

        <nav className="menu-pagina">
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

        <img src={cart} alt="Ícone do carrinho de compras" />
      </div>

      <div className="container-produto-header">{componenteAtual}</div>
    </header>
  );
};

export default Header;
