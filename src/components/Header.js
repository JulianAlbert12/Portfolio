import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-text">
          <h1>Julian Albert</h1>
          <p>Student passionate about Cybersecurity</p>
        </div>
        <div className="header-image">
          <img src={`${process.env.PUBLIC_URL}/Julian.png`} alt="Your Name" />
        </div>
      </div>
    </header>
  );
};

export default Header;
