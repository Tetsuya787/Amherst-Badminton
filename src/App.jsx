// App.jsx
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Contact from "./Contact";
import "./App.css";

// Import team logos
import amherstLogo from "./assets/logos/AC_Logo.png";
import umassLogo from "./assets/logos/UMass_Logo.png";
import williamsLogo from "./assets/logos/Williams_logo.png";
import yaleLogo from "./assets/logos/Yale_Logo.png";
import bcLogo from "./assets/logos/BC_Logo.png";
import dartmouthLogo from "./assets/logos/Dartmouth_Logo.png";

function App() {
  // Track the current hash for simple routing
  const [currentHash, setCurrentHash] = useState(window.location.hash || "#home");
  // State for logo rotation effects
  const [rotationAngles, setRotationAngles] = useState({});

  // Create an object mapping team names to their logo files
  const teamLogos = {
    "Amherst College": amherstLogo,
    "UMass Amherst": umassLogo,
    "Williams College": williamsLogo,
    "Yale University": yaleLogo,
    "Boston College": bcLogo,
    "Dartmouth College": dartmouthLogo,
    "Harvard University": "https://1000logos.net/wp-content/uploads/2017/02/Harvard-Logo.png",
    "MIT": "https://1000logos.net/wp-content/uploads/2022/08/MIT-Logo.png"
  };

  // Update the hash state when the URL changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || "#home");
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Function to handle logo hover animation
  const handleLogoHover = (team) => {
    setRotationAngles(prev => ({
      ...prev,
      [team]: (prev[team] || 0) + 10
    }));
  };

  // Render different sections based on the hash
  const renderContent = () => {
    switch(currentHash) {
      case "#contact":
        return <Contact />;
      case "#about":
        return (
          <section id="about">
            <h2>About the Tournament</h2>
            <p>Information about the tournament will appear here.</p>
          </section>
        );
      case "#schedule":
        return (
          <section id="schedule">
            <h2>Tournament Schedule</h2>
            <p>Schedule details will appear here.</p>
          </section>
        );
      case "#registration":
        return (
          <section id="registration">
            <h2>Registration</h2>
            <p>Registration information will appear here.</p>
          </section>
        );
      case "#venue":
        return (
          <section id="venue">
            <h2>Venue Information</h2>
            <p>Details about the venue will appear here.</p>
          </section>
        );
      case "#teams":
        return (
          <section id="teams">
            <h2>Participating Teams</h2>
            
            <div className="teams-container">
              <div className="teams-section">
                <h3>Committed Teams</h3>
                <ul className="teams-list">
                  {['Amherst College', 'UMass Amherst', 'Williams College', 'Yale University'].map(team => (
                    <li key={team} className="team-item">
                      <img 
                        src={teamLogos[team]} 
                        alt={team} 
                        className="team-logo"
                      />
                      <span>{team}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="teams-section">
                <h3>Interested Teams</h3>
                <ul className="teams-list">
                  {['Boston College', 'Dartmouth College', 'Harvard University', 'MIT'].map(team => (
                    <li key={team} className="team-item">
                      <img 
                        src={teamLogos[team]} 
                        alt={team} 
                        className="team-logo"
                      />
                      <span>{team}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="more-teams">
                <p><em>More teams coming soon!</em></p>
                <p>Registration is open until September 15, 2024</p>
              </div>
            </div>
          </section>
        );
      case "#rules":
        return (
          <section id="rules">
            <h2>Tournament Rules</h2>
            <p>Tournament rules will appear here.</p>
          </section>
        );
      case "#home":
      default:
        return (
          <section id="home">
            <h2>Welcome to the Amherst Badminton Invitational 2025!</h2>
            <p>Join us for an exciting tournament hosted by Amherst College & UMass Amherst.</p>
          </section>
        );
    }
  };

  return (
    <div className="app-container">
      <Header currentHash={currentHash} />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;