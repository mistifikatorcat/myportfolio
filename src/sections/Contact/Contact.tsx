import Form from '@/components/Form/Form';
import styles from './Constact.module.scss';


function Contact(){
    return(
        <section className={styles.contact} id='contact'>
            <h2>Contact me:</h2>
            <div className={styles.wrap}>
                <div className={styles.formWrapper}>
                    <Form />    
                </div>
                <div className={styles.textWrapper}>
                    <p>Here you can contact me and discuss anything.</p>
                </div>
            </div>
        </section>
    );
}

export default Contact;