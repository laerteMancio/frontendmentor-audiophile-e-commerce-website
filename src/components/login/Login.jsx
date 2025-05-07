import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

//utils
import { enviarDados } from '../../utils/funcoes';

//context
import { useDados } from "../../hooks/useDados";

import "./Login.css";

const Login = () => {

    const { setUsuarioId } = useDados()
    const navigate = useNavigate()

    // Inicializando o estado dos campos do formulário     
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();

        const dados = {
            email,
            senha,
        };

        try {
            const resposta = await enviarDados("usuarios/login", dados, true);            
            setUsuarioId({ id: resposta.usuario.id, nome: resposta.usuario.nome })

            setEmail('');
            setSenha('');

            navigate("/");
        } catch (erro) {
            console.log("Erro no login");

        }
    };


    return (
        <div className='container-login'>

            <h4>LOGIN</h4>
            <form onSubmit={handleSubmit}>
                <div className='form-campos'>

                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder='Email'
                        autoComplete='username'
                    />
                </div>

                <div className='form-campos'>

                    <input
                        type="password"
                        id="senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                        placeholder='Senha'
                        autoComplete='current-password'
                    />
                </div>


                <div className='acesso-usuarios'>
                    <Link to="/recuperar-senha" >Esqueci a senha</Link>
                    <Link to="/usuarios" >Cadastrar</Link>
                </div>

                <button className='default-login' type="submit">Entrar</button>
            </form>


        </div>
    );
};

export default Login;
