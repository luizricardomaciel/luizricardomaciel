import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../../assets/checkmark-dark.svg";
import SkillsList from "../../../common/SkillsList";

function Skillls() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Habilidades</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"Next.js"} />
        <SkillsList src={checkMarkIcon} skill={"React"} />
        <SkillsList src={checkMarkIcon} skill={"TypeScript"} />
        <SkillsList src={checkMarkIcon} skill={"JavaScript(ES6)"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"Node.js"} />
        <SkillsList src={checkMarkIcon} skill={"postgreSQL"} />
        <SkillsList src={checkMarkIcon} skill={"API RESTful"} />
        <SkillsList src={checkMarkIcon} skill={"Express"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"git & GitHub"} />
        <SkillsList src={checkMarkIcon} skill={"tailwind"} />
        <SkillsList src={checkMarkIcon} skill={"Sass"} />
        <SkillsList src={checkMarkIcon} skill={"PHP"} />
      </div>
    </section>
  );
}

export default Skillls;
