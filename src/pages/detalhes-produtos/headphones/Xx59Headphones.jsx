import { useEffect, useState } from "react";

//styles
import "../../detalhes-produtos/DetalhesProdutos.css";

// Components
import Categorias from "../../../components/produtos/Categorias";
import CategoriasDetalhes from '../../../components/produtos/CategoriasDetalhes';
import QtdProdutos from '../../../components/produtos/QtdProdutos';

// utils
import { buscarTabelas, processarItensInTheBox } from "../../../utils/funcoes"

const Xx59Headphones = () => {
    const [produto, setProduto] = useState([])
    const [boxItems, setBoxItems] = useState([])

    useEffect(() => {
        const carregar = async () => {
            const data = await buscarTabelas("produtos/produtos-id", { produtoId: 3 });
            if (data) {
                setProduto(data[0])
                setBoxItems(processarItensInTheBox(data[0].inTheBox))
            }
        };

        carregar();


    }, [])

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
                        {boxItems.map((item, index) => (
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
