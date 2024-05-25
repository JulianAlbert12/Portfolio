import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <section id="header"><Header /></section>
        <section id="about"><About /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </div>
    </div>
  );
}

export default App;
