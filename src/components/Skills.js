import React from 'react';
import './Skills.css';

const Skills = () => {
  return (
    <section className="skills">
      <h2>Skills</h2>
      <ul>
        <li>Python</li>
        <li>C</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Unix</li>
        <li>Mac OS</li>
        <li>Windows</li>
        <li>Cyber Security Fundamentals (from Google Cyber Security Certification)</li>
        <li>Network Security (from Google Cyber Security Certification)</li>
        <li>Security Operations (from Google Cyber Security Certification)</li>
        <h4>Security+ Certification Knowledge Domains:</h4>
        <ul>
          <li>Threats, Attacks, and Vulnerabilities</li>
          <li>Technologies and Tools</li>
          <li>Architecture and Design</li>
          <li>Identity and Access Management</li>
          <li>Risk Management</li>
        </ul>
        {/* Add more skills as needed */}
      </ul>
    </section>
  );
};

export default Skills;
