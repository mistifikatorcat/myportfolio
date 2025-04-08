import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styles from "./Yearblock.module.scss";
import type { Project } from "@/utils/types";

type YearBlockProps = {
  year: number;
  description: string;
  projects: Project[];
};


const YearBlock : React.FC<YearBlockProps> = ({ year, description, projects }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true});

  return (
    <div ref={ref} className={styles.yearBlock}>
      <motion.div
        className={styles.yearDivider}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <span className={styles.line} />
        <span className={styles.year}>{year}</span>
        <span className={styles.line} />
      </motion.div>

      <motion.p
        className={styles.yearDescription}
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1, transition: { delay: 0.3 } } : {}}
      >
        {description}
      </motion.p>

      {projects.length > 0 && (
        <motion.div
          className={styles.yearProjects}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1, transition: { delay: 0.5 } } : {}}
        >
          {projects.map((p) => (
            <a key={p.id} href={p.anchor} className={styles.projectLink}>
              {p.name}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default YearBlock;
