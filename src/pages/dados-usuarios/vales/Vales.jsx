import React from 'react'
import "./Vales.css"

// components
import ValesItem from './ValesItem'

const Vales = () => {
  return (
    <div className='container-vales'>
      <h5>Vales</h5>
      <div className='caixa-vales'>
        <div className='dados-vales'>
          <div className='item-vales'>
            <span>Saldo Total:</span>
            <strong>0,00</strong>
          </div>
          <div className='item-vales'>
            <span>Saldo a Liberar:</span>
            <strong>0,00</strong>
          </div>
        </div>
      </div>
      <div className='container-vales-itens'>
        <ValesItem />
        <ValesItem />
      </div>




    </div>
  )
}

export default Vales
