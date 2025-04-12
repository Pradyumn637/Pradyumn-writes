import React, { useState } from 'react';
import './App.css';
import logo from './assets/744ffa13-2b05-49e9-b1a2-b8d2acd71eb3.png';
import bgImage from './assets/webpage_bg.jpg';  // Make sure this path is correct

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div 
      className="App" 
      style={{ 
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',  // Make sure the image covers the full screen
        backgroundPosition: 'center',  // Center the background image
        backgroundRepeat: 'no-repeat', // Avoid repeating the image
        backgroundAttachment: 'fixed', // Keep the background fixed while scrolling
        height: '100vh'  // Ensure the container takes up the full viewport height
      }}
    >
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
          <div className="title-container">
            <h1 className="web-title">Pradyumn Writes</h1>
            <p className="tagline">Enter the World of Darkness & Mystery</p>
          </div>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </header>

      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li>Movie Standalones</li>
          <li>Behind the Scenes</li>
          <li>Character Arcs</li>
          <li>More to Come...</li>
        </ul>
      </div>

      <div className="main-content">
        <button className="enter-button">Enter the Realm</button>
      </div>
    </div>
  );
}

export default App;
