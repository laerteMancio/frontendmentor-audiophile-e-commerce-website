import React from 'react'
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home"

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />      
    </Routes>
  );
}

export default Layout
