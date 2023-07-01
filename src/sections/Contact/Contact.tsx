import Form from '@/components/Form/Form';
import styles from './Contact.module.scss';
import Link from 'next/link';


function Contact(){
    return(
        <section className={styles.contact} id='contact'>
            <h2>Contact me:</h2>
            <div className={styles.wrap}>
                <div className={styles.formWrapper}>
                    <Form />    
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>If you have any questions about me or my projects, or discuss some of the best cars I would love to chat!</p>
                    <br />
                    <p className={styles.text}>I&apos;m available any time, any place, so feel free to drop a comment, question, offer, concern, and let&apos;s talk!</p>
                    <br />
                    <p className={styles.text}>Or you can just mail me at: </p>
                        <Link href='mailto:danyaevgrafov@gmail.com' className={styles.link}>danyaevgrafov@gmail.com</Link>
                </div>
            </div>
        </section>
    );
}

export default Contact;