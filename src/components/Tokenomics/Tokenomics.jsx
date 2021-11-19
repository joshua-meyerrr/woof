import React from "react"
import styles from "./Tokenomics.module.css"

function Tokenomics() {
  return (
    <div className={styles.tokenomics}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2 className={styles.header}>Tokenomics</h2>
          <p className={styles.subheader}>
            98% of total supply of one trillion was burned. The rest was
            airdropped to the community.
          </p>
          <ul className={styles.list}>
            <li>
              <span className={styles.bold}>Maximum Supply:</span>{" "}
              1,000,000,000,000
            </li>
            <li>
              <span className={styles.bold}>Burned Tokens</span>:{"\n"}
              982,097,000,075
            </li>
            <li>
              <span className={styles.bold}>Current Supply:</span>{" "}
              17,902,999,925
            </li>
            <li>
              <span className={styles.bold}>Total number of Woof tokens:</span>{" "}
              18.2B{" "}
            </li>
            <li>
              <span className={styles.no}>No</span> actual dogs were burned
              during this process
            </li>
          </ul>
        </div>
        <img src="images/custom_doge.png" alt="" className={styles.doge} />
      </div>
    </div>
  )
}

export default Tokenomics
