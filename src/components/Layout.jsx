import React from 'react'
import { Routes, Route } from "react-router-dom";

//components
import Home from "../pages/Home"
import Headphones from '../pages/Headphones';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/headphones" element={<Headphones />} />
    </Routes>
  );
}

export default Layout
