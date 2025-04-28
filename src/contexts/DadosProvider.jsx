import { createContext, useState, useRef, useEffect } from "react";

// Criando o contexto
const DadosContext = createContext();

// Provedor do contexto
export const DadosProviderComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [callCart, setCallCart] = useState(false);
  const [callCheckout, setCallCheckout] = useState(false);

  // Usando useRef para referenciar o layout
  const layoutRef = useRef(null);

  const openCart = () => {

    setCallCart((prevState) => {
      const newState = !prevState;

      if (layoutRef.current) {
        if (newState) {
          layoutRef.current.classList.add('clicked');
        } else {
          layoutRef.current.classList.remove('clicked');
        }
      }

      return newState;
    });
  };

  const closeCart = () => {
    setCallCart(false);

    if (layoutRef.current) {
      layoutRef.current.classList.remove('clicked');
    }
  };

  const removeAll = ()=>{
    setCart([])
  }



  return (
    <DadosContext.Provider
      value={{
        cart,
        setCart,
        callCart,
        openCart,
        closeCart,
        callCheckout,
        setCallCheckout,
        layoutRef,
        removeAll,
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default DadosContext;
