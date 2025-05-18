import React, { useEffect, useState } from 'react'

import "./FinalizarCompra.css"

import { Link } from 'react-router-dom'

import { useDados } from "../../hooks/useDados"

import { enviarDados } from '../../utils/funcoes'

const FinalizarCompra = () => {

  const { enderecoPrincipal, setExibirVoltar } = useDados()

  const [endereco, setEndereco] = useState('')

  useEffect(() => {
    setEndereco(enderecoPrincipal ? enderecoPrincipal : '')
  }, [enderecoPrincipal])



  const [freteSelecionado, setFreteSelecionado] = useState("");
  const [FpgSelecionada, setFpgSelecionada] = useState("");

  const [opcoesFrete, setOpcoesFrete] = useState([]);
  const [valorFrete, setValorFrete] = useState(0);
  const [valorProdutos] = useState(100); // valor fixo de exemplo




  const handleChangeTipoEntrega = (event) => {
    const valor = event.target.value;
    setFreteSelecionado(valor);

    const freteEscolhido = opcoesFrete.find(f => f.servico === valor);
    if (freteEscolhido) {
      const precoNumerico = Number(freteEscolhido.preco.replace("R$", "").replace(",", ".").trim());
      setValorFrete(precoNumerico);
    }
  };

  const handleChangeFpg = (event) => {
    setFpgSelecionada(event.target.value);
    console.log("Frete selecionado:", event.target.value);
  };

  const calcularFrete = async (cepDestino) => {
    const dados = {
      cepOrigem: "09973-180", // CEP fixo
      cepDestino
    };

    try {
      const resultado = await enviarDados("enderecos/calcularFrete", dados, false, "POST");
      setOpcoesFrete(resultado);
    } catch (erro) {
      console.error("Erro ao calcular o frete:", erro);
    }
  };

useEffect(() => {
  if (endereco?.cep) {
    calcularFrete(endereco.cep);
  }
}, [endereco.cep]);




  return (
    <div className='container-finalizar-compra'>
      <h6 className='title'>Finalizar Compra</h6>
      {/* Endereço de entrega */}
      <div className='finalizar-containers-itens'>
        <h6 className='subtitle'>Endereço de entrega</h6>
        <div className='container-itens-principal'>
          <span>{endereco.logradouro + ' ' + ',' + ' ' + endereco.numero}</span>
          <span>{'CEP: ' + endereco.cep + ' - ' + endereco.cidade + ' ' + endereco.estado}</span>
        </div>
        <div className='finalizar-link'>
          <Link to={"/ListaEnderecos"} onClick={() => setExibirVoltar(true)} className='default-1'>Usar outro endereço</Link>
        </div>
      </div>

      {/* Tipo de entrega */}

      <div className='finalizar-containers-itens'>
        <h6 className='subtitle'>Selecione o tipo de entrega</h6>
        <div className="container-itens-principal">
          {opcoesFrete.length > 0 && (
            <div className="fretes-opcoes">
              {opcoesFrete.map((frete, index) => (
                <label key={index} className="frete-item">
                  <input
                    type="radio"
                    name="frete"
                    value={frete.servico}
                    onChange={handleChangeTipoEntrega}
                    checked={freteSelecionado === frete.servico}
                  />
                  {frete.empresa} - {frete.servico} | {frete.preco} | {frete.prazoEntrega}
                </label>
              ))}
            </div>
          )}

          <p>Frete selecionado: {freteSelecionado || "Nenhum"}</p>
        </div>


      </div>

      {/* Forma de pagamento */}

      <div className='finalizar-containers-itens'>
        <h6 className='subtitle'>Selecione o tipo de entrega</h6>
        <div className="container-itens-principal">
          <label>
            <input
              type="radio"
              name="tipoFpg"
              value="credito"
              onChange={handleChangeFpg}
            />
            Cartão de crédito
          </label>

          <label>
            <input
              type="radio"
              name="tipoFpg"
              value="pix"
              onChange={handleChangeFpg}
            />
            Pix
          </label>

          <ol className='finalizar-lista-pix'>
            <li>
              Após a finalização do pedido, abra o app ou banco de sua preferência.
              Escolha a opção pagar com código Pix “copia e cola”, ou código QR.
            </li>
            <li>
              Copie e cole o código, ou escaneie o código Qr com a câmera do seu celular.
              Confira todas as informações e autorize o pagamento.
            </li>
            <li>
              Você vai receber a confirmação de pagamento no seu e-mail e através dos nossos canais. E pronto!
            </li>
          </ol>


          <p>Selecionado: {FpgSelecionada}</p>
        </div>

      </div>

      {/* Valor total */}
      <div className='finalizar-valor-total-itens'>
        <span>Frete:</span>
        <span>{valorFrete > 0 ? `R$ ${valorFrete.toFixed(2)}` : "R$ 0,00"}</span>
      </div>
      <div className='finalizar-valor-total-itens'>
        <span>Valor total:</span>
        <span>R$ {(valorProdutos + valorFrete).toFixed(2)}</span>
      </div>


      {/* Buttons finalizar */}
      <div className='finalizar-containers-itens'>
        <button className='default'>Clique aqui para ler o contrato de compra e venda</button>
        <button className='default-2'>Ver itens do pedido</button>
        <button className='default-1'>Finalizar pedido</button>
      </div>

    </div>
  )
}

export default FinalizarCompra
