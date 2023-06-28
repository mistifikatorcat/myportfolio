"use client";

import styles from "./Form.module.scss";
import { useState,  FormEvent } from "react";



function Form(/*{onSend}*/) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const data = { name, email, message };

    // onSend(data);

    try {
      const response = await fetch("@api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
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
  };

  return <form className={styles.form} onSubmit={handleSubmit}>
    <fieldset className={styles.fieldset}>
        <label className={styles.label}>Your Name</label>
        <input
          type="text"
          name="name"
          className={styles.input}
          placeholder="Your name"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          
        />
        <br />

        <label className={styles.label}>Your Email</label>
        <input
          type="email"
          name="email"
          className={styles.input}
          placeholder="Your Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        
        />
        <br />
        <label className={styles.label}>Your Message:</label>
        <textarea
          name="message"
          placeholder="Your message"
          value={message}
          required
          onChange={(e) => setMessage(e.target.value)}
         
        />
        
        <br />
        <button type="submit" className={styles.button}>
            Submit
        </button>
      </fieldset>
  </form>;
}

export default Form;
