import styles from "./CurrentProject.module.scss";
// import Project from '@/components/Project/Project';
import { currentProjects } from "@/utils/variables";
import Image from "next/image";
import Link from "next/link";

function CurrentProject() {
  return (
    <section className={styles.currentProject} id="projects">
      <h2>What am I currently working on:</h2>
      {currentProjects.map((project) => (
        <div className={styles.project}>
        <Link href='https://desight.co' className={styles.title}>
        <h3 className={styles.title}>{project.heading}</h3>
        </Link>
          <div className={styles.info}>
            <div className={styles.wrapper}>
              <Image src={project.src} alt="" className={styles.image} />
            </div>
            <div className={styles.text}>
                <p className={styles.description}>{project.description}</p>
                <br />
                <span className={styles.smallHeading}>Features: </span>
                <p className={styles.features}>{project.features}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default CurrentProject;
