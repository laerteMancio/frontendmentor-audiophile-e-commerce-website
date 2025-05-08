import React, { useState } from 'react'
import "./SeusDados.css"

const SeusDados = () => {
  const [formData, setFormData] = useState({
    nome: "",
    data_nasc: "",
    cpf: "",
    sexo: "",
    email: "",
    senha: "",
    telefone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode enviar para sua API
  };

  return (
    <form onSubmit={handleSubmit} className='container-seus-dados'>
      <h5>Seus Dados</h5>

      <div className='container-seus-dados-itens'>
        <h6>Dados Pessoais</h6>
        <div className='seus-dados-itens'>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>

        <div className='seus-dados-itens'>
          <label>Data de Nascimento:</label>
          <input type="date" name="data_nasc" value={formData.data_nasc} onChange={handleChange} required />
        </div>

        <div className='seus-dados-itens'>
          <label>CPF:</label>
          <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} disabled={true} />
        </div>

        <div className='seus-dados-itens'>
          <label>Sexo:</label>
          <select name="sexo" value={formData.sexo} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="M">Masculino</option>
            <option value="F">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>

        <div className='seus-dados-itens'>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} disabled={true} />
        </div>

        <div className='seus-dados-itens'>
          <label>Senha:</label>
          <input type="password" name="senha" value={formData.senha} onChange={handleChange} required />
        </div>

        <div className='seus-dados-itens'>
          <label>Telefone:</label>
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
        </div>
      </div>
      
      <button className='default-1' type="submit">Salvar dados</button>
    </form>
  );
}

export default SeusDados
