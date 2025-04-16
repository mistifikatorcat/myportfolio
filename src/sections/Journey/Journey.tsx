"use client"

import React from "react";
import styles from "./Journey.module.scss";
import { journey, projects } from "@/utils/variables";
import YearBlock from "@/components/Yearblock/Yearblock";
import { Project } from "@/utils/types";
import { motion } from "framer-motion";

const Journey = () => {
  return (
    <section className={styles.journeySection}>
      <h2 className={styles.journeyTitle}>My Journey:</h2>
      <div className={styles.journeyIntro}>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}>
          Being a developer was always my dream. </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}>
          It didn’t happen overnight — it took false starts, persistence, and learning how to learn. </motion.p>
        <br />
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}>
          This is how the journey started — and where it’s headed.</motion.p>
      </div>

      {journey.map(({ year, description, projects: projectIds, stack }, index) => {
        const linkedProjects: Project[] = projectIds
          .map((id) => projects.find((p) => p.id === id))
          .filter((p): p is Project => p !== undefined); // Type guard

        return (

          <YearBlock
            key={year}
            year={year}
            description={description}
            projects={linkedProjects}
            stack={stack}
          />

        );
      })}
    </section>
  );
};

export default Journey;
