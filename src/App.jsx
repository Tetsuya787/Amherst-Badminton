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
import recwellImage from "./assets/Facilities/recwell.jpg";

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
            <div className="venue-container">
              <div className="venue-details">
                <h3>UMass Campus Recreation</h3>
                
                {/* Add the recwell image at the top */}
                <div className="venue-image-container">
                  <img 
                    src={recwellImage}
                    alt="UMass Campus Recreation Center" 
                    className="venue-image"
                  />
                </div>
                
                <p>
                  The tournament will be held at the state-of-the-art UMass Campus Recreation Center, 
                  featuring premium badminton courts with professional lighting and flooring.
                </p>
                
                <div className="venue-info-grid">
                  <div className="venue-info-item">
                    <h4>Address</h4>
                    <p>UMass Campus Recreation Center<br />
                       161 Commonwealth Avenue<br />
                       Amherst, MA 01003</p>
                  </div>
                  
                  <div className="venue-info-item">
                    <h4>Facilities</h4>
                    <ul>
                      <li>8+ badminton courts</li>
                      <li>Spectator seating</li>
                      <li>On-site food options</li>
                    </ul>
                  </div>
                </div>
                
                <div className="venue-directions">
                  <h4>Getting There</h4>
                  <p>The Recreation Center is centrally located on the UMass Amherst campus.</p>
                  <ul>
                    <li><strong>By Car:</strong> Parking available in the Campus Recreation parking lot</li>
                    <li><strong>By Bus:</strong> PVTA bus routes stop directly in front of the building</li>
                    <li><strong>Campus Shuttle:</strong> Regular service from all campus locations</li>
                  </ul>
                  <a href="https://maps.app.goo.gl/sbvkyq2E9vfkLRkG7" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="directions-btn">
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
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