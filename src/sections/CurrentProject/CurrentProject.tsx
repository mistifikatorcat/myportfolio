import styles from './CurrentProject.module.scss';
// import Project from '@/components/Project/Project';
import { currentProjects } from '@/utils/variables';
import Image from 'next/image';


function CurrentProject(){
    return(
        <section className={styles.currentProject} id='projects'>
            <h2>What am I currently working on:</h2>
            <div className={styles.wrapper}>
               {currentProjects.map((project) => (
                     <div className={styles.project}>
                        <h3 className={styles.title}>{project.heading}</h3>
                        <Image src={project.src} alt='' className={styles.image}/>
                        <p className={styles.description}>{project.description}</p>
                        <p className={styles.features}>{project.features}</p>
                     </div>
               ))}
            </div>
        </section>
    );
}

export default CurrentProject;