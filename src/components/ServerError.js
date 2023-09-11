import React from "react";

import styles from "../styles/ServerError.module.css";

export default function ServerError() {
  return (
    <section className={styles.container}>
      <h2>Sorry, there was an error fetching the data.</h2>
    </section>
  );
}
