import React from "react";

import styles from "../styles/Card.module.css";

export default function Card({ children, className }) {
  return (
    <section className={`${styles.card} ${className || ""}`}>
      {children}
    </section>
  );
}
