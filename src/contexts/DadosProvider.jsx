import { createContext, useState } from "react";

// Criando o contexto
const DadosContext = createContext();  // Renomeei para DadosContext

// Provedor do contexto

export const DadosProviderComponent = ({ children }) => {  // Renomeei para DadosProviderComponent
  /*
  const [logado, setLogado] = useState(false);
  const [token, setToken] = useState("");
  const [usuario, setUsuario] = useState("");
  const [verificaAdm, setVerificaAdm] = useState("");
  const [msgAviso, setMsgAviso] = useState([]);
*/
  const [local, setLocal] = useState("home")

  return (
    <DadosContext.Provider  // Atualizei para DadosContext.Provider
      value={{local, setLocal}}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default DadosContext;  // Agora exporta DadosContext