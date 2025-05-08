import React from 'react'
import "./Pedidos.css"

// components
import PedidoItem from './PedidoItem'

const Pedidos = () => {
  return (
    <div className='container-pedidos'>
      <h5>Pedidos</h5>
      <div className='container-pedidos-itens'>
        <PedidoItem />
        <PedidoItem />
      </div>
      
      
      
   
    </div>
  )
}

export default Pedidos
