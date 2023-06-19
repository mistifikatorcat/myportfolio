import styles from "./Project.module.scss";
import Image from "next/image";

function Project({ src, alt, heading, description }: {src: string, alt: string, heading: string, description: string}) {
  return (
    <div className={styles.project}>
        <p>No image yet</p>
      <Image src={src} alt={alt} className={styles.image} />
      <h3>{heading}</h3>
      <p>{description}</p>
    </div>
  );
}
export default Project;
