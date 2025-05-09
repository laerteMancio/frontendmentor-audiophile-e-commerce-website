import React, { useEffect, useState } from 'react'
import "./SeusDados.css"

import moment from "moment"
import { buscarTabelas, mascararEmail, mascararCPF } from "../../../utils/funcoes"
import { useDados } from '../../../hooks/useDados'

const SeusDados = () => {
  const [formData, setFormData] = useState({
    nome: "",
    data_nasc: "",
    cpf: "",
    sexo: "",
    email: "",
    novoEmail: "",
    confirmarNovoEmail: "",
    senha: "",
    novaSenha: "",
    confirmarNovaSenha: "",
    telefone: ""
  });

  const { openModalAlterar, modalAlterarRef, callModalAlterar, closeModalAlterar } = useDados()
  const [alternaModal, setAlternaModal] = useState("")

  useEffect(() => {
    const carregar = async () => {
      const data = await buscarTabelas("usuarios/usuarios-id", { usuarioId: 1 });
      if (data) {
        setFormData((prev) => ({
          ...prev,
          ...data[0]
        }));
      }
    };
    carregar();
  }, [])

  const dataFormatada = moment(formData.data_nasc).format("YYYY-MM-DD");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados enviados:", formData);
    // Aqui você pode enviar para sua API
  };

  const handleAlterarEmail = () => {
    const email1 = formData.novoEmail.trim().toLowerCase();
    const email2 = formData.confirmarNovoEmail.trim().toLowerCase();

    if (!email1 || !email2) {
      alert("Preencha os dois campos de e-mail.");
      return;
    }

    if (email1 !== email2) {
      alert("Os e-mails não coincidem.");
      return;
    }

    // Aqui você pode fazer a requisição de alteração de e-mail na API
    alert("E-mail alterado com sucesso!");
    setFormData((prev) => ({
      ...prev,
      email: email1,
      novoEmail: "",
      confirmarNovoEmail: ""
    }));
    closeModalAlterar();
  };

  const handleAlterarSenha = () => {
    const senha1 = formData.novaSenha.trim().toLowerCase();
    const senha2 = formData.confirmarNovaSenha.trim().toLowerCase();

    if (!senha1 || !senha2) {
      alert("Preencha os dois campos de senha.");
      return;
    }

    if (senha1 !== senha2) {
      alert("As senhas não coincidem.");
      return;
    }

    // Aqui você pode fazer a requisição de alteração da senha na API
    alert("Senha alterada com sucesso!");
    setFormData((prev) => ({
      ...prev,
      senha: senha1,
      novaSenha: "",
      confirmarNovaSenha: ""
    }));
    closeModalAlterar();
  };

  return (
    <form onSubmit={handleSubmit} className='container-seus-dados'>
      {callModalAlterar && <div className="fundo-overlay"></div>}
      <h5>Seus Dados</h5>

      <div className='container-seus-dados-itens'>
        <h6>Dados Pessoais</h6>
        <div className='seus-dados-itens'>
          <label>Nome:</label>
          <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
        </div>

        <div className='seus-dados-itens'>
          <label>Data de Nascimento:</label>
          <input type="date" name="data_nasc" value={dataFormatada} onChange={handleChange} required />
        </div>

        <div className='seus-dados-itens'>
          <label>CPF:</label>
          <input type="text" name="cpf" value={mascararCPF(formData.cpf)} onChange={handleChange} readOnly />
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
          <input type="email" name="email" value={mascararEmail(formData.email)} readOnly />
        </div>

        <div className='seus-dados-itens-buttons'>
          <button type="button" onClick={() => { openModalAlterar(); setAlternaModal('senha') }} className='default-1'>Alterar Senha</button>
          <button type="button" onClick={() => { openModalAlterar(); setAlternaModal('email') }} className='default-1'>Alterar Email</button>
        </div>

        <div className='seus-dados-itens'>
          <label>Telefone:</label>
          <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
        </div>
      </div>

      <button className='default-1' type="submit">Salvar dados</button>

      <div ref={modalAlterarRef} className='container-modal-alterar'>
        {alternaModal === 'email' ? (
          <div className='caixa-modal-alterar'>
            <h6>Alterar Email</h6>
            <div className='modal-itens'>
              <label htmlFor="email-atual">E-mail atual</label>
              <input className='input-email-atual' type="email" name="email-atual" value={mascararEmail(formData.email)} readOnly />
            </div>

            <div className='modal-itens'>
              <label htmlFor="novo-email">Novo e-mail</label>
              <input type="email" name="novoEmail" value={formData.novoEmail} onChange={handleChange} required />
            </div>

            <div className='modal-itens'>
              <label htmlFor="confirmar-novo-email">Confirmar novo e-mail</label>
              <input type="email" name="confirmarNovoEmail" value={formData.confirmarNovoEmail} onChange={handleChange} required />
            </div>

            <div className='modal-itens-buttons'>
              <button type="button" onClick={handleAlterarEmail} className='default-1'>ALTERAR E-MAIL</button>
              <button type="button" className='default-2' onClick={closeModalAlterar}>Cancelar</button>
            </div>
          </div>
        ) : (
          <div className='caixa-modal-alterar'>
            <h6>Alterar Senha</h6>           

            <div className='modal-itens'>
              <label htmlFor="nova-senha">Nova Senha</label>
              <input type="password" name="novaSenha" value={formData.novaSenha} onChange={handleChange} required />

              
            </div>

            <div className='modal-itens'>
              <label htmlFor="confirmar-nova-senha">Confirmar Nova Senha</label>
              <input type="password" name="confirmarNovaSenha" value={formData.confirmarNovaSenha} onChange={handleChange} required />
            </div>

            <div className='modal-itens-buttons'>
              <button type="button" onClick={handleAlterarSenha} className='default-1'>ALTERAR SENHA</button>
              <button type="button" className='default-2' onClick={closeModalAlterar}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default SeusDados
