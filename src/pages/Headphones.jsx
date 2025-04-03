import React from "react";
import { Link } from "react-router-dom";
import "./PaginaProdutos.css";

//Components
import Produtos from "../components/produtos/Produtos"
import Categorias from "../components/produtos/Categorias"

import { headphoneNew, listaHeadPhones } from "../data/dataProdutos";

const Headphones = () => {
  return (
    <main className="container-produtos-pagina">
      <section className="container-titulo-categorias">
        <h4>HEADPHONES</h4>
      </section>

      {/* Produto Novidade */}
      <article className="produto-pagina">
        <img
          className="imagem-produto-pagina"
          src={headphoneNew}
          alt="XX99 Mark II Headphones"
        />
        <h1 className="overline">NEW PRODUCT</h1>
        <h3>XX99 MARK II HEADPHONES</h3>
        <p>
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <Link to="/xx99MarkIIHeadphones" className="default-1">
          SEE PRODUCT
        </Link>
      </article>

      {/* Lista de Produtos */}
      <section>
        {listaHeadPhones.map((produto, index) => (
          <Produtos
            key={produto.id || index}
            imagem={produto.imagem}
            descricao={produto.descricao}
            sobre={produto.sobre}
            link={produto.link}
          />
        ))}
      </section>

      {/* Categorias */}
      <section className="container-sobre-pagina">
        <Categorias />
      </section>
    </main>
  );
};

export default Headphones;
