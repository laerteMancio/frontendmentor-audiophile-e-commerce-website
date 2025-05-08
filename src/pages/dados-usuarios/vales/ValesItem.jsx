import React from 'react'
import "./ValesItem.css"

const ValesItem = () => {
    return (
        <div className='container-componente-vales'>
            <h6>Lançamentos</h6>

            <div className='detalhes-vale'>
               
                <div className='caixa-dados-vale'>
                    <div className='itens-vale'>
                        <strong>Data:</strong>
                        <span>08/05/2024</span>
                    </div>
                    <div className='itens-vale'>
                        <strong>Motivo:</strong>
                        <span>Sem motivo</span>
                    </div>
                    <div className='itens-vale'>
                        <strong>Cod. Troca:</strong>
                        <span>165465198</span>
                    </div>
                    <div className='itens-vale'>
                        <strong>Status:</strong>
                        <span>Cancelado</span>
                    </div>
                </div>

                <div className='caixa-valor-vale'>
                    <span>R$ 100,00</span>
                </div>
            </div>





        </div>
    )
}

export default ValesItem
