import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
    <section className="experience">
      <h2>Professional Experience</h2>
      <ul>
        <li>
          <h3>IT Specialist</h3>
          <p>San Francisco Toyota</p>
          <div className="location-date">
            <img src={`${process.env.PUBLIC_URL}/calendar.png`} alt="Date Icon" />
            <p>June 2024 - Present</p>
          </div>
          <p className="description">
            Configured and deployed Windows/macOS devices, VoIP systems, networking hardware, and printers to ensure seamless operations.
            Installed, maintained, and troubleshot IT systems to reduce downtime and improve efficiency. Managed user accounts via Microsoft Entra ID, Office 365, and Google Workspace. Partnered with the IT director on secure infrastructure and provided Level 1 and 2 support for 250+ users. Conducted IT onboarding sessions for new employees.
          </p>
        </li>
        <li>
          <h3>Operations Manager</h3>
          <p>University of Oregon Student Recreation Center</p>
          <div className="location-date">
            <img src={`${process.env.PUBLIC_URL}/calendar.png`} alt="Date Icon" />
            <p>March 2023 - June 2024</p>
          </div>
          <p className="description">
            Supervised and coordinated all program areas within the Student Recreation Center. Acted as the primary contact for SRC and satellite facilities. Led operations staff and ensured effective communication and smooth day-to-day operations.
          </p>
        </li>
        <li>
          <h3>Operation Specialist / Attendant</h3>
          <p>University of Oregon Student Recreation Center</p>
          <div className="location-date">
            <img src={`${process.env.PUBLIC_URL}/calendar.png`} alt="Date Icon" />
            <p>September 2021 - March 2023</p>
          </div>
          <p className="description">
            Assisted patrons with memberships, class registrations, and inquiries. Delivered front-desk support and mentored attendants, helping with task execution and resolving on-the-job issues.
          </p>
        </li>
        <li>
          <h3>Sales Associate</h3>
          <p>Sports Basement</p>
          <div className="location-date">
            <img src={`${process.env.PUBLIC_URL}/calendar.png`} alt="Date Icon" />
            <p>April 2018 - December 2022</p>
          </div>
          <p className="description">
            Provided customer service, assisted with POS operations, fulfillment, and merchandising. Trained and supported new team members.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Experience;
