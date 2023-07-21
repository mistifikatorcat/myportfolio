"use client";

import styles from "./Form.module.scss";
import { useState,  FormEvent } from "react";



function Form(/*{onSend}*/) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    // const data = { name, email, message };

    // onSend(data);

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }, null, 2),
      });

      if (response.ok) {
        // Reset form fields on successful submission
        setName("");
        setEmail("");
        setMessage("");
        console.log("Message sent successfully!");
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      console.log("Failed to send message. Please try again later.");
    }
    finally{
      setLoading(false);
    }
  };

  return <form className={styles.form} onSubmit={handleSubmit}>
    <fieldset className={styles.fieldset}>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Your name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          disabled={loading}
          
        />
        <br />

        <input
          type="email"
          name="email"
          className={styles.input}
          placeholder="Your Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}

        
        />
        <br />
        <textarea
          name="message"
          placeholder="Your message"
          value={message}
          className={styles.textarea}
          required
          onChange={(e) => setMessage(e.target.value)}
          disabled={loading}
         
        />
        
        <br />
        <button type="submit" className={styles.button}>
          {loading ? <span className={styles.buttonText}>Sending...</span> : <span className={styles.buttonText}>Get in touch</span>}
        </button>
      </fieldset>
  </form>;
}

export default Form;
