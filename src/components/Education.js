import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section className="education">
      <h2>Education</h2>
      <ul>
        <li>
          <h3>University Name</h3>
          <p>Degree, Field of Study</p>
          <p>Year of Graduation</p>
        </li>
        {/* Add more education details as needed */}
      </ul>
    </section>
  );
};

export default Education;
