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

//Endereco
import FormularioEndereco from '../pages/dados-usuarios/FormularioEndereco';

// Checkout
import Login from './login/Login';



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
      <Route path="/endereco" element={<FormularioEndereco />} />

      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
}

export default Layout
