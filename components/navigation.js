import React from "react";
import styles from '../styles/navbar.module.css';

export default function Navigation() {
  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.navbarLeft}>
          <img src="defi.svg" alt="Defi Logo" />
          <div className={styles.navMiddle}>
            <a>Trade</a>
            <a>AI guide</a>
            <a>About us</a>
          </div>
        </div>
        <div className={styles.navbarRight}>
          <button className={styles.connectButton}>Connect Wallet</button>
        </div>
      </div>
    </>
  );
}
