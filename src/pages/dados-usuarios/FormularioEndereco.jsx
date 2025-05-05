import React, { useState } from "react";

// utils
import { enviarDados } from "../../utils/funcoes"

import "./FormularioEndereco.css"


const FormularioEndereco = () => {
  const [formData, setFormData] = useState({    
    usuario_id:"",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cep: "",
    cidade: "",
    estado: "",
    pais: "",
  });

  


  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    enviarDados("endereco", formData);

  };

  return (
    <form className="FormularioEndereco" onSubmit={handleSubmit}>
      <div className="itens-form">
        <label>Logradouro:</label>
        <input type="text" name="logradouro" value={formData.logradouro} onChange={handleChange} />
      </div>
      <div className="itens-form">
        <label>Número:</label>
        <input type="text" name="numero" value={formData.numero} onChange={handleChange} />
      </div>
      <div className="itens-form">
        <label>Complemento:</label>
        <input type="text" name="complemento" value={formData.complemento} onChange={handleChange} />
      </div>
      <div className="itens-form">
        <label>Bairro:</label>
        <input type="text" name="bairro" value={formData.bairro} onChange={handleChange} />
      </div>
      <div className="itens-form">
        <label>CEP:</label>
        <input type="text" name="cep" value={formData.cep} onChange={handleChange} />
      </div>
      <div className="itens-form">
        <label>Cidade:</label>
        <input type="text" name="cidade" value={formData.cidade} onChange={handleChange} />
      </div>
      <div className="itens-form">
        <label>Estado:</label>
        <input type="text" name="estado" value={formData.estado} onChange={handleChange} />
      </div>
      <div className="itens-form">
        <label>País:</label>
        <input type="text" name="pais" value={formData.pais} onChange={handleChange} />
      </div>
      <button className="default-1" type="submit">Gravar</button>
    </form>
  );
};

export default FormularioEndereco;
