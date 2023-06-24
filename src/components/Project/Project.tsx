import styles from "./Project.module.scss";
import Image from "next/image";

function Project({ src,  heading, description, features }: {src: string,  heading: string, description: string, features: string}) {
  return (
    <div className={styles.project}>
      <Image src={src} alt={heading} className={styles.image} />
      <h3>{heading}</h3>
      <p>{description}</p>
      <br />
      <span>Features: </span>
      <p>{features}</p>
    </div>
  );
}
export default Project;
