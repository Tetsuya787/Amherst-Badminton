import React from "react";
import styles from "./Header.module.css";

const Header = ({ currentHash = "#home" }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logoContainer}>
          <img 
            src="/logo-transparent.png" 
            alt="Amherst Invitational logo" 
            className={styles.eventLogo} 
          />
          <h1 className={styles.eventName}>Amherst Invitational</h1>
          <img 
            src="/logo-transparent.png" 
            alt="" 
            className={styles.eventLogo} 
          />
        </div>

        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><a href="#home" className={styles.link}>Home</a></li>
            <li><a href="#about" className={styles.link}>About</a></li>
            <li><a href="#schedule" className={styles.link}>Schedule</a></li>
            <li><a href="#registration" className={styles.link}>Registration</a></li>
            <li><a href="#venue" className={styles.link}>Venue</a></li>
            <li><a href="#teams" className={styles.link}>Teams</a></li>
            <li><a href="#gallery" className={styles.link}>Gallery</a></li>
            <li><a href="#rules" className={styles.link}>Rules</a></li>
            <li><a href="#sponsors" className={styles.link}>Sponsors</a></li>
            <li><a href="#contact" className={styles.link}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;