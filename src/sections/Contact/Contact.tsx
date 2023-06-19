import Form from '@/components/Form/Form';
import styles from './Constact.module.scss';


function Contact(){
    return(
        <section className={styles.contact}>
            <h2>Contact me:</h2>
            <Form />
        </section>
    );
}

export default Contact;