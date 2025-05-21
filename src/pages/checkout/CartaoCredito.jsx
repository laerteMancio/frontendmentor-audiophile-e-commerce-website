import React, { useState, useEffect } from "react";
import { useDados } from "../../hooks/useDados";

const CartaoCredito = () => {
  const { setDadosFinalizarCompra, dadosFinalizarCompra } = useDados();

  const [form, setForm] = useState({
    numeroCartao: "",
    nomeTitular: "",
    mes: "",
    ano: "",
    parcelamento: "",
  });

  // Carrega os dados salvos, se existirem
  useEffect(() => {
    if (dadosFinalizarCompra?.cartao) {
      setForm(dadosFinalizarCompra.cartao);
    }
  }, [dadosFinalizarCompra]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Atualiza no contexto, que também salva no localStorage
    setDadosFinalizarCompra((prev) => ({
      ...prev,
      cartao: form,
    }));

    alert("Dados de cartão salvos (exceto CVV por segurança)");
  };

  return (
    <form onSubmit={handleSubmit} className="formulario-cartoes">
      <h4>Cartão de Crédito</h4>

      <input
        type="text"
        name="numeroCartao"
        placeholder="Número do Cartão"
        value={form.numeroCartao}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="nomeTitular"
        placeholder="Nome do Titular"
        value={form.nomeTitular}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="mes"
        placeholder="Mês"
        value={form.mes}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="ano"
        placeholder="Ano"
        value={form.ano}
        onChange={handleChange}
        required
      />
      <select
        name="parcelamento"
        value={form.parcelamento}
        onChange={handleChange}
        required
      >
        <option value="">Escolha o parcelamento</option>
        {Array.from({ length: 12 }, (_, i) => (
          <option key={i + 1} value={`${i + 1}x`}>
            {i + 1}x sem juros
          </option>
        ))}
      </select>

      <button type="submit">Salvar Cartão</button>
    </form>
  );
};

export default CartaoCredito;
