import React from "react"
import Button from "../Button/Button"
import styles from "./Hero.module.css"
import { FaTwitter, FaDiscord } from "react-icons/fa"
import Coinmarketcap from "../../assets/Coinmarketcap"
import Coingecko from "../../assets/Coingecko"

function Hero() {
  return (
    <div className={styles.hero}>
      <img src="images/woof_coin.png" alt="" className={styles.hero__image} />
      <div className={styles.hero__info}>
        <p className={styles.hero__text}>
          WOOF tested the effect of token burning by creating a massive total
          supply of 1 trillion tokens and burning half of them each day.
        </p>
        <Button url="https://woofsolana.com/dex/">Try our DEX</Button>
        <div className={styles.hero__icons}>
          <a
            href="https://twitter.com/WoofSolana"
            className={styles.iconLink}
            rel="noreferrer"
            target="_blank"
          >
            <FaTwitter className={styles.twitter} />
          </a>
          <a
            href="http://discord.gg/bpzv4UTAS5"
            rel="noreferrer"
            target="_blank"
          >
            <FaDiscord className={styles.discord} />
          </a>
          <a
            href="https://coinmarketcap.com/currencies/woof/"
            rel="noreferrer"
            target="_blank"
          >
            <Coinmarketcap className={styles.coinmarketcap} />
          </a>
          <a
            href="https://www.coingecko.com/en/coins/woof-token"
            rel="noreferrer"
            target="_blank"
          >
            <Coingecko className={styles.coingecko} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero
