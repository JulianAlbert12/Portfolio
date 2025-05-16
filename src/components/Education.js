import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <h2>Education & Training</h2>
      <ul>
        <li>
          <h3>Bachelor of Science in Computer Science</h3>
          <p>University of Oregon at Eugene, Oregon</p>
          <p>September 2020 - June 2024</p>
        </li>
        <li>
          <h3>Google Cybersecurity Certificate</h3>
          <p>Google</p>
          <p>April 2024</p>
        </li>
        <li>
          <h3>Security+ Certification</h3>
          <p>CompTIA</p>
          <p>May 2025</p>
        </li>
        <li>
          <h3>Network+ Certification</h3>
          <p>CompTIA</p>
          <p>June 2025</p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
