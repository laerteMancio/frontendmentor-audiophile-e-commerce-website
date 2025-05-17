import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  const navigate = useNavigate()

  const { openCart, menuRef, openMenu, closeMenu, handleLogout, menuLogadoRef, verificarUsuarioLogado, closeMenuLogado, setaRef, conta, setConta } = useDados()

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
              

            </ul>
          </nav> :

          <nav ref={menuRef} className="menu-pagina">
            <ul>
              <li>
                <Link to="/pedidos">Pedidos</Link>
              </li>
              <li>
                <Link to="/trocas">Trocas</Link></li>
              <li>
                <Link to="/vales">Vales</Link>
              </li>
              <li>
                <Link to="/seus-dados">Seus Dados</Link>
              </li>
              <li>
                <Link to="/ListaEnderecos">Endereços</Link>
              </li>


              <li>
                <button onClick={() => {
                  setConta(false);
                  localStorage.setItem("conta", "false");
                  navigate("/");                  
                }}>
                  Sair
                </button>
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
                    <Link onClick={() => {
                      setConta(true);
                      localStorage.setItem("conta", "true");
                    }} to="/dados-usuario">
                      Meus dados
                    </Link>
                  </li>
                  <li>
                    <a href="#">Minhas Compras</a>
                  </li>
                  <li>
                    <Link
                      to="/"
                      onClick={(e) => {
                        e.preventDefault();
                        handleLogout();
                      }}
                    >
                      Logout
                    </Link>
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
