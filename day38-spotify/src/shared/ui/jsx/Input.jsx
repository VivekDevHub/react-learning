import React from 'react'
import styles from "../css/Input.module.css";

const Input = ({ id, label, error = "", className = "", ...props }) => {
  return (
    <div className={`${styles.field} ${className}`.trim()}>
      {label ? (
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
      ) : null}
      <input
        id={id}
        className={`${styles.input} ${error ? styles.inputError : ""}`.trim()}
        {...props}
      />
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  )
}

export default Input
