import styles from './MobileList.module.scss';
import MobileProject from '../Project/MobileProject';
import { projects } from '@/utils/variables';


function MobileList(){
    return(
        <section className={styles.projects} id='projects'>
            <h2>My Projects:</h2>
            <div className={styles.wrapper}>
                {projects.map((project, index) => (
                    <MobileProject
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

export default MobileList;