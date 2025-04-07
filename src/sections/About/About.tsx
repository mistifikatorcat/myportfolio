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
                <div className={styles.journey}>
                    <h3>My Journey:</h3>
                    <p>Being a developer was my dream since I was 12 years old. Through self-study, and 3-years experience as a QA-Engineer, I have acquired a strong foundation in the software development life cycle, testing company&apos;s products and understanding both front-end and back-end technologies.</p>
                    <br/>
                    <h4 className={styles.timeline}>2022</h4>
                    <p>I took part in Practicum100 Full-Stack course, which I&apos;ve succesfully finished and gained some vital skills, by making my own projects in React.JS with a Node.JS back-end.</p>
                    <br/>
                    <h4 className={styles.timeline}>2023</h4>
                    <p>I became a part of Desight studio, where I&apos;ve polished my skills in frontend, by being provided with some real tasks and problems.</p>
                    <br/>
                    <h4 className={styles.timeline}>2024</h4>
                    <p>I started to work as a Junior Mobile Developer for 18/24 company, contributing its app to the production. Some of my changes like Login/Registration and Main Menu that I wrote, even made it to the App Store and Google Play!</p>
                    <br/>
                    <p>Right now I'm looking for a new opportunity to grow, collaborate, meet new great people with whom I can learn and build great products. So, feel free to reach out!</p>
                </div>
            </div>
        </section>
    );
}

export default About;