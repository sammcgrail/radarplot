import React from "react";

import styles from "../styles/LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={styles.container}>
      <div className={styles.spinner} />
    </div>
  );
}
