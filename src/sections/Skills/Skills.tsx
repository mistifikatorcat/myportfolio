import styles from './Skills.module.scss';
import Image from 'next/image';
import html from '@images/html.svg';


function Skills(){
    return(
        <section className={styles.skills}>
            <h2>My Skills</h2>
            <Image src={html} alt='html' className={styles.icon}/>
        </section>
    );
}

export default Skills;