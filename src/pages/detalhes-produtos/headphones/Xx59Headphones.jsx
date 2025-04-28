import "../../detalhes-produtos/DetalhesProdutos.css";

// Components
import Categorias from "../../../components/produtos/Categorias";
import CategoriasDetalhes from '../../../components/produtos/CategoriasDetalhes';
import QtdProdutos from '../../../components/produtos/QtdProdutos';

// Data
import { listaDetalhesHeadPhones } from "../../../data/dataProdutos";

const Xx59Headphones = () => {
    const produto = listaDetalhesHeadPhones[2];

    return (
        <main className='container-detalhes-pagina'>
            {/* Produto Novidade */}
            <section>
                <article className='detalhes-pagina'>
                    <img className='imagem-detalhes-pagina' src={produto.imagemPrincipal} alt={produto.descricao} />
                    <h1 className='overline'>NEW PRODUCT</h1>
                    <h3>{produto.descricao}</h3>
                    <p>{produto.sobre}</p>
                    <strong>$ {produto.preco}</strong>
                    <QtdProdutos produto={produto} />
                    <h4>FEATURES</h4>
                    <p>{produto.features}</p>

                    <h4>IN THE BOX</h4>
                    <ul>
                        {produto.inTheBox.map((item, index) => (
                            <li key={index}>
                                <strong className='detalhes-span-qtd'>{item.quantidade}</strong> <span>{item.descricao}</span>
                            </li>
                        ))}
                    </ul>
                </article>
            </section>

            <section className='container-categorias-2-detalhes'>
                <article>
                    <CategoriasDetalhes imgGaleria1={produto.img1} imgGaleria2={produto.img2} imgGaleria3={produto.img3} />
                </article>
            </section>

            {/* Categorias */}
            <section className='container-sobre-detalhes'>
                <article>
                    <Categorias />
                </article>
            </section>
        </main>
    );
}

export default Xx59Headphones;
