import styles from "./Plans.module.scss";
// import Project from '@/components/Project/Project';
// import { currentProjects } from "@/utils/variables";
// import Image from "next/image";
// import Link from "next/link";

function Plans() {
  return (
    <section className={styles.currentProject}>
      <h2>What am I currently up to: </h2>
        <br />
        <div className={styles.plan}>
          <h3>Creating an online-hub for an intellectual game of mafia club. </h3>
          <ul> What have I done:
            <li>Collected the inital information about players</li>
            <li>Based on the info, created a database on which the back-end will be formed</li>
          </ul>
          <ul>What I have to do:
            <li>Create complete API for the hub</li>
            <li>Design a website</li>
            <li>Write the front-end and connect it to the back-end.</li>
          </ul>
        </div>
        <div className={styles.plan}>
          <h3>Getting a job in Hi-Tech sphere</h3>
          <ul> What have I done:
            <li>Studied the Full-Stack development</li>
            <li>Hardened up my skills in real-life projects</li>
            <li>Created CV</li>
            <li>Created own web-portfolio</li>
          </ul>
          <ul>What I have to do:
            <li>Send my CV to the fellow HRs and organizations</li>
            <li>Pass the interview</li>
            <li>Become a part of a team, improve my skills, find friends within my fellow colleagues</li>
          </ul>
        </div>
    </section>
  );
}

export default Plans;
