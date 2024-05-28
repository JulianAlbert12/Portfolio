import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <div className="project-content">
            <div className="project-text">
              <h3>Net Vision</h3>
              <p>This project’s main goal is to create a web-based interface for conducting port scans on target IP addresses, using both a frontend developed using React.js and a backend API built with Flask.</p>
              <a href="https://github.com/JulianAlbert12/NetVision">GitHub Link</a>
            </div>
            <div className="project-image">
            <img src={`${process.env.PUBLIC_URL}/TCPoutput.png`} alt="Output" />
            </div>
          </div>
        </li>
        <div className="project-content">
            <div className="project-text">
              <h3>Net Vision</h3>
              <p>This project’s main goal is to create a web-based interface for conducting port scans on target IP addresses, using both a frontend developed using React.js and a backend API built with Flask.</p>
              <a href="https://github.com/JulianAlbert12/NetVision">GitHub Link</a>
            </div>
            <div className="project-image">
            <img src={`${process.env.PUBLIC_URL}/TCPoutput.png`} alt="Output" />
            </div>
          </div>
      </ul>
    </section>
  );
};

export default Projects;
