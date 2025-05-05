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

export const enviarDados = async (rota, dados = {}, incluirCredenciais = false) => {
  try {
    const url = `http://localhost:3000/${rota}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: incluirCredenciais ? "include" : "same-origin",
      body: JSON.stringify(dados),
    });

    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Resposta não é JSON");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Erro ao enviar dados:", err);
    throw err;
  }
};




// Função para dividir os itens
export function processarItensInTheBox(listaInTheBox) {
  return listaInTheBox.split(",").map((item) => {
    const [quantidade, ...descricao] = item.trim().split(" ");
    return {
      quantidade: quantidade,
      descricao: descricao.join(" "), // Junta novamente a descrição que pode ter espaços
    };
  });
}
