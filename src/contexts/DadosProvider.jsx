import { createContext, useState, useRef, useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { buscarTabelas } from "../utils/funcoes";

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
  const [listaEnderecos, setListaEnderecos] = useState([])

  const [conta, setConta] = useState(() => {
    const contaSalva = localStorage.getItem("conta");
    return contaSalva === "true";
  });

  const [usuarioId, setUsuarioId] = useState(null)


  useEffect(() => {
    const usuarioSalvo = localStorage.getItem("usuarioLogado");
    if (usuarioSalvo) {
      setUsuarioId(JSON.parse(usuarioSalvo));
    }
  }, []);

  useEffect(() => {
    const contaSalva = localStorage.getItem("conta");
    setConta(contaSalva === "true"); 
  }, []);

  useEffect(() => {
    localStorage.setItem("conta", conta ? "true" : "false");
  }, [conta]);

  useEffect(() => {
    console.log(usuarioId);
  }, [usuarioId])


  // Usando useRef para referenciar o layout
  const layoutRef = useRef(null);
  const menuRef = useRef(null);
  const menuLogadoRef = useRef(null);
  const modalAlterarRef = useRef(null);
  const setaRef = useRef(null);

  //const url = "https://backend-ecommerce-phones.vercel.app"
  const url = "http://localhost:3001"


  const carregarEnderecos = async (usuarioId) => {
    const data = await buscarTabelas("enderecos/enderecos-id", { usuarioId });
    if (data) {
      setListaEnderecos(data);
    }
  };

  useEffect(() => {
    if (usuarioId?.id) {
      carregarEnderecos(usuarioId.id);
    }
  }, [usuarioId?.id]);





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
      await fetch(`${url}/usuarios/logout`, {
        method: "GET",
        credentials: "include",
      });

      setUsuarioId(null);
      localStorage.removeItem("usuarioLogado");
      setConta(false)
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
      const res = await fetch(`${url}/usuarios/usuario-logado`, {
        credentials: "include",
      });
      
      if (!res.ok) {
        setUsuarioId(null);
        localStorage.removeItem("usuarioLogado");
        navigate("/login");
        return;
      }

      const data = await res.json();
      setUsuarioId({ id: data.id, nome: data.nome });
      const usuarioSalvo = localStorage.getItem("usuarioLogado");
      if (usuarioSalvo) {
        setUsuarioId(JSON.parse(usuarioSalvo));
      }


      openMenuLogado();
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

  const exibirMensagem = (setFunc, msg) => {
    setFunc(msg);
    setTimeout(() => setFunc(""), 2000);
  };





  return (
    <DadosContext.Provider
      value={{
        url,
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
        exibirMensagem,
        carregarEnderecos,
        listaEnderecos

      }}
    >
      {children}
    </DadosContext.Provider>
  );
};

export default DadosContext;
