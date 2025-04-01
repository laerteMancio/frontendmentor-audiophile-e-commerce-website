import { Link } from "react-router-dom";
import "./PaginaNaoEncontrada.css"; // Opcional para estilos

const PaginaNaoEncontrada = () => {
    return (
        <div className="pagina-erro">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <p>A página que você está procurando não existe.</p>
            <Link to="/" className="botao-voltar">Voltar para a Home</Link>
        </div>
    );
};

export default PaginaNaoEncontrada;
