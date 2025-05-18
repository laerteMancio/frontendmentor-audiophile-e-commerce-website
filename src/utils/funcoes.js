const urlBackend = "https://backend-ecommerce-phones.vercel.app"
const urlLocal = "http://localhost:3001"



export const buscarTabelas = async (rota, parametros = {}) => {
  try {
    
    // Converte o objeto de parâmetros em query string
    const queryString = new URLSearchParams(parametros).toString();
    
    const url = queryString ? `${urlLocal}/${rota}?${queryString}` : `${urlLocal}/${rota}`;

    const res = await fetch(url);
    const contentType = res.headers.get("content-type");

    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Resposta não é JSON");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Erro ao buscar a tabela:", err);
    throw err;
  }
};

export const enviarDados = async (rota, dados = {}, incluirCredenciais = false, metodo = "POST") => {
  try {
    const url = `${urlLocal}/${rota}`;

    const res = await fetch(url, {
      method: metodo,
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
  
    if (!res.ok) {
      // Lançar um erro com os dados da resposta
      const erro = new Error(data.mensagem || "Erro na requisição");
      erro.status = res.status;
      erro.data = data;
      throw erro;
    }
  
    return data;
  } catch (err) {
    console.error(`Erro ao enviar dados via ${metodo}:`, err);
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

// Função para mascarar email
export function mascararEmail(email) {
  if (!email) return "";
  const [usuario, dominioCompleto] = email.split("@");
  const dominioParts = dominioCompleto?.split(".");
  const dominio = dominioParts?.[0] || "";
  const extensao = dominioParts?.[1] || "";

  const usuarioMasc = usuario[0] + "*".repeat(Math.max(usuario.length - 2, 1)) + usuario.slice(-1);
  const dominioMasc = dominio[0] + "*".repeat(Math.max(dominio.length - 1, 1));

  return `${usuarioMasc}@${dominioMasc}.${extensao}`;
}

// Função para mascarar CPF
export function mascararCPF(cpf) {
  if (!cpf) return "";
  const numeros = cpf.replace(/\D/g, "");
  if (numeros.length !== 11) return cpf;

  return `${numeros.slice(0, 3)}.***.***-${numeros.slice(-2)}`;
}






