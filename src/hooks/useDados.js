import { useContext } from 'react';
import DadosContext from '../contexts/DadosProvider';  // Importa o contexto

// Hook personalizado para consumir o contexto
export const useDados = () => {
  return useContext(DadosContext);  // Retorna o valor do contexto
};
