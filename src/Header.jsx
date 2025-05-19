import React from "react";

const Header = () => {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.logo}>🏸 Badminton Invitational</div>
        <ul style={styles.navLinks}>
          <li><a href="#home" style={styles.link}>Home</a></li>
          <li><a href="#schedule" style={styles.link}>Schedule</a></li>
          <li><a href="#teams" style={styles.link}>Teams</a></li>
          <li><a href="#contact" style={styles.link}>Contact</a></li>
        </ul>
      </nav>
      <div style={styles.banner}>
        <h1 style={styles.title}>Amherst Badminton Invitational 2025</h1>
        <p style={styles.subtitle}>Hosted by Amherst College & UMass Amherst</p>
      </div>
    </header>
  );
};

const styles = {
  header: {
    background: "linear-gradient(to right, #582C83, #881C1C)",
    color: "#FFFFFF",
    paddingBottom: "20px",
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    flexWrap: "wrap",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: "bold",
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0,
  },
  link: {
    color: "#FFFFFF",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
  },
  banner: {
    textAlign: "center",
    padding: "10px 20px",
  },
  title: {
    margin: 0,
    fontSize: "2.5rem",
    fontWeight: "bold",
    fontFamily: "'Montserrat', sans-serif",
  },
  subtitle: {
    marginTop: "10px",
    fontSize: "1.2rem",
    color: "#A4DE02",
    fontFamily: "'Montserrat', sans-serif",
  },
};

export default Header;
