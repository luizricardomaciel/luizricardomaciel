import styles from "./SkillsStyles.module.css";
import checkMarkIcon from "../../assets/checkmark-dark.svg";
import SkillsList from "../../common/SkillsList";

function Skillls() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">skills</h1>
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"HTML"} />
        <SkillsList src={checkMarkIcon} skill={"CSS"} />
        <SkillsList src={checkMarkIcon} skill={"JavaScript"} />
        <SkillsList src={checkMarkIcon} skill={"TypeScript"} />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillsList src={checkMarkIcon} skill={"React"} />
        <SkillsList src={checkMarkIcon} skill={"Angular"} />
        <SkillsList src={checkMarkIcon} skill={"Vue"} />
        <SkillsList src={checkMarkIcon} skill={"Tailwind CSS"} />
      </div>
      <hr />
    </section>
  );
}

export default Skillls;
