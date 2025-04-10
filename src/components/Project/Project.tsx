import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";


function Project({
  src,
  heading,
  description,
  features,
  align,
  link,
  web,
  anchor
}: {
  src: string;
  heading: string;
  description: string;
  features: string;
  align: string;
  link: string;
  web: string;
  anchor: string;
}) {
  return (
    <div className={styles.project}>
      {align === "left" ? (
        <>
          <div className={styles.wrapper} id={anchor} data-aos='fade-right'>
            <Image src={src} alt={heading} className={`${styles.image} `} />
          </div>
          <div className={`${styles.text} ${styles.textRight}`} data-aos='fade-left'>
            <Link href={link} className={styles.link}>
              <h3 className={styles.heading}>{heading}</h3>
            </Link>
            <br />
            <p>{description}</p>
            <br />
            <div className={styles.smallBlock}>
                <span className={styles.smallHeading}>Features: </span>
                <span className={styles.features}>{features}</span>
            </div>
            <br />
            { web === "none" ? (
              <span className={styles.noLink}><Link href={web}>Live Website</Link> </span>
            ) : (
              <span><Link className={styles.webLink} href={web}>Live Website</Link> </span>
            )}
            
          </div>
        </>
      ) : (
        <>
          <div className={`${styles.text} ${styles.textLeft}`} data-aos='fade-right'>
          <Link href={link} className={styles.link}>
              <h3 className={styles.heading}>{heading}</h3>
            </Link>
            <p>{description}</p>
            <br />
            <div className={styles.smallBlock}>
                <span className={styles.smallHeading}>Features: </span>
                <span className={styles.features}>{features}</span>
            </div>
            <br />
            { web === "none" ? (
              <span className={styles.noLink}><Link href={web}>Live Website</Link> </span>
            ) : (
              <span><Link className={styles.webLink} href={web}>Live Website</Link> </span>
            )}
          </div>
          <div className={styles.wrapper} data-aos='fade-left'>
            <Image src={src} alt={heading} className={`${styles.image} `} />
          </div>
        </>
      )}
    </div>
  );
}
export default Project;
