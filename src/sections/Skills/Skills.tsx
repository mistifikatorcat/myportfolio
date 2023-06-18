import styles from './Skills.module.scss';
import Image from 'next/image';
import { skills } from '@/utils/variables';



function Skills(){
    return(
        <section className={styles.skills}>
            <h2>My Skills:</h2>
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <Image
                        key={index}
                        src={skill.src}
                        alt={skill.alt}
                        className={styles.icon}
                        />
                ))}
            </div>
        </section>
    )
}

export default Skills;