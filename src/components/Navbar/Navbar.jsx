import React from "react"
import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src="images/woof_logo.png" alt="" className={styles.navbar__logo} />
      <ul className={styles.navbar__links}>
        <li>
          <a href="#tokenomics">Tokenomics</a>
        </li>
        <li>
          <a href="#roadmap">Roadmap</a>
        </li>
        <li>
          <a href="https://woofsolana.com/">Team</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
