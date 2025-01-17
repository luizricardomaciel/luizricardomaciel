import style from "./FooterStyles.module.css";

function Footer() {
  return (
    <section id="footer" className={style.container}>
      <p>
        &copy; 2024 Luiz Ricardo M. <br />
        Todos os direitos reseverd
      </p>
    </section>
  );
}

export default Footer;
