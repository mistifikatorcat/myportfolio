import styles from './Header.module.scss';
import Link from 'next/link';


function Header(){

    return(
        <header className={styles.header}>
            <nav className={styles.menu}>
                <Link href="#about" className={styles.link}>About</Link>
                <Link href="#projects" className={styles.link}>My Projects</Link>
                <Link href="/" className={styles.link}>Contact me</Link>
            </nav>
        </header>
    );
}

export default Header;