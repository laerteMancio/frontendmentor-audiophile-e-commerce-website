import React from 'react'
import { Link } from "react-router-dom";
import "./CategoriasDetalhes.css"


const CategoriasDetalhes = ({ imgGaleria1, imgGaleria2, imgGaleria3 }) => {

    const imgCategorias1 = "https://www.dropbox.com/scl/fi/eg0b8jdqz2rgsyamd39o5/image-xx99-mark-one-headphones.jpg?rlkey=mm9vpno2kb3n6wg2b7rcg1cgd&raw=1";
    const imgCategorias2 = "https://www.dropbox.com/scl/fi/nkawxcavx1ojewhvgvk0a/image-xx59-headphones.jpg?rlkey=e3urnr3td6mmy3cza33je1l20&raw=1";
    const imgCategorias3 = "https://www.dropbox.com/scl/fi/hvx9q1ofwjx5seiawpahn/image-zx9-speaker.jpg?rlkey=0yylxcw2qyfltnvtw1qyhirtj&raw=1";



    return (
        <>
            {/* Categorias Detalhes */}
            <section className='container-categorias-detalhes'>
                <article className='categorias-detalhes'>
                    <img className='imagens-categoria-detalhes-1' src={imgGaleria1} alt="Imagem de categoria de Headphones" />
                    <img className='imagens-categoria-detalhes-1' src={imgGaleria2} alt="Imagem de categoria de Headphones" />
                    <img className='imagens-categoria-detalhes-2' src={imgGaleria3} alt="Imagem de categoria de Headphones" />
                </article>

                <article className='categorias-detalhes-p2'>
                    <h4>you may also like</h4>
                    <span>
                        <img className='imagens-categoria-detalhes-3' src={imgCategorias1} alt="imgCategorias1" />
                        <h4>XX99 MARK I</h4>
                        <Link to="/Xx99MarkHeadphones" className="default-1">SEE PRODUCT</Link>
                    </span>

                    <span>
                        <img className='imagens-categoria-detalhes-3' src={imgCategorias2} alt="imgCategorias1" />
                        <h4>XX59</h4>
                        <Link to="/Xx59Headphones" className="default-1">SEE PRODUCT</Link>
                    </span>

                    <span>
                        <img className='imagens-categoria-detalhes-3' src={imgCategorias3} alt="imgCategorias1" />
                        <h4>ZX9 SPEAKER</h4>
                        <Link to="/Zx9Speaker" className="default-1">SEE PRODUCT</Link>
                    </span>


                </article>
            </section>

        </>
    )

}

export default CategoriasDetalhes
