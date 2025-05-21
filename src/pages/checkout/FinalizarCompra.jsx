import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import "./FinalizarCompra.css";
import { useDados } from "../../hooks/useDados";
import { enviarDados } from '../../utils/funcoes';

const FinalizarCompra = () => {
  const navigate = useNavigate();
  const {
    enderecoPrincipal,
    setExibirVoltar,
    dadosFinalizarCompra,
    setDadosFinalizarCompra,
    usuarioId,
    cart
  } = useDados();

  const [endereco, setEndereco] = useState('');
  const [freteSelecionado, setFreteSelecionado] = useState('');
  const [FpgSelecionada, setFpgSelecionada] = useState('');
  const [opcoesFrete, setOpcoesFrete] = useState([]);
  const [valorFrete, setValorFrete] = useState(0);
  const [valorProdutos, setValorProdutos] = useState(0);


//Calcula o total da compra
  useEffect(() => {
    if (cart && cart.length > 0) {
      const total = cart.reduce((acc, item) => acc + (item.valor * item.qtd), 0);
      setValorProdutos(total);

      // Adiciona ao objeto principal se desejar:
      setDadosFinalizarCompra((prev) => ({
        ...prev,
        cart,
        valorItens: total
      }));
    }
  }, [cart, setDadosFinalizarCompra]);



  // carregar os itens do carrinho
  useEffect(() => {
    if (cart && cart.length > 0) {
      setDadosFinalizarCompra((prev) => ({
        ...prev,
        cart
      }));
    }
  }, [cart, setDadosFinalizarCompra]);


  // Carregar endereço principal para exibicao do usuário
  useEffect(() => {
    setEndereco(enderecoPrincipal)
  }, [enderecoPrincipal])

  // Carregar endereco principal em finalizar compra
  useEffect(() => {
    if (
      enderecoPrincipal &&
      JSON.stringify(dadosFinalizarCompra?.endereco) !== JSON.stringify(enderecoPrincipal)
    ) {
      setDadosFinalizarCompra((prev) => ({
        ...prev,
        endereco: enderecoPrincipal
      }));
    }
  }, [enderecoPrincipal, dadosFinalizarCompra, setDadosFinalizarCompra]);


  const handleChangeTipoEntrega = (event) => {
    const valor = event.target.value;
    setFreteSelecionado(valor);

    const freteEscolhido = opcoesFrete.find(f => f.servico === valor);
    if (freteEscolhido) {
      const precoNumerico = Number(freteEscolhido.preco.replace("R$", "").replace(",", ".").trim());
      setValorFrete(precoNumerico);

      setDadosFinalizarCompra((prev) => ({
        ...prev,
        frete: {
          servico: freteEscolhido.servico,
          valorFrete: precoNumerico
        }
      }));
    }
  };

  const handleChangeFpg = (e) => {
    const value = e.target.value;
    setFpgSelecionada(value);

    if (value === "credito") {
      setDadosFinalizarCompra((prev) => {
        const { pix, ...rest } = prev; // remove o campo 'pix'
        return {
          ...rest,
          formaPagamento: "credito"
        };
      });
      navigate("/cartao-credito");
    }

    if (value === "pix") {
      handlePagamentoPix(); // essa já inclui formaPagamento e o objeto pix
    }
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

  const handlePagamentoPix = () => {
    setDadosFinalizarCompra((prev) => ({
      ...prev,
      formaPagamento: "pix",
      pix: {
        nome: usuarioId?.nome, // exemplo
        status: "pendente",
        // outros dados opcionais
      },
    }));
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
          <Link to={"/ListaEnderecos"} onClick={() => setExibirVoltar(true)} className='default-1'>
            Usar outro endereço
          </Link>
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
        <h6 className='subtitle'>Selecione o tipo de pagamento</h6>
        <div className="container-itens-principal">
          <label>
            <input
              type="radio"
              name="tipoFpg"
              value="credito"
              checked={FpgSelecionada === "credito"}
              onChange={handleChangeFpg}
            />
            Cartão de crédito
          </label>

          <label>
            <input
              type="radio"
              name="tipoFpg"
              value="pix"
              checked={FpgSelecionada === "pix"}
              onChange={handleChangeFpg}
            />
            Pix
          </label>

          {FpgSelecionada === "pix" && (
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
          )}

          <p>Selecionado: {FpgSelecionada || "Nenhum"}</p>
        </div>
      </div>

      {/* Valor total */}
      <div className='finalizar-valor-total-itens'>
        <span>Valor dos itens:</span>
        <span>R$ {valorProdutos.toFixed(2)}</span>
      </div>
      <div className='finalizar-valor-total-itens'>
        <span>Frete:</span>
        <span>{valorFrete > 0 ? `R$ ${valorFrete.toFixed(2)}` : "R$ 0,00"}</span>
      </div>
      <div className='finalizar-valor-total-itens'>
        <span>Valor total:</span>
        <span>R$ {(valorProdutos + valorFrete).toFixed(2)}</span>
      </div>


      {/* Botões de ação */}
      <div className='finalizar-containers-itens'>
        <button className='default'>Clique aqui para ler o contrato de compra e venda</button>
        <button className='default-2'>Ver itens do pedido</button>
        <button className='default-1'>Finalizar pedido</button>
      </div>
    </div>
  );
};

export default FinalizarCompra;
