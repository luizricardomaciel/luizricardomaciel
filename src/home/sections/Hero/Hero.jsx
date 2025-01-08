import styles from "./HeroStyles.module.css";
import heroImg from "../../../assets/Design uten navn.png";
import sun from "../../../assets/sun.svg";
import moon from "../../../assets/moon.svg";
import githubLight from "../../../assets/github-light.svg";
import githubDark from "../../../assets/github-dark.svg";
import linkedinLight from "../../../assets/linkedin-light.svg";
import linkedinDark from "../../../assets/linkedin-dark.svg";
import clickDark from "../../../assets/icon-click-black.svg";
import clickLight from "../../../assets/icon-click-white.svg";
import clickMobileDark from "../../../assets/click-mobile dark.svg";
import clickMobileLight from "../../../assets/click-mobile-white.svg";
import CV from "../../../assets/CV-DESENVOLVEDOR FRONT END Luiz Ricardo Maciel.pdf";
import { useTheme } from "../../../common/ThemeContetext";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const clickIcon = theme === "light" ? clickDark : clickLight;
  const clickMobileIcon = theme === "light" ? clickMobileDark : clickMobileLight;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Foto profissional de Luiz Ricardo"
        />
        <img
          className={styles.click}
          src={clickIcon}
          alt="Ícone indicando local de click"
        />
        <img
          className={`${styles.mobile}`}
          src={clickMobileIcon}
          alt="Ícone indicando local de click"
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
          <a href="https://www.linkedin.com/in/luiz-ricardo-maciel/" target="_blank">
            <img src={linkedinIcon} alt="GitHub icon" />
          </a>
        </span>
        <p className={styles.description}>
          Apaixonado por tecnologia, descobri minha vocação na área de programação. Decidi
          mergulhar de cabeça nesse universo, buscando constantemente aprofundar meus
          conhecimentos e evoluir.
        </p>
        <a href={CV} download className="hove btn">
          Resume
        </a>
      </div>
    </section>
  );
}

export default Hero;
