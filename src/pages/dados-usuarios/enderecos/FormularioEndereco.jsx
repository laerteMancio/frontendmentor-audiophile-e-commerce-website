import React, { useState } from "react";

import { Link } from "react-router-dom";

// utils
import { enviarDados } from "../../../utils/funcoes"

//hooks
import { useDados } from "../../../hooks/useDados"

import "./FormularioEndereco.css"


const FormularioEndereco = () => {

  const { usuarioId, exibirMensagem } = useDados()
  const [msgUsu, setMsgUsu] = useState("")

  const [formData, setFormData] = useState({
    usuario_id: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cep: "",
    cidade: "",
    estado: "",
    pais: "",
  });

  const limparCampos = () => {
    setFormData({
      usuario_id: usuarioId,
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cep: "",
      cidade: "",
      estado: "",
      pais: "",
    });
  };


  const dadosComUsuarioId = {
    ...formData,
    usuario_id: usuarioId.id,
  };


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      enviarDados("enderecos", dadosComUsuarioId);
      exibirMensagem(setMsgUsu, "Dados alterados com sucesso.");
      limparCampos()
    } catch (erro) {
      console.error("Erro ao enviar dados:", erro);
      if (erro.response && erro.response.data && erro.response.data.mensagem) {
        exibirMensagem(setMsgUsu, `Erro: ${erro.response.data.mensagem}`);
      } else {
        exibirMensagem(setMsgUsu, "Falha ao alterar os dados. Verifique sua conexão ou tente novamente mais tarde.");
      }
    }

  };

  return (
    <form className="FormularioEndereco" onSubmit={handleSubmit}>
      <h6>Adicionar novo endereço</h6>
      <div className="itens-form">
        <label>Logradouro:</label>
        <input type="text" name="logradouro" value={formData.logradouro} onChange={handleChange} required />
      </div>
      <div className="itens-form">
        <label>Número:</label>
        <input type="text" name="numero" value={formData.numero} onChange={handleChange} required />
      </div>
      <div className="itens-form">
        <label>Complemento:</label>
        <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} />
      </div>
      <div className="itens-form">
        <label>Bairro:</label>
        <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} required />
      </div>
      <div className="itens-form">
        <label>CEP:</label>
        <input type="text" name="cep" value={formData.cep} onChange={handleChange} required />
      </div>
      <div className="itens-form">
        <label>Cidade:</label>
        <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} required />
      </div>
      <div className="itens-form">
        <label>Estado:</label>
        <input type="text" name="estado" value={formData.estado} onChange={handleChange} required />
      </div>
      <div className="itens-form">
        <label>País:</label>
        <input type="text" name="pais" value={formData.pais} onChange={handleChange} required />
      </div>
      <div className="itens-form-footer">
        <span>{msgUsu}</span>
        <button className="default-1" type="submit">Gravar</button>
        <Link to={"/dados-usuario"}>Voltar</Link>
        
      </div>
    </form>
  );
};

export default FormularioEndereco;
