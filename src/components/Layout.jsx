import React from 'react'
import { Routes, Route } from "react-router-dom";

//components
import Home from "../pages/Home"
import Headphones from "../pages/paginas-categorias/Headphones";
import Speakers from "../pages/paginas-categorias/Speakers"
import Earphones from "../pages/paginas-categorias/Earphones"
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada';

// components detalhes produtos

//Headphones
import Xx99MarkIIHeadphones from "../pages/detalhes-produtos/headphones/Xx99MarkIIHeadphones"
import Xx99MarkHeadphones from "../pages/detalhes-produtos/headphones/Xx99MarkHeadphones"
import Xx59Headphones from "../pages/detalhes-produtos/headphones/Xx59Headphones"

//Speakers
import Zx7Speaker from "../pages/detalhes-produtos/speakers/Zx7Speaker"
import Zx9Speaker from "../pages/detalhes-produtos/speakers/Zx9Speaker"

//Earphone
import Yx1WirelessEarPhones from "../pages/detalhes-produtos/earphones/Yx1WirelessEarPhones"

//Dados usuario
import FormularioEndereco from '../pages/dados-usuarios/enderecos/FormularioEndereco';
import ListaEnderecos from '../pages/dados-usuarios/enderecos/Enderecos';
import Pedidos from "../pages/dados-usuarios/pedidos/Pedidos"
import Trocas from '../pages/dados-usuarios/trocas/Trocas';
import Vales from '../pages/dados-usuarios/vales/Vales';
import SeusDados from '../pages/dados-usuarios/seus-dados/SeusDados';


//Login
import Login from './login/Login';

//Checkout
import FinalizarCompra from '../pages/checkout/FinalizarCompra';
import Endereco from './enderecos/Endereco';
import CartaoCredito from '../pages/checkout/CartaoCredito';


const Layout = () => {
  return (    
    <Routes>
      <Route path="/" element={<Home />} />
      {/* rotas categorias*/}
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/earphones" element={<Earphones />} />
      {/* rotas headphones*/}
      <Route path="/xx99MarkIIHeadphones" element={<Xx99MarkIIHeadphones />} />
      <Route path="/Xx99MarkHeadphones" element={<Xx99MarkHeadphones />} />
      <Route path="/Xx59Headphones" element={<Xx59Headphones />} />
      {/* rotas speakers*/}
      <Route path="/Zx7Speaker" element={<Zx7Speaker />} />
      <Route path="/Zx9Speaker" element={<Zx9Speaker />} />
      {/* rotas earphones*/}
      <Route path="/Yx1WirelessEarPhones" element={<Yx1WirelessEarPhones />} />
      {/* rotas login*/}
      <Route path="/login" element={<Login />} />
      {/* Dados usuario */}
      <Route path="/dados-usuario" element={<SeusDados />} />
      <Route path="/endereco" element={<FormularioEndereco />} />
      <Route path="/ListaEnderecos" element={<ListaEnderecos />} />
      <Route path="/pedidos" element={<Pedidos />} />
      <Route path="/trocas" element={<Trocas />} />
      <Route path="/vales" element={<Vales />} />
      <Route path="/seus-dados" element={<SeusDados />} />
      
      

       {/* rotas FinalizarCompra*/}
       <Route path="/finalizar-compra" element={<FinalizarCompra />} />
       <Route path="/cartao-credito" element={<CartaoCredito />} />


      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
}

export default Layout
