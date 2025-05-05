import { createContext, useState, useRef, useEffect } from "react";

// Criando o contexto
const DadosContext = createContext();

// Provedor do contexto
export const DadosProviderComponent = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [callCart, setCallCart] = useState(false);
  const [callCheckout, setCallCheckout] = useState(false);
  const [callMenu, setCallMenu] = useState(false);

  const [usuarioId, setUsuarioId] = useState(null)

  useEffect(() => {
    console.log(usuarioId);
  }, [usuarioId])


  // Usando useRef para referenciar o layout
  const layoutRef = useRef(null);
  const menuRef = useRef(null);

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



  const openMenu = () => {

    setCallMenu((prevState) => {
      const newState = !prevState;

      if (newState) {
        menuRef.current.classList.add('clicked');
      } else {
        menuRef.current.classList.remove('clicked');
      }


      return newState;
    });
  };

  const closeMenu = () => {
    setCallMenu(false)

    if (menuRef.current) {
      menuRef.current.classList.remove('clicked');
    }
  };

  const removeAll = () => {
    setCart([])
  }

  const handleLogout = async () => {
    try {
      await fetch("http://localhost:3000/usuarios/logout", {
        method: "GET",
        credentials: "include",
      });
  
      setUsuarioId(null);
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
    }
  };
  




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
        menuRef,
        openMenu,
        closeMenu,
        setUsuarioId,
        handleLogout
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default DadosContext;
