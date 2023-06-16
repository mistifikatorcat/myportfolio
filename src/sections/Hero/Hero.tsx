import styles from './Hero.module.scss';
import Image from 'next/image';
import image from '@images/hero.png';

function Hero(){
    return(
        <section className={styles.hero}>
            <Image src={image} alt='Daniel Evgrafov' className={styles.image} />
            <aside>
            <h1>Daniel Evgrafov</h1>
            <h2>Full-Stack Developer</h2>
            </aside>
        </section>
    )
}


export default Hero;