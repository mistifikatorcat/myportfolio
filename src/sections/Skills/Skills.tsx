import styles from './Skills.module.scss';
import Icon from '@/components/Icon/Icon';
import { skills } from '@/utils/variables';



function Skills(){
    return(
        <section className={styles.skills}>
            <h2>My Skills:</h2>
            <div className={styles.grid}>
                {skills.map((skill, index) => (
                    <Icon
                        key={index}
                        src={skill.src}
                        alt={skill.alt}
                        />    
                ))}
            </div>
        </section>
    )
}

export default Skills;