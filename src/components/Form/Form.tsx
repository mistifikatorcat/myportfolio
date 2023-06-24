import styles from './Form.module.scss';
import React, {useState, ChangeEvent, FormEvent} from 'react';


function Form(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const data = { name, email, message };
    
      };




    return(
        <form className={styles.form}>
            
        </form>
    );
}

export default Form;