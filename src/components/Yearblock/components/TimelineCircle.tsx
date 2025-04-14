"use client"

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./TimelineCircle.module.scss";

const TimelineCircle = ({ year, className = "" }: { year: number; className?: string }) => {
  const ref = useRef(null);

  // Tracks scroll progress through this specific element
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  // Animate stroke drawing from 0 to 1
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div className={`${styles.circleWrapper} ${className}`} ref={ref}>
      <motion.div
        className={styles.verticalLine}
        initial={{ scaleY: 0 }}
        style={{
          scaleY,
          translateX: "-50%", // ← now transform chain works!
        }}
      />




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
          x="52%"
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
