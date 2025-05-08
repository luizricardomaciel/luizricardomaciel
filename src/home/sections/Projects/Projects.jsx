import styles from "./ProjectsStyles.module.css";
import neon from "../../../assets/Neon-project.png";
import blizzard from "../../../assets/Blizzard-project.png";
import criptografia from "../../../assets/Criptografia-text.png";
import fortalecendoFe from "../../../assets/fé-project.png";
import travelPlan from "../../../assets/travel plan.png";
import ProjectCard from "../../../common/ProjectCard";
import sorteador from "../../../assets/Sorteador-numeros-nomes.png"

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projetos</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={neon}
          link="https://home-page-banco-neon.vercel.app/"
          h3={"Neon"}
          p={"LP Banco Neon"}
        />
        <ProjectCard
          src={sorteador}
          link="https://sorteador-alpha-smoky.vercel.app/"
          h3={"Sorteador"}
          p={"Numeros e nomes"}
        />
        <ProjectCard
          src={fortalecendoFe}
          link="https://fortalecendo-sua-fe.vercel.app/"
          h3={"Ebook vendas"}
          p={"LP Fortalecendo sua fé"}
        />
        <ProjectCard
          src={travelPlan}
          link="https://travel-plan-six.vercel.app/"
          h3={"Plano de viagem"}
          p={"App de atividades"}
        />
        <ProjectCard
          src={criptografia}
          link="https://criptografia-de-textos-tau.vercel.app/"
          h3={"Criptografador"}
          p={"Criptografia de texto"}
        />
        <ProjectCard
          src={blizzard}
          link="https://project-blizzard.vercel.app/"
          h3={"Blizzard"}
          p={"Página Gaming"}
        />
      </div>
    </section>
  );
}

export default Projects;
