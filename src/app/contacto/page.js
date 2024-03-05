"use client";

import Image from "next/image";

import styles from "./contacto.module.css";

export default function Contacto() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch("/api/contact", {
        method: "post",
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over");
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData["message"]);

      alert("Message successfully sent");
    } catch (err) {
      console.error(err);
      alert("Error, please try resubmitting the form");
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1>LET'S WORK TOGETHER!</h1>
      </div>
      <div>
        <div className={styles.coverImage}>
          <Image
            alt=""
            src="/images/servicios.webp"
            fill
            priority
            className={styles.image}
            style={{ objectFit: "cover" }}
            sizes="30vw"
          />
        </div>
      </div>
    </div>
  );
}
