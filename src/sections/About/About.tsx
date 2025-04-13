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
                        <p>I am a Full-Stack Developer with around 3 years of experience — mostly focused on frontend, and lately diving into mobile. Always drawn to build things that not only work well but feel elegant and purposeful.</p>
                        <br />
                        <p>There is something deeply satisfying about solving problems through code — especially the tricky ones that require a bit of digging and pattern-spotting. It&apos;s not just about delivering features; it&apos;s about shaping experiences that make sense.</p>
                        <br />
                        <p>Naturally hands-on and curious. Before reaching out for help, there's a drive to figure things out, explore the edges, and understand how it all fits together. The most interesting puzzles are rarely on surface-level — and that&apos;s where the real fun begins.</p>
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