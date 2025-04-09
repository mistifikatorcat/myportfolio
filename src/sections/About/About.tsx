import styles from './About.module.scss';
import Image from 'next/image';
import picture from '@images/about.jpg';

function About(){
    return(
        <section className={styles.about} id='about'>
            <h2>Greetings, my name is Daniel!</h2>
            <div className={styles.content}>
                <div className={styles.personal}>
                    <div className={styles.text}>
                        <p>I am Full-Stack developer with around 3 years of experience, mostly focused on frontend and later switched to mobile development.</p>
                        <br />
                        <p>I enjoy creating something new and beautiful which can serve a good purpose as well as I enjoy solving challenging puzzles through the code.</p>
                        <br />
                    </div>
                
                <div className={styles.wrapper}>
                    <Image src={picture} alt='Daniel Evgrafov' className={styles.image} />
                </div>
                </div>
            </div>
        </section>
    );
}

export default About;