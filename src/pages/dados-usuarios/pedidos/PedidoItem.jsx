import React from 'react'
import "./PedidoItem.css"

import imagemTeste from "../../../assets/product-xx59-headphones/mobile/image-product.jpg"

const PedidoItem = () => {
    return (
        <div className='container-componente-pedidos'>
            <div className='caixa-pedido'>
                <img src={imagemTeste} alt="Imagem item pedido" />
                <div className='dados-pedido'>
                    <h6 className='subtitle'>xx59-headphone</h6>

                    <div className='item-pedido'>
                        <span>Cor:</span>
                        <strong>Vermelho</strong>
                    </div>
                    <div className='item-pedido'>
                        <span>Tamanho:</span>
                        <strong>39-40</strong>
                    </div>
                    <div className='item-pedido'>
                        <span>Quantidade:</span>
                        <strong>1</strong>
                    </div>
                    <div className='item-pedido'>
                        <span>Valor:</span>
                        <strong>R$ 89,90</strong>
                    </div>
                </div>
            </div>

            <div className='caixa-status-entrega'>
                <div className='status-entrega'>
                    <strong>Status:</strong>
                    <span className='entrega-status'>Em separação</span>
                </div>
                <button className='default-1'>Acompanhar entrega</button>
            </div>
        </div>
    )
}

export default PedidoItem
