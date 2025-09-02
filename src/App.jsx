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
import brownLogo from "./assets/logos/brown-logo.png";
import recwellImage from "./assets/Facilities/recwell.jpg";
import teamImage from "./assets/players/Team1.jpg";
import umassDiningLogo from "./assets/logos/Umass_Dining_Logo.png";
import YonexLogo from "./assets/logos/Yonex.png";
import Boyden from "./assets/Facilities/Boyden.png";
import play1 from "./assets/players/play1.jpg";
import play2 from "./assets/players/play2.jpg";
import play3 from "./assets/players/play3.jpg";
import team2 from "./assets/players/Team2.jpg";


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
    "Brown University": brownLogo,
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
            
            <div className="about-hero">
              <div className="about-hero-image-container">
                <img 
                  src={teamImage}
                  alt="Badminton players at tournament" 
                  className="about-hero-image"
                />
              </div>
              <p className="about-intro">
                The Amherst Badminton Invitational 2025 brings together the best collegiate badminton players 
                from across New England for an exciting weekend of competition, sportsmanship, and camaraderie.
              </p>
            </div>
            
            <div className="about-content">
              <div className="about-section">
                <h3>Tournament Overview</h3>
                <p>
                  This inaugural invitational tournament is a collaborative effort between Amherst College 
                  and UMass Amherst, designed to showcase the growing badminton talent in the region. 
                  The tournament features multiple competitive divisions and welcomes players of all skill levels.
                </p>
              </div>

              <div className="about-highlights">
                <div className="highlight-grid">
                  <div className="highlight-item">
                    <h4>🏆 Competition Format</h4>
                    <ul>
                      <li>Men's Singles & Doubles</li>
                      <li>Women's Singles & Doubles</li>
                      <li>Mixed Doubles</li>
                    </ul>
                  </div>
                  
                  <div className="highlight-item">
                    <h4>🎯 Tournament Features</h4>
                    <ul>
                      <li>Round-robin group stage</li>
                      <li>Single-elimination playoffs</li>
                      <li>Live score tracking</li>
                    </ul>
                  </div>
                  
                  <div className="highlight-item">
                    <h4>🏅 Awards & Recognition</h4>
                    <ul>
                      <li>Trophies for division winners</li>
                      <li>Sportsmanship recognition</li>
                    </ul>
                  </div>
                  
                  <div className="highlight-item">
                    <h4>🤝 Tournament Benefits</h4>
                    <ul>
                      <li>Network with other players</li>
                      <li>Improve competitive skills</li>
                      <li>Experience high-level play</li>
                      <li>Build team relationships</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="about-section">
                <h3>Why Participate?</h3>
                <div className="why-participate">
                  <div className="participation-reason">
                    <h4>Competitive Excellence</h4>
                    <p>
                      Face off against some of the most talented collegiate badminton players in New England. 
                      This tournament provides an excellent opportunity to test your skills against diverse 
                      playing styles and strategies.
                    </p>
                  </div>
                  
                  <div className="participation-reason">
                    <h4>Skill Development</h4>
                    <p>
                      Learn from experienced players and coaches. The tournament environment offers 
                      valuable insights into advanced techniques, court positioning, and match tactics 
                      that will elevate your game.
                    </p>
                  </div>
                  
                  <div className="participation-reason">
                    <h4>Community Building</h4>
                    <p>
                      Connect with the vibrant badminton community across New England colleges. 
                      Build lasting friendships and establish networks that extend beyond the tournament.
                    </p>
                  </div>
                </div>
              </div>

              <div className="about-section">
                <h3>Tournament Philosophy</h3>
                <p>
                  Our tournament is built on the principles of fair play, respect, and the pursuit of excellence. 
                  We believe that badminton is not just about winning, but about personal growth, teamwork, 
                  and the joy of competition. Whether you're a seasoned player or new to competitive badminton, 
                  this tournament provides a welcoming environment to challenge yourself and celebrate the sport we love.
                </p>
              </div>

              <div className="tournament-stats">
                <h3>Tournament at a Glance</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <span className="stat-number">8+</span>
                    <span className="stat-label">Participating Teams</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">80+</span>
                    <span className="stat-label">Expected Players</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">5</span>
                    <span className="stat-label">Competition Categories</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">1</span>
                    <span className="stat-label">Days of Competition</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case "#schedule":
        return (
          <section id="schedule" className="hero-section">
            <div className="hero-background">
              <img 
                src={team2}
                alt="Schedule Coming Soon" 
                className="hero-background-image"
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content-overlay">
              <h2 className="hero-title">Tournament Schedule</h2>
              <p className="hero-subtitle">Schedule details coming soon. Stay tuned!</p>
            </div>
          </section>
        );
      case "#registration":
        return (
          <section id="registration" className="hero-section">
            <div className="hero-background">
              <img 
                src={play1}
                alt="Registration Coming Soon" 
                className="hero-background-image"
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content-overlay">
              <h2 className="hero-title">Registration</h2>
              <p className="hero-subtitle">Registration information coming soon.</p>
            </div>
          </section>
        );
      case "#venue":
        return (
          <section id="venue">
            <h2>Venue Information</h2>
            <p style={{ fontWeight: "bold", fontSize: "1.2rem", marginBottom: "2rem" }}>
              The tournament will be held at two adjacent gyms on the UMass Amherst campus: Campus Recreation Center and Boyden Gym.
            </p>
            <div className="venue-container">
              <div className="venue-details">
                <h3>UMass Campus Recreation</h3>
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
                      <li>3+ badminton courts</li>
                      <li>Spectator seating</li>
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
            <div className="venue-container">
              <div className="venue-details">
                <h3>Boyden Gymnasium</h3>
                <div className="venue-image-container">
                  <img 
                    src={Boyden}
                    alt="Boyden Gymnasium" 
                    className="venue-image"
                  />
                </div>
                <p>
                  Boyden Gymnasium is located adjacent to the Campus Recreation Center and offers additional badminton courts for tournament play. The gym is a historic athletic facility at UMass Amherst, providing ample space for matches and warm-ups.
                </p>
                <div className="venue-info-grid">
                  <div className="venue-info-item">
                    <h4>Address</h4>
                    <p>Boyden Gymnasium<br />
                       131 Commonwealth Avenue<br />
                       Amherst, MA 01003</p>
                  </div>
                  <div className="venue-info-item">
                    <h4>Facilities</h4>
                    <ul>
                      <li>4+ badminton courts</li>
                      <li>Easy access to Campus Recreation Center</li>
                    </ul>
                  </div>
                </div>
                <div className="venue-directions">
                  <h4>Getting There</h4>
                  <p>Boyden Gymnasium is adjacent to the Campus Recreation Center, making it easy to move between venues.</p>
                  <ul>
                    <li><strong>By Car:</strong> Parking available nearby</li>
                    <li><strong>By Bus:</strong> PVTA bus routes stop close to Boyden Gym</li>
                    <li><strong>Campus Shuttle:</strong> Regular service from all campus locations</li>
                  </ul>
                  <a href="https://maps.app.goo.gl/8w6XJvFJvJvK2wJv7" 
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
                  {['Amherst College', 'UMass Amherst', 'Williams College', 'Yale University', 'Brown University', 'Boston College', 'Dartmouth College'].map(team => (
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
                  {['Harvard University', 'MIT'].map(team => (
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
          <section id="rules" className="hero-section">
            <div className="hero-background">
              <img 
                src={play2}
                alt="Rules Coming Soon" 
                className="hero-background-image"
              />
              <div className="hero-overlay"></div>
            </div>
            <div className="hero-content-overlay">
              <h2 className="hero-title">Tournament Rules</h2>
              <p className="hero-subtitle">Tournament rules will appear here soon.</p>
            </div>
          </section>
        );
      case "#sponsors": 
        return (
          <section id="sponsors">
            <h2>Our Sponsors</h2>
            <div className="sponsors-container">
              <div className="sponsor-card">
                <img 
                  src= {YonexLogo}
                  alt="Yonex"
                  className="sponsor-logo"
                />
                <span className="sponsor-name">Yonex</span>
              </div>
              <div className="sponsor-card">
                <img 
                  src= {umassDiningLogo}
                  alt="UMass Amherst Dining"
                  className="sponsor-logo"
                />
                <span className="sponsor-name">UMass Amherst Dining</span>
              </div>
              {/* Add more sponsors as needed */}
            </div>
          </section>
        );
      case "#home":
      default:
        return (
          <section id="home" className="hero-section">
            <div className="hero-background">
              <img 
                src={teamImage}
                alt="Badminton Tournament Team Photo" 
                className="hero-background-image"
              />
              <div className="hero-overlay"></div>
            </div>
            
            <div className="hero-content-overlay">
              <h1 className="hero-title">Amherst Badminton Invitational 2025</h1>
              <p className="hero-subtitle">Join us for an exciting tournament hosted by Amherst College & UMass Amherst</p>  
              <div className="hero-buttons">
                <a href="#registration" className="btn btn-primary">Register Now</a>
                <a href="#about" className="btn btn-secondary">Learn More</a>
              </div>
            </div>
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