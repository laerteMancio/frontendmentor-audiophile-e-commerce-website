import React from 'react'
import "./DetalhesProdutos.css"

import Produtos from "../../components/produtos/Produtos"

//Components
import Categorias from "../../components/produtos/Categorias"


const Xx99MarkIIHeadphones = () => {

    const headphoneNew = "https://www.dropbox.com/scl/fi/tmgc717ox5k7so1wkk905/image-product.jpg?rlkey=iwal95iaq7tnk6v18gsz7vomp&st=exbndh9i&raw=1"

    const listaProdutos = [
        {   
            imagem: "https://www.dropbox.com/scl/fi/rx6b2xzem1holxoayth23/image-product.jpg?rlkey=wg04ow28gds4n8wswrm0d830c&st=g021ssj3&raw=1",
            descricao: "XX99 Mark I Headphones",
            sobre: "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
        },
        {            
            imagem: "https://www.dropbox.com/scl/fi/8ie977fmi31c106jfn9s2/image-product.jpg?rlkey=u73d98jishac2hpmoqdatt3v6&st=es3o14b2&raw=1",
            descricao: "XX59 Headphones",
            sobre: "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
        }
    ]


    return (
        <main className='container-detalhes-pagina'>

            {/* Produto Novidade */}
            <section>
                <article className='detalhes-pagina'>
                    <img className='imagem-detalhes-pagina' src={headphoneNew} alt="Imagem produto" />
                    <h1 className='overline'>NEW PRODUCT</h1>
                    <h3>XX99 MARK II HEADPHONES</h3>
                    <p>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                    <button className='default-1'>SEE PRODUCT</button>
                </article>
            </section>

            <section>
                {listaProdutos.map((produto, index) => (
                    <Produtos
                        key={index}
                        imagem={produto.imagem}
                        descricao={produto.descricao}
                        sobre={produto.sobre}
                    />
                ))}
            </section>


            {/* Categorias */}
            <section className='container-sobre-detalhes'>
                <article >
                    <Categorias />
                </article>
            </section>


        </main>

    )
}

export default Xx99MarkIIHeadphones
