import styles from "./MobileProject.module.scss";
import Image from "next/image";


function MobileProject({
  src,
  heading,
  description,
  features,

}: {
  src: string;
  heading: string;
  description: string;
  features: string;

}) {
  return (
    <div className={styles.MobileProject}>
          <div className={styles.text}>
            <h3 className={styles.heading}>{heading}</h3>
            <p>{description}</p>
            <br />
            <span className={styles.smallHeading}>Features: </span>
            <span className={styles.features}>{features}</span>
          </div>
          <div className={styles.wrapper}>
            <Image src={src} alt={heading} className={styles.image} />
          </div>
      </div>
  );
}
export default MobileProject;
