import styles from "./Project.module.scss";
import Image from "next/image";

function Project({
  src,
  heading,
  description,
  features,
  align,
}: {
  src: string;
  heading: string;
  description: string;
  features: string;
  align: string;
}) {
  return (
    <div className={styles.project}>
      {align === "left" ? (
        <>
          <div className={styles.wrapper}>
            <Image src={src} alt={heading} className={styles.image} />
          </div>
          <div className={styles.textRight}>
            <h3 className={styles.heading}>{heading}</h3>
            <br />
            <p>{description}</p>
            <br />
            <span className={styles.smallHeading}>Features: </span>
            <span className={styles.features}>{features}</span>
          </div>
        </>
      ) : (
        <>
          <div className={styles.textLeft}>
            <h3 className={styles.heading}>{heading}</h3>
            <p>{description}</p>
            <br />
            <span className={styles.smallHeading}>Features: </span>
            <span className={styles.features}>{features}</span>
          </div>
          <div className={styles.wrapper}>
            <Image src={src} alt={heading} className={styles.image} />
          </div>
        </>
      )}
    </div>
  );
}
export default Project;
