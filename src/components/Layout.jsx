import React from 'react'
import { Routes, Route } from "react-router-dom";

//components
import Home from "../pages/Home"
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers"
import Earphones from "../pages/Earphones"
import PaginaNaoEncontrada from '../pages/PaginaNaoEncontrada';

// components detalhes produtos
import Xx99MarkIIHeadphones from "../pages/detalhes-produtos/Xx99MarkIIHeadphones"
import Xx99MarkHeadphones from "../pages/detalhes-produtos/Xx99MarkHeadphones"
import Xx59Headphones from "../pages/detalhes-produtos/Xx59Headphones"

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/earphones" element={<Earphones />} />
      <Route path="/xx99MarkIIHeadphones" element={<Xx99MarkIIHeadphones />} />
      <Route path="/Xx99MarkHeadphones" element={<Xx99MarkHeadphones />} />
      <Route path="/Xx59Headphones" element={<Xx59Headphones />} />

      <Route path="*" element={<PaginaNaoEncontrada />} />
    </Routes>
  );
}

export default Layout
