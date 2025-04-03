import { createContext, useEffect, useState } from "react";

// Criando o contexto
const DadosContext = createContext();  

// Provedor do contexto

export const DadosProviderComponent = ({ children }) => {  
  
  const [cart, setCart] = useState([])

  useEffect(()=>{
    console.log(cart);
  },[cart])
  

  return (
    <DadosContext.Provider
      value={{ cart, setCart }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default DadosContext;  // Agora exporta DadosContext