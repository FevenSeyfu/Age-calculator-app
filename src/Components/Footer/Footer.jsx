import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <p class={styles.attribution}>
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://www.frontendmentor.io/profile/FevenSeyfu">
          Feven Seyfu
        </a>
        .
      </p>
    </footer>
  );
};
