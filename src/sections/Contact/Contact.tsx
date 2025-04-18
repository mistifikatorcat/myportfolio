import Form from '@/components/Form/Form';
import styles from './Contact.module.scss';
import Link from 'next/link';
import Image from 'next/image';


function Contact() {
    return (
        <section className={styles.contact} id='contact'>
            <h2>Contact me:</h2>
            <div className={styles.wrap}>
                <div className={styles.formWrapper}>
                    <Form />
                </div>
                <div className={styles.textWrapper}>
                    <p className={styles.text}>Have a question? Want to collaborate or just say hi? </p>
                    <p className={styles.text}>I'm always open to new ideas, partnerships, or cool side projects. Let's talk! </p>
                    <p className={styles.text}>Or you can just mail me at: </p>
                    <Link href='mailto:danyaevgrafov@gmail.com' className={styles.link}>danyaevgrafov@gmail.com</Link>
                    <div className={styles.social}>
                        <p className={styles.text}>Also you can reach out to me (or keep up to date on what I do) right here:</p>
                        <div className={styles.icons}>
                            <Link href="https://github.com/mistifikatorcat" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/icons/github.svg" alt="GitHub" width={30} height={30} className={styles.icon} />
                            </Link>
                            <Link href="https://linkedin.com/in/danyaevgrafov" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={30} height={30} className={styles.icon} />
                            </Link>
                            <Link href="https://t.me/mistycat" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/icons/telegram.svg" alt="Telegram" width={30} height={30} className={styles.icon} />
                            </Link>
                            <Link href="https://discord.com/users/mistifikatorcat" target="_blank" rel="noopener noreferrer">
                                <Image src="/images/icons/discord.svg" alt="Discord" width={30} height={30} className={styles.icon} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;