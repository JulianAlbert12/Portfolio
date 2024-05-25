import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <ul>
        <li>
          <h3>Project Title</h3>
          <p>Project Description</p>
          <a href="github.com/JulianAlbert12">GitHub Link</a>
        </li>
        {/* Add more projects as needed */}
      </ul>
    </section>
  );
};

export default Projects;
