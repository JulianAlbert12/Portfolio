import React, { useState, useRef, useEffect } from 'react';
import './About.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(showMore ? `${contentRef.current.scrollHeight}px` : '60px'); // Adjust initial height to match CSS
    }
  }, [showMore]);

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="About">
      <section className="text">
        <h2>About Me</h2>
        <div className={`content ${showMore ? 'show-more' : ''}`} style={{ maxHeight: contentHeight }} ref={contentRef}>
          <p>
            Currently studying computer science with a focus on computer security at the University of Oregon, gaining expertise in securing computer systems and networks. As a soon-to-be graduate, I am eager to apply my diverse skill set and passion for technology to entry-level IT roles.
          </p>
          <p>
            Throughout my academic journey, I have cultivated a strong foundation in computer science, with a focus on computer security, network architecture, and cryptography. My coursework has equipped me with practical knowledge in troubleshooting hardware and software issues, configuring network devices, and implementing security measures to safeguard sensitive data.
          </p>
          <p>
            In addition to my academic pursuits, I have gained hands-on experience in customer service roles, where I developed excellent communication and problem-solving skills. These skills, coupled with my technical expertise, make me well-prepared to excel in IT helpdesk/support roles, where I can leverage my ability to assist users with technical issues and provide timely resolutions.
          </p>
          <p>
            Furthermore, my passion for cybersecurity drives my interest in pursuing entry-level security analyst positions. I am eager to apply my knowledge of security principles and protocols to identify and mitigate potential security threats, ensuring the integrity and confidentiality of organizational data.
          </p>
          <p>
            I am enthusiastic about the opportunity to contribute to a dynamic IT team and continue learning and growing in the field of information technology.
          </p>
        </div>
        <button className="button" onClick={toggleShowMore}>
          {showMore ? 'Show Less' : 'Show More'}
        </button>
      </section>
    </div>
  );
};

export default About;
