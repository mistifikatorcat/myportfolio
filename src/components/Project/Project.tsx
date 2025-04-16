"use client"

import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



type ProjectProps = {
  src: string;
  heading: string;
  description: string;
  features: string;
  align: "left" | "right";
  link: string;
  web: string;
  anchor: string;
};



export default function Project({
  src,
  heading,
  description,
  features,
  align,
  link,
  web,
  anchor,
}: ProjectProps) {
  const isLeft = align === "left";
  const [showNda, setShowNda] = useState(false);

  const imageBlock = (
    <div
      className={styles.wrapper}
      id={anchor}
      data-aos={isLeft ? "fade-right" : "fade-left"}
    >
      <Image src={src} alt={heading} className={styles.image} />
    </div>
  );

  const textBlock = (
    <div
      className={`${styles.text} ${isLeft ? styles.textRight : styles.textLeft}`}
      data-aos={isLeft ? "fade-left" : "fade-right"}
    >
      {link === "nda" ? (
        <>
          <button className={styles.ndaHeading} onClick={() => setShowNda(true)}>
            <h3 className={styles.heading}>{heading}</h3>
          </button>
          {showNda && (
            <div className={styles.popup}>
              <span>This project is under NDA and can’t be shared publicly.</span>
              <button onClick={() => setShowNda(false)} className={styles.closeBtn}>×</button>
            </div>
          )}
        </>
      ) : (
        <Link href={link} className={styles.link}>
          <h3 className={styles.heading}>{heading}</h3>
        </Link>
      )}

      <p>{description}</p>
      <div className={styles.smallBlock}>
        <span className={styles.smallHeading}>Features:</span>
        <span className={styles.features}>{features}</span>
      </div>
      {web === "app" ? (
        <div className={styles.appLinks}>
          <Link href="https://apps.apple.com/il/app/1824/id1440413192" target="_blank" rel="noopener noreferrer">
            <img src="/images/appstore_badge.svg" alt="Download on the App Store" />
          </Link>
          <Link href="https://play.google.com/store/apps/details?id=il.co.wisegroup.app1824&hl=en&pli=1" target="_blank" rel="noopener noreferrer">
            <img src="/images/googleplay_badge.png" alt="Get it on Google Play" />
          </Link>
        </div>
      ) : web !== "none" && (
        <span>
          <Link className={styles.webLink} href={web}>
            Live Website
          </Link>
        </span>
      )}

    </div>
  );

  return (
    <div className={styles.project}>
      {isLeft ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}
