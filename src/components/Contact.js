import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "bd1782ed-000c-4fb6-b3f6-854d312d60ff");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-message">
        <h2>Let's Chat</h2>
        <p>Whether you have a question, want to start a project or simply want to connect.</p>
        <p>Feel free to send me a message or use the contact form.</p>
        <div className="contact-logos">
          <a href="https://github.com/JulianAlbert12" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/github.png`} alt="GitHub" />
          </a>
          <a href="https://linkedin.com/in/julian-albert-6a1761258" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/linkedin.png`} alt="LinkedIn" />
          </a>
          <a href="mailto:julianalbert0012@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/email.png`} alt="Email" />
          </a>
          <a href={`${process.env.PUBLIC_URL}/Julian_Albert.pdf`} target="_blank" rel="noopener noreferrer">
            <img src={`${process.env.PUBLIC_URL}/resume.png`} alt="Resume" />
          </a>
        </div>
      </div>
      <div className="contact-form">
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required></textarea>
          <button type="submit">Submit Form</button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
}