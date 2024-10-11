import styles from "./ProjectsStyles.module.css";
import neon from "../../../assets/Neon-project.png";
import blizzard from "../../../assets/Blizzard-project.png";
import criptografia from "../../../assets/Criptografia-text.png";
import ProjectCard from "../../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={neon}
          link="https://home-page-banco-neon.vercel.app/"
          h3={"Neon"}
          p={"LP Banco Neon"}
        />
        <ProjectCard
          src={criptografia}
          link="https://www.youtube.com/
            watch?v=ZpIel9cv4Jk&t=3997s&ab_channel=HowtoBecomeaDeveloper"
          h3={"Criptografador"}
          p={"Criptografia de texto"}
        />
        <ProjectCard
          src={blizzard}
          link="https://project-blizzard.vercel.app/"
          h3={"Blizzard"}
          p={"Gamming Web"}
        />
      </div>
    </section>
  );
}

export default Projects;
