import React from "react";
import styles from "./form-elements.module.css";

function CheckBox({ children, ...props }) {
  return (
    <label className={styles.checkbox}>
      <input type="checkbox" {...props} />
      <span className={styles.toggle}></span>
      <span className={styles.text}>{children}</span>
    </label>
  );
}

export default CheckBox;
