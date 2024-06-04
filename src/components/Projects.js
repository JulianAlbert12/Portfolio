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
              <a href="https://github.com/JulianAlbert12/NetVision" className="project-link">
                <h3>Net Vision</h3>
                <p>This project’s main goal is to create a web-based interface for conducting port scans on target IP addresses, using both a frontend developed using React.js and a backend API built with Flask.</p>
                <p classname="read-more">See more</p>
              </a>
            </div>
            <div className="project-image">
              <img src={`${process.env.PUBLIC_URL}/TCPoutput.png`} alt="Output" />
            </div>
          </div>


          <div className="project-content">
            <div className="project-text">
              <a href="https://github.com/JulianAlbert12/User-Authentication" className="project-link">
                <h3>User-Authenticaion</h3>
                <p>This project delved deep into user authentication in web apps, focusing on ensuring maximum security. By utilizing Firebase Authentication and React.js,
                   I explored how to implement authentication features effectively. It was a hands-on journey where I learned and applied the key security measures needed 
                   to protect user data and ensure only authorized access. My goal was to make the authentication system rock-solid and reliable.</p>
                  <p classname="read-more">See more</p>
              </a>
            </div>
            <div className="project-image">
              <img src={`${process.env.PUBLIC_URL}/Login.png`} alt="Output" />
            </div>
          </div>



        </li>
      </ul>
    </section>
  );
};

export default Projects;
