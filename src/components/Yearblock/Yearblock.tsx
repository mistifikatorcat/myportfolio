"use client"

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import styles from "./Yearblock.module.scss";
import type { Project } from "@/utils/types";
import TimelineCircle from "./components/TimelineCircle";
import Image from "next/image";

type YearBlockProps = {
  year: number;
  description: string;
  projects: Project[];
  stack?: string;
  // isFirst?: boolean;
  // isLast?: boolean;
};


const YearBlock: React.FC<YearBlockProps> = ({ year, description, projects, stack }) => {
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

      <div className={styles.yearContent}>
        {/* left column */}
        <div className={styles.descriptionBlock}>
          {description.split('||').map((para, i) => (
            <p key={i}>{para.trim()}</p>
          ))}
        </div>
        {/* right column */}
        <div className={styles.infoBlock}>
          <div className={styles.stackSection}>
            <h4>What did I study on:</h4>
            {stack}
          </div>
          <div className={styles.projectSection}>
            <h4>What did I work on:</h4>
            <div className={styles.projectTeasers}>
              {projects.map((project) => (
                <a key={project.id} href={`#${project.anchor}`} className={styles.projectItem}>
                  <div className={styles.thumbnailWrapper}>
                    <Image src={project.thumbnail} alt={project.heading} className={styles.image} />
                    <span className={styles.projectTitle}>{project.heading}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YearBlock;
