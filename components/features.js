import React from "react";
import styles from '../styles/feature.module.css';

export default function features() {
  return (
    <>
    <div className={styles.header}>
      <h3>Features</h3>
      <p>Empower your trading skills, whether you're a novice or a prothrough our streamlined platform offering a clean and accessible user interface.</p>
    </div>
    <div className={styles.cardContainer}>
        <div className={styles.card}>
          <img src="f1.svg" alt="Image 1" />
          <h4>Self-custody with the gasless transaction</h4>
          <p>Only you have full control over your funds. Trade without the worry of gas fees.</p>
        </div>
        <div className={styles.card}>
          <img src="f2.svg" alt="Image 2" />
          <h4>Many markets with Low Trading Fee</h4>
          <p>Trade on crypto, Nfts, or any synthetic stocks as per your wish. With only Maker's 0.02% fee and Taker's 0.04% fee</p>
        </div>
        <div className={styles.card}>
          <img src="f3.svg" alt="Image 3" />
          <h4>High-speed trading with deep liquidity</h4>
          <p>Only you have full control over your funds. Trade without the worry of gas fees.</p>
        </div>
        <div className={styles.card}>
          <img src="f4.svg" alt="Image 4" />
          <h4>Fully decentralized and Open source</h4>
          <p>Secured by Zero Knowledge Proofs and Validium</p>
        </div>
      </div>
    </>
  );
}
