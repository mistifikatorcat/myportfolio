import styles from "./Icon.module.scss";
import Image from "next/image";

function Icon({ src, alt }: {src: string, alt: string}) {
  return (
    <div className={styles.icon}>
      <Image src={src} alt={alt} className={styles.image} />
        <div className={styles.bubble}>
            <p>{alt}</p>
        </div>
    </div>
  );
}
export default Icon;
