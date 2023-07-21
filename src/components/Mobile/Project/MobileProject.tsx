import styles from "./MobileProject.module.scss";
import Image from "next/image";
import Link from "next/link";


function MobileProject({
  src,
  heading,
  description,
  features,
  link

}: {
  src: string;
  heading: string;
  description: string;
  features: string;
  link: string;

}) {
  return (
    <div className={styles.MobileProject}>
          <div className={styles.text}>
          <Link href={link} className={styles.link}>
              <h3 className={styles.heading}>{heading}</h3>
            </Link>
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
