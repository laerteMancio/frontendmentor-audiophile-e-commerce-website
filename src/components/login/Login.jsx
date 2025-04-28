import React, { useState } from 'react';
import "./Login.css";

// Dados Provider
import { useDados } from '../../hooks/useDados';

const Login = () => {
    const { cart } = useDados();

     // Inicializando o estado dos campos do formulário
     const [nome, setNome] = useState('');
     const [email, setEmail] = useState('');
     const [telefone, setTelefone] = useState('');
     const [endereco, setEndereco] = useState('')
     const [cep, setCep] = useState('')
     const [cidade, setCidade] = useState('')
     const [pais, setPais] = useState('')
 
     const handleSubmit = (e) => {
         e.preventDefault();
         
         // Tratar envio de dados para a API
         
         setNome('');
         setEmail('');
         setTelefone('');
         setEndereco('');
         setCep('');
         setCidade('');
         setPais('');
         
     };

    return (
        <div className='container-checkout'>
            <div className='checkout-top'>
                <button>Go back</button>
            </div>
            <div className='checkout-content'>
                <h4>CHECKOUT</h4>
                <h5 className='subtitle'>Detalhes de cobrança</h5>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input
                            type="text"
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}  
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="telefone">Telefone:</label>
                        <input
                            type="telefone"
                            id="telefone"
                            value={telefone}
                            onChange={(e) => setTelefone(e.target.value)}
                            required
                        />
                    </div>

                    <h4 className='subtitle'>informações de envio</h4>

                    <div>
                        <label htmlFor="endereco">Endereço:</label>
                        <input
                            type="endereco"
                            id="endereco"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input
                            type="cep"
                            id="cep"
                            value={cep}
                            onChange={(e) => setCep(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="cidade">Cidade:</label>
                        <input
                            type="cidade"
                            id="cidade"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="pais">Pais:</label>
                        <input
                            type="pais"
                            id="pais"
                            value={pais}
                            onChange={(e) => setPais(e.target.value)}
                            required
                        />
                    </div>

                    <h4 className='subtitle'>Detalhes do pagamento</h4>

                    <button className='default-1' type="submit">Enviar</button>
                </form>
            </div>
            
        </div>
    );
};

export default Login;
