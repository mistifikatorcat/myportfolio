import React from "react";
import styles from "./Journey.module.scss";
import { journey, projects } from "@/utils/variables";
import YearBlock from "@/components/Yearblock/Yearblock";
import { Project } from "@/utils/types";

const Journey = () => {
    return (
      <section className={styles.journeySection}>
        <h3 className={styles.journeyTitle}>My Journey:</h3>
        <p className={styles.journeyIntro}>
          Being a developer was always my dream. Here's how the journey unfolded:
        </p>
  
        {journey.map(({ year, description, projects: projectIds }) => {
          const linkedProjects: Project[] = projectIds
            .map((id) => projects.find((p) => p.id === id))
            .filter((p): p is Project => p !== undefined); // Type guard
  
          return (
            <YearBlock
              key={year}
              year={year}
              description={description}
              projects={linkedProjects}
            />
          );
        })}
      </section>
    );
  };

export default Journey;
