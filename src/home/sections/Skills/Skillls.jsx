import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../../assets/checkmark-dark.svg";
import SkillsList from "../../../common/SkillsList";

function Skillls() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Habilidades</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"HTML"} />
        <SkillsList src={checkMarkIcon} skill={"CSS"} />
        <SkillsList src={checkMarkIcon} skill={"JavaScript(ES6)"} />
        <SkillsList src={checkMarkIcon} skill={"TypeScript"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"React"} />
        <SkillsList src={checkMarkIcon} skill={"Gulp"} />
        <SkillsList src={checkMarkIcon} skill={"Sass"} />
        <SkillsList src={checkMarkIcon} skill={"PHP"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"SPA"} />
        <SkillsList src={checkMarkIcon} skill={"API RESTful"} />
      </div>
    </section>
  );
}

export default Skillls;
