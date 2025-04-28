export const buscarTabelas = async (rota, parametros = {}) => {
  try {
    
    // Converte o objeto de parâmetros em query string
    const queryString = new URLSearchParams(parametros).toString();
    
    const url = queryString ? `http://localhost:3000/${rota}?${queryString}` : `http://localhost:3000/${rota}`;
    
    const res = await fetch(url);
    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Resposta não é JSON");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Erro ao buscar produtos:", err);
    throw err;
  }
};
