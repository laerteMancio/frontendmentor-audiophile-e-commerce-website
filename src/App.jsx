import './App.css'

import { useEffect } from 'react'

import Header from "./components/Header"
import Layout from "./components/Layout"
import Footer from "./components/Footer"

import Cart from "./components/carrinho/Cart"

import { useDados } from './hooks/useDados'


function App() {  
  const { callCart, closeCart, layoutRef, closeMenu, setUsuarioId } = useDados()
    
  useEffect(() => {
    const verificarUsuarioLogado = async () => {
      try {
        const res = await fetch("http://localhost:3000/usuarios/usuario-logado", {
          credentials: "include", // envia cookie automaticamente
        });
  
        if (!res.ok) throw new Error("Não autenticado");
  
        const data = await res.json();
        setUsuarioId({ id: data.id, nome: data.nome }); // ou nome se você incluir no token
      } catch (err) {
        console.log("Usuário não autenticado ou sessão expirada");
      }
    };
  
    verificarUsuarioLogado();
  }, [setUsuarioId]);
  
  

  return (
    <div className='container-geral'>      
      <div className={callCart ? "aparecer" : "sumir"}>
        <Cart />
      </div>      
      
      {/* Cabeçalho */}
      <div className='header'>
        <Header />
      </div>      
      
      <div ref={layoutRef} onClick={() => (closeCart(), closeMenu())} className='layout'>
        <Layout />
      </div>
      <div onClick={closeCart} className='footer'>
        <Footer />
      </div>
    </div>
  )
}

export default App
