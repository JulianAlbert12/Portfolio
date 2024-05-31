import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <ul>
        <li>
          <h3>Operations Manager</h3>
          <p>University of Oregon Student Recreation Center</p>
          <p>March 2023 - June 2024</p>
          <p>Assist in the supervision of all program areas in the Student Recreation Center. Serve as the leader and point person in the SRC and satellite facilities. Overseeing all operations staff.</p>
        </li>
        <li>
          <h3>Freelance Web Developer</h3>
          <p>Hagel Supply</p>
          <p>June 2023 - October 2024</p>
          <p>Developed, optimized, and maintained the company website utilizing HTML, CSS, JavaScript, Google Firestore, and several APIs to meet clients' needs and goals. Tested websites and performed user testing and troubleshooting before live deployment.</p>
        </li>
        <li>
          <h3>Operation Specialist</h3>
          <p>University of Oregon Student Recreation Center</p>
          <p>September 2021 - March 2023</p>
          <p>Assist patrons with memberships, facility inquiries, and classes. Provide customer support to all patrons and staff. Lead and help operations attendants with tasks and problems.</p>
        </li>
        <li>
          <h3>Sales Associate</h3>
          <p>Sports Basement</p>
          <p>April 2018 - December 2022</p>
          <p>Delivered exceptional customer service. Assisted in POS system, fulfillment, receiving, and merchandising operations. Developed and instructed new staff members.</p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
