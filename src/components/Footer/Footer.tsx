import styles from './Footer.module.scss';


function Footer(){
    return(
        <footer className={styles.footer}>
            <p>© {new Date().getFullYear()} Daniel Evgrafov</p>
        </footer>
    );
}

export default Footer;