import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Julian Albert</h1>
          <p>Student passionate about Cybersecurity</p>
          <div className="header-logos">
            <a href="https://github.com/JulianAlbert12" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" />
            </a>
            <a href="https://linkedin.com/in/julian-albert-6a1761258" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
            </a>
            <a href="mailto:julianalbert0012@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/email.png`} alt="Email" />
            </a>
            <a href={`${process.env.PUBLIC_URL}/Julian_Albert.pdf`} target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/resume.png`} alt="Resume" />
            </a>
          </div>
        </div>
        <div className="header-image">
          <img src={`${process.env.PUBLIC_URL}/Julian.png`} alt="Your Name" />
        </div>
      </div>
    </header>
  );
};

export default Header;
