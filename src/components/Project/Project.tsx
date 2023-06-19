import styles from "./Project.module.scss";
import Image from "next/image";

function Project({ src, alt, heading, description }) {
  return (
    <div className={styles.project}>
      <Image src={src} alt={alt} />
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
}
export default Project;
