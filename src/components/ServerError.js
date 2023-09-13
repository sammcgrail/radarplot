import React from "react";

import styles from "../styles/ServerError.module.css";

export default function ServerError({ error, errorSource }) {
  if (error) {
    console.error(error);
  }
  return (
    <section className={styles.container}>
      <h2>
        Sorry, there was an error fetching the data
        {errorSource ? ` from ${errorSource}` : ""}.
      </h2>
      {error ?? <h3>{error}</h3>}
    </section>
  );
}
