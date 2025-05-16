import React, { useState, useRef, useEffect } from 'react';
import './About.css';

const About = () => {
  const [showMore, setShowMore] = useState(false);
  const [contentHeight, setContentHeight] = useState('0px');
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(showMore ? `${contentRef.current.scrollHeight}px` : '60px');
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
            I’m an IT professional with a background in computer science and a strong focus on cybersecurity. I’ve built a solid foundation in securing systems, managing networks, and solving complex technical issues through both academic training and hands-on experience.
          </p>
          <p>
            My skill set includes configuring and maintaining network infrastructure, supporting end users, deploying hardware, and implementing security best practices. I've worked in IT support roles where I was responsible for troubleshooting hardware/software issues, managing user accounts, and improving operational workflows.
          </p>
          <p>
            Outside of my day-to-day tasks, I’ve earned certifications like CompTIA Security+ and Google Cybersecurity, which enhanced my understanding of security principles, incident response, and threat mitigation strategies.
          </p>
          <p>
            I'm passionate about staying current in a rapidly evolving field and always eager to learn. My goal is to grow into cybersecurity analyst or infrastructure roles, where I can contribute to protecting organizational assets and supporting scalable, secure systems.
          </p>
          <p>
            I’m excited to bring my technical skills, problem-solving mindset, and collaborative spirit to a forward-thinking tech team.
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
