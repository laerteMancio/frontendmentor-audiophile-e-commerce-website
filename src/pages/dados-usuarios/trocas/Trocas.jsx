import React from 'react'
import "./Trocas.css"

// components
import TrocasItem from './TrocasItem'

const Trocas = () => {
  return (
    <div className='container-trocas'>
      <h5>Trocas</h5>
      <div className='container-trocas-itens'>
        <TrocasItem />
        <TrocasItem />
      </div>
      
      
      
   
    </div>
  )
}

export default Trocas
