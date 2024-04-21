import styles from "./Plan.module.scss";

function Plan({
  title,
  steps,
  haveTo,
  align,
}: {
  title: string;
  steps: string[];
  haveTo: string[];
  align: string;
}) {
  return (
    <div
      className={`${styles.plan} ${
        align === "left" ? styles.left : styles.right
      }`}
      data-aos={`${align === "left" ? "fade-left" : "fade-right"}`}
    >
      <h4 className={styles.title}>{title}</h4>

      <span className={styles.subtitle}>What have I done:</span>

      <ul
        className={`${styles.steps} ${
          align === "left" ? styles.stepLeft : styles.stepRight
        }`}
      >
        {steps.map((step) => (
          <li className={styles.step} key={step}>{step}</li>
        ))}
      </ul>
      <span className={styles.subtitle}>What I have to do:</span>
      <ul
        className={`${styles.haveTo} ${
          align === "left" ? styles.planLeft : styles.planRight
        }`}
      >
        {haveTo.map((item) => (
          <li className={styles.step} key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Plan;
