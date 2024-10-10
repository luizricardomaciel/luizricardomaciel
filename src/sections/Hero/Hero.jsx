import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/Design uten navn.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/CV-Luiz Ricardo-Desenvolvedor frontEnd.pdf";
import { useTheme } from "../../common/ThemeContetext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Foto profissional de Luiz Ricardo"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Luiz
          <br />
          Ricardo
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://github.com/luizricardomaciel" target="_blank">
            <img src={githubIcon} alt="GitHub icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/luiz-ricardo-maciel/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="GitHub icon" />
          </a>
        </span>
        <p className={styles.description}>
          Apaixonado por tecnologia, recentemente descobri minha vocação na área
          de programação. Decidi mergulhar de cabeça nesse universo, buscando
          constantemente aprofundar meus conhecimentos e evoluir.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
