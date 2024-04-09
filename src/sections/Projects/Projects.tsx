import styles from './Projects.module.scss';
import Project from '@/components/Project/Project';
import { projects } from '@/utils/variables';


function Projects(){
    return(
        <section className={styles.projects}>
            <h2>Projects I've been a part of:</h2>
            <div className={styles.wrapper}>
                {projects.map((project, index) => (
                    <Project
                        key={index}
                        src={project.src}
                        heading={project.heading}
                        description={(project.description)}
                        features={(project.features)}
                        align={index % 2 === 0 ? 'left' : 'right'}
                        link={project.link}
                        web={project.web}
                        />
                ))
                }
            </div>
        </section>
    );
}

export default Projects;