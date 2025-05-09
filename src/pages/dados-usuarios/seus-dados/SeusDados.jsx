import React, { useEffect, useState } from 'react'
import "./SeusDados.css"

import moment from "moment"
import { buscarTabelas, enviarDados, mascararEmail, mascararCPF } from "../../../utils/funcoes"
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

  const { openModalAlterar, modalAlterarRef, callModalAlterar, closeModalAlterar, usuarioId } = useDados()

  const [alternaModal, setAlternaModal] = useState("")
  const [dadosOriginais, setDadosOriginais] = useState({});

  useEffect(() => {
    const carregar = async () => {
      const data = await buscarTabelas("usuarios/usuarios-id", { usuarioId: usuarioId.id });
      if (data) {
        setDadosOriginais(data[0]);
        setFormData((prev) => ({
          ...prev,
          ...data[0]
        }));
      }

    };
    carregar();
  }, [usuarioId.id])

  const dataFormatada = moment(formData.data_nasc).format("YYYY-MM-DD");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };


  const handleSubmitDadosPessoais = async (e) => {
    e.preventDefault();
  
    // Filtra os dados pessoais, ignorando campos de email e senha
    const dadosPessoais = {
      nome: formData.nome,
      data_nasc: formData.data_nasc,
      cpf: formData.cpf,
      sexo: formData.sexo,
      telefone: formData.telefone,
    };
  
    // Compara os dados alterados com os dados originais (se houver)
    const dadosAlterados = {};
    Object.keys(dadosPessoais).forEach((chave) => {
      if (dadosPessoais[chave] !== dadosOriginais[chave]) {
        dadosAlterados[chave] = dadosPessoais[chave];
      }
    });
  
    // Verifica se há alguma alteração
    if (Object.keys(dadosAlterados).length === 0) {
      console.log("Nenhuma alteração foi feita.");
      return;
    }
  
    try {
      // Envia os dados alterados para a rota de dados pessoais
      await enviarDados(`usuarios/${usuarioId.id}/dados-pessoais`, dadosAlterados, false, "PATCH");
    } catch (erro) {
      console.error("Erro ao enviar dados:", erro);
    }
  };
  


  const handleSubmitEmail = async (e) => {
    e.preventDefault();
  
    const dadosAlterados = {};
  
    // Verificar alteração no email
    if (formData.email && formData.email !== dadosOriginais.email) {
      dadosAlterados.email = formData.email;
    }
  
    // Verificar alteração no novo email
    if (formData.novoEmail && formData.novoEmail !== dadosOriginais.email) {
      dadosAlterados.email = formData.novoEmail;
    }
  
    // Se não houver alteração, não enviar dados
    if (Object.keys(dadosAlterados).length === 0) {
      console.log("Nenhuma alteração no email.");
      return;
    }
  
    try {
      // Envia os dados alterados de email para a API
      await enviarDados(`usuarios/${usuarioId.id}/email`, dadosAlterados, false, "PATCH");

    } catch (erro) {
      console.error("Erro ao enviar email:", erro);
    }
  };
  


  const handleSubmitSenha = async (e) => {
    e.preventDefault();
  
    if (!formData.novaSenha || !formData.confirmarNovaSenha) {
      console.log("Preencha todos os campos de senha.");
      return;
    }
  
    if (formData.novaSenha !== formData.confirmarNovaSenha) {
      console.log("As senhas não coincidem.");
      return;
    }
  
    const dadosSenha = {      
      novaSenha: formData.novaSenha,
      confirmarNovaSenha: formData.confirmarNovaSenha,
    };

    
  
    try {
      
      await enviarDados(`usuarios/${usuarioId.id}/senha`, dadosSenha, false, "PATCH");
      console.log("Senha atualizada com sucesso.");
    } catch (erro) {
      console.error("Erro ao enviar senha:", erro);
    }
  };
  



  return (
    <form onSubmit={handleSubmitDadosPessoais} className='container-seus-dados'>
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
              <button type="button" onClick={handleSubmitEmail} className='default-1'>ALTERAR E-MAIL</button>
              <button type="button" className='default-2' onClick={closeModalAlterar}>Cancelar</button>
            </div>
          </div>
        ) : (
          <div className='caixa-modal-alterar'>
            <h6>Alterar Senha</h6>

            <div className='modal-itens'>
              <label htmlFor="novaSenha">Nova Senha</label>
              <input type="password" name="novaSenha" value={formData.novaSenha} onChange={handleChange} />


            </div>

            <div className='modal-itens'>
              <label htmlFor="confirmar-nova-senha">Confirmar Nova Senha</label>
              <input type="password" name="confirmarNovaSenha" value={formData.confirmarNovaSenha} onChange={handleChange} />
            </div>

            <div className='modal-itens-buttons'>
              <button type="button" onClick={handleSubmitSenha} className='default-1'>ALTERAR SENHA</button>
              <button type="button" className='default-2' onClick={closeModalAlterar}>Cancelar</button>
            </div>
          </div>
        )}
      </div>
    </form>
  );
}

export default SeusDados
