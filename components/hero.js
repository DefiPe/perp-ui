import React from "react";
import styles from '../styles/hero.module.css';

export default function Hero() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.magicButton}>
          <img src="magic.svg" alt="Icon" className={styles.icon} />
          <p>Perpetual Trading is on its way</p>
        </div>
        <div className={styles.heroh1}>
          <p>Discover endless possibilities in the world <br /> of trading</p>
        </div>
        <div className={styles.heroh2}>
          <p>The world's easiest-to-use decentralized trading platform</p>
        </div>
        <div className={styles.heroTexts}>
          <div className={styles.heroText}>
            <img src="fast.svg" alt="Fast Trading" className={styles.textIcon} />
            <p>Fast Trading</p>
          </div>
          <div className={styles.heroText}>
            <img src="reliable.svg" alt="Secure & Reliable" className={styles.textIcon} />
            <p>Secure & Reliable</p>
          </div>
          <div className={styles.heroText}>
            <img src="cont.svg" alt="Continuous Market Updates" className={styles.textIcon} />
            <p>Continuous Market Updates</p>
          </div>
        </div>
        <div className={styles.heroButtons}>
          <button className={styles.button}>
          <img src="fire.svg" alt="Button Icon 1" className={styles.buttonIcon} />
            Start Trading</button>
          <button className={styles.button}>
          <img src="gift.svg" className={styles.buttonIcon} />
            Try Demo</button>
        </div>
      </div>
    </>
  );
}
