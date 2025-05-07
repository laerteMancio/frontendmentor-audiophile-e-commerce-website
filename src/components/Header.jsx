import React from "react";
import { Link, useLocation } from "react-router-dom";

import { User } from "lucide-react";


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
  const { openCart, menuRef, openMenu, closeMenu, handleLogout, menuLogadoRef, verificarUsuarioLogado, closeMenuLogado, setaRef, conta, setConta, componenteDispatch } = useDados()

  return (
    <header onClick={() => (closeMenu(), closeMenuLogado())}
      className={`container-header ${local.pathname === "/" ? "" : "background-header"}`}>
      <div className="menu-navegacao">

        <div onClick={openMenu} className="hamburguer">
          <div></div>
          <div></div>
          <div></div>
        </div>

        <img src={logo} alt="Logo" />

        {!conta ?
          <nav ref={menuRef} className="menu-pagina">
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/headphones">HEADPHONES</Link>
              </li>
              <li>
                <Link to="/speakers">SPEAKERS</Link>                
              </li>
              <li>
                <Link to="/earphones">EARPHONES</Link>                
              </li>
              <li>
                <Link to="/endereco">ENDEREÇO</Link>                
              </li>
              <li>
                <a onClick={handleLogout} href="#">SAIR</a>
              </li>
            </ul>
          </nav> :

          <nav ref={menuRef} className="menu-pagina">
            <ul>

              <li onClick={() => componenteDispatch({ type: "MOSTRAR_PEDIDOS" })}>Pedidos</li>


              <li onClick={() => componenteDispatch({ type: "MOSTRAR_TROCAS" })}>Trocas</li>


              <li onClick={() => componenteDispatch({ type: "MOSTRAR_VALES" })}>Vales</li>


              <li onClick={() => componenteDispatch({ type: "MOSTRAR_SEUS_DADOS" })}>Seus Dados</li>


              <li onClick={() => componenteDispatch({ type: "MOSTRAR_ENDERECOS" })}>Enderecos</li>

              <li>
                <button onClick={handleLogout}>Sair</button>
              </li>
            </ul>
          </nav>
        }
        <div className="menu-icones">


          <div className="menu-login-icones">
            <div className="user-wrapper">
              <User onClick={verificarUsuarioLogado} className="w-6 h-6 cursor-pointer " />
              <div ref={setaRef} className="seta"></div>
              <nav ref={menuLogadoRef} className=" menu-usuario-logado">

                <ul>
                  <li>
                    <Link onClick={() => setConta(true)} to={"/dados-usuario"}> Meus dados</Link>
                  </li>
                  <li>
                    <a href="#">Minhas Compras</a>
                  </li>
                  <li>
                    <a href="#">Sair</a>
                  </li>
                </ul>
              </nav>
            </div>

            <img onClick={openCart} src={cart} alt="Ícone do carrinho de compras" />
          </div>



        </div>

      </div>

      <div className="container-produto-header">{local.pathname === "/" ? <ProdutoHeader /> : ""}</div>

    </header>
  );
};

export default Header;
