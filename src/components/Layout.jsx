import React from 'react'
import { Routes, Route } from "react-router-dom";

//components
import Home from "../pages/Home"
import Headphones from "../pages/Headphones";
import Speakers from "../pages/Speakers"
import Earphones from "../pages/Earphones"

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
      <Route path="/speakers" element={<Speakers />} />
      <Route path="/earphones" element={<Earphones />} />
    </Routes>
  );
}

export default Layout
