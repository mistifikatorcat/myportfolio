"use client"

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./TimelineCircle.module.scss";

const TimelineCircle = ({year}: {year: number}) => {
  const ref = useRef(null);

  // Tracks scroll progress through this specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Animate stroke drawing from 0 to 1
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className={styles.circleWrapper} ref={ref}>
      <motion.svg
        className={styles.circle}
        viewBox="0 0 50 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          cx="25"
          cy="25"
          r="20"
          stroke="#ff9933"
          strokeWidth="4"
          fill="none"
          style={{
            pathLength,
          }}
        />
            <text
          x="50%"
          y="52%"
          dominantBaseline="middle"
          textAnchor="middle"
          className={styles.circleText}
        >
          {year}
        </text>
      </motion.svg>
    </div>
  );
};

export default TimelineCircle;
