import React from "react";
import styles from "./Found404Styles.module.css";

function Found404() {
  return (
    <>
      <section className={styles.container}>
        <h1>Pagina não encontrada</h1>
        <p>Favor voltar para home</p>
        <a href="https://luizricardomaciel.vercel.app/" className="btn hover">
          Home
        </a>
      </section>
    </>
  );
}

export default Found404;
