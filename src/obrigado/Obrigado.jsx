import React from "react";
import styles from "./ObrigadoStyles.module.css";

function Obrigado() {
  return (
    <>
      <section className={styles.container}>
        <h1>Recebi sua mensagem!</h1>
        <p>Em breve entrarei em contato ;)</p>
        <a href="https://luizricardomaciel.vercel.app/" className="btn hover">
          Home
        </a>
      </section>
    </>
  );
}

export default Obrigado;
