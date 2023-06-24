import styles from './Projects.module.scss';
import Project from '@/components/Project/Project';
import { projects } from '@/utils/variables';


function Projects(){
    return(
        <section className={styles.projects} id='projects'>
            <h2>My Projects:</h2>
            <div className={styles.wrapper}>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        src={project.src}
                        heading={project.heading}
                        description={(project.description)}
                        features={(project.features)}
                        />
                ))
                }
            </div>
        </section>
    );
}

export default Projects;