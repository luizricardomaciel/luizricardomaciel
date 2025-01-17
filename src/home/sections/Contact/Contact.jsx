import styles from "./ContactStyles.module.css";

function Contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">contato</h1>
      <form action="https://api.staticforms.xyz/submit" method="post">
        <div className="formGroup">
          <label htmlFor="name" hidden>
            Nome
          </label>
          <input type="text" name="name" id="name" placeholder="Nome" required />
        </div>
        <div className="formGroup">
          <label htmlFor="email" hidden>
            E-mail
          </label>
          <input type="text" name="email" id="email" placeholder="E-mail" required />
        </div>
        <div className="formGroup">
          <label htmlFor="message" hidden>
            Mensagem
          </label>
          <textarea
            name="message"
            id="message"
            placeholder="Mensagem"
            required
          ></textarea>
        </div>
        <input className="hover btn" type="submit" value="Enviar" />
        <input
          type="hidden"
          name="accessKey"
          value="9d2e5cfa-d0c4-492c-914c-8b0728d01a51"
        />
        <input
          type="hidden"
          name="redirectTo"
          value="https://luizricardomaciel.vercel.app/obrigado"
        ></input>
      </form>
    </section>
  );
}

export default Contact;
