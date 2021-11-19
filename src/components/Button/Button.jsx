import React from "react"
import styles from "./Button.module.css"

function Button({ children, className, url, color }) {
  return (
    <a
      href={url}
      className={`${styles.btn} ${className} ${styles[color]}`}
      rel="noreferrer"
      target="_blank"
    >
      <p className={styles.button__text}>{children}</p>
    </a>
  )
}

export default Button
