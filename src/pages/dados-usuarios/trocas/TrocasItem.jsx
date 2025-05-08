import React from 'react'
import "./TrocasItem.css"

import imagemTeste from "../../../assets/product-xx59-headphones/mobile/image-product.jpg"

const TrocasItem = () => {
    return (
        <div className='container-componente-Trocas'>
            <div className='caixa-Trocas'>
                <img src={imagemTeste} alt="Imagem item trocas" />
                <div className='dados-troca'>
                    <h6 className='subtitle'>xx59-headphone</h6>

                    <div className='item-troca'>
                        <span>Cor:</span>
                        <strong>Vermelho</strong>
                    </div>
                    <div className='item-troca'>
                        <span>Tamanho:</span>
                        <strong>39-40</strong>
                    </div>
                    <div className='item-troca'>
                        <span>Quantidade:</span>
                        <strong>1</strong>
                    </div>
                    <div className='item-troca'>
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

            <div className='caixa-mensagem-troca'>
                <p>O prazo para análise dos produtos enviados para troca é de 5 dias úteis após o recebimento do produto pela Netshoes</p>
            </div>



        </div>
    )
}

export default TrocasItem
