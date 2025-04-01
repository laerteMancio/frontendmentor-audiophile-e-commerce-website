import { createContext } from "react";

// Criando o contexto
const DadosContext = createContext();  // Renomeei para DadosContext

// Provedor do contexto

export const DadosProviderComponent = ({ children }) => {  // Renomeei para DadosProviderComponent
  

  return (
    <DadosContext.Provider
      value={{ }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default DadosContext;  // Agora exporta DadosContext