import './App.css'

import Header from "./components/Header"
import Layout from "./components/Layout"
import Footer from "./components/Footer"

import Cart from "./components/Cart"

import { useDados } from './hooks/useDados'

function App() {  
  const { callCart, closeCart, layoutRef } = useDados()
    
 

  return (
    <div className='container-geral'>      
      <div className={callCart ? "aparecer" : "sumir"}>
        <Cart />
      </div>      
      
      {/* Cabeçalho */}
      <div className='header'>
        <Header />
      </div>      
      
      <div ref={layoutRef} onClick={closeCart} className='layout'>
        <Layout />
      </div>
      <div onClick={closeCart} className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
