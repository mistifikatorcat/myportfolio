"use client"

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import styles from "./Yearblock.module.scss";
import type { Project } from "@/utils/types";
import TimelineCircle from "./components/TimelineCircle";

type YearBlockProps = {
  year: number;
  description: string;
  projects: Project[];
  // isFirst?: boolean;
  // isLast?: boolean;
};


const YearBlock: React.FC<YearBlockProps> = ({ year, description, projects }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={ref} className={styles.yearBlock}>

      <div className={styles.yearDivider}>
        <motion.span
          className={`${styles.line} ${styles.leftLine}`}
          style={{ scaleX: scale }}
        />
        <div className={styles.timelineWrapper}>
          <TimelineCircle
            year={year}
            // className={`${isFirst ? styles.first : ""} ${isLast ? styles.last : ""}`} //cannot find name isFirst and isLast
          />
        </div>
        <motion.span
          className={`${styles.line} ${styles.rightLine}`}
          style={{ scaleX: scale }}
        />
      </div>

      <p
        className={styles.yearDescription}
      >
        {description}
      </p>

      <h4>I've been working on:</h4>

      {projects.length > 0 && (
        <div
          className={styles.yearProjects}
        >
          {projects.map((project) => (
            <a key={project.id} href={`#${project.anchor}`} className={styles.projectLink}>
              {project.heading}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default YearBlock;
