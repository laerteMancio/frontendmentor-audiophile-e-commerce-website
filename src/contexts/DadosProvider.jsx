import { createContext, useState, useRef, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";

// Criando o contexto
const DadosContext = createContext();

// Provedor do contexto
export const DadosProviderComponent = ({ children }) => {

  const initialState = { componenteAtivo: "Pedidos" };

  const componentesReducer = (state, action) => {
    switch (action.type) {
      case "MOSTRAR_PEDIDOS":
        return { componenteAtivo: "Pedidos" };
      case "MOSTRAR_TROCAS":
        return { componenteAtivo: "Trocas" };
      case "MOSTRAR_VALES":
        return { componenteAtivo: "Vales" };
      case "MOSTRAR_SEUS_DADOS":
        return { componenteAtivo: "SeusDados" };
      case "MOSTRAR_ENDERECOS":
        return { componenteAtivo: "Enderecos" };
      default:
        return state;
    }
  };

  const [componenteState, componenteDispatch] = useReducer(componentesReducer, initialState);


  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [callCart, setCallCart] = useState(false);
  const [callCheckout, setCallCheckout] = useState(false);
  const [callMenu, setCallMenu] = useState(false);
  const [callMenuLogado, setCallMenuLogado] = useState(false);
  const [callModalAlterar, setModalAlterar] = useState(false);  
  const [conta, setConta] = useState(false)

  const [usuarioId, setUsuarioId] = useState(null)

  useEffect(() => {
    console.log(usuarioId);
  }, [usuarioId])


  // Usando useRef para referenciar o layout
  const layoutRef = useRef(null);
  const menuRef = useRef(null);
  const menuLogadoRef = useRef(null);
  const modalAlterarRef = useRef(null);
  const setaRef = useRef(null);

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
      await fetch("https://backend-ecommerce-phones.vercel.app/usuarios/logout", {
        method: "GET",
        credentials: "include",
      });

      setUsuarioId(null);
      navigate("/")
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
    }
  };

  const openMenuLogado = () => {

    setCallMenuLogado((prevState) => {
      const newState = !prevState;

      if (newState) {
        setaRef.current.classList.add('clicked');
        menuLogadoRef.current.classList.add('clicked');
      } else {
        setaRef.current.classList.remove('clicked');
        menuLogadoRef.current.classList.remove('clicked');
      }


      return newState;
    });
  };

  const closeMenuLogado = () => {
    setCallMenuLogado(false)

    if (menuLogadoRef.current) {
      menuLogadoRef.current.classList.remove('clicked');
      setaRef.current.classList.remove('clicked');
    }
  };

  const verificarUsuarioLogado = async () => {
    try {
      const res = await fetch("https://backend-ecommerce-phones.vercel.app/usuarios/usuario-logado", {
        credentials: "include",
      });

      if (!res.ok) {
        setUsuarioId(null);
        navigate("/login");
        return;
      } else {
        openMenuLogado()
      }

      const data = await res.json();
      setUsuarioId({ id: data.id, nome: data.nome });

    } catch (err) {
      console.log("Erro ao verificar autenticação:", err);
      setUsuarioId(null);
      navigate("/login");
    }
  };

  const openModalAlterar = () => {
    setModalAlterar((prevState) => {
      const newState = !prevState;

      if (modalAlterarRef.current) {
        if (newState) {
          modalAlterarRef.current.classList.add('clicked');
        } else {
          modalAlterarRef.current.classList.remove('clicked');
        }
      }

      return newState;
    });
  };


  const closeModalAlterar = () => {
    setModalAlterar(false);

    if (modalAlterarRef.current) {
      modalAlterarRef.current.classList.remove('clicked');
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
        usuarioId,
        handleLogout,
        verificarUsuarioLogado,
        menuLogadoRef,
        closeMenuLogado,
        setaRef,
        setConta,
        conta,
        componenteState,
        componenteDispatch,
        modalAlterarRef,
        openModalAlterar,
        callModalAlterar,
        closeModalAlterar,
        
      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default DadosContext;
